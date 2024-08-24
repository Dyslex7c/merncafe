import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import createOrder from "./services/paypal.js";
import { register } from "./controllers/auth.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
const corOpts = {
    origin: '*',
    methods: [
        'GET',
        'POST',
    ],

    allowedHeaders: [
        'Content-Type',
    ],
};
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(corOpts));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({storage});

app.post("/auth/register", upload.single("picture"), register);

app.use("/auth", authRoutes);

app.post("/pay", async(req, res) => {
    try {
        const url = await createOrder();
        res.redirect(url);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

app.post("/", async(req, res) => {
    global.priceBreakdown = req.body;
    console.log(global.priceBreakdown);
    
})

const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(PORT, () => console.log(`Server PORT: ${PORT}`));
}).catch((error) => console.log(`${error} did not connect`));