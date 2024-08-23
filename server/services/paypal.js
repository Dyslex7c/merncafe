import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

async function generateAccessToken() {
    const response = await axios({
        url: process.env.PAYPAL_BASE_URL + "/v1/oauth2/token",
        method: "post",
        data: "grant_type=client_credentials",
        auth: {
            username: process.env.PAYPAL_CLIENT_ID,
            password: process.env.PAYPAL_SECRET
        }
    })
    console.log(global.totalPrice);
    return response.data.access_token
    
}

const createOrder = async () => {
    const accessToken = await generateAccessToken();
    const response = await axios({
        url: process.env.PAYPAL_BASE_URL + "/v2/checkout/orders",
        method: "post",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        },
        data: JSON.stringify({
            intent: "CAPTURE",
            purchase_units: [
                {
                    items: [
                        {
                            name: "Something",
                            description: "Complete",
                            quantity: 1,
                            unit_amount: {
                                currency_code: "USD",
                                value: global.totalPrice.totalPrice
                            }
                        }
                    ],
                    amount: {
                        currency_code: "USD",
                        value: global.totalPrice.totalPrice,
                        breakdown: {
                            item_total: {
                                currency_code: "USD",
                                value: global.totalPrice.totalPrice
                            }
                        }
                    }
                }
            ],
            application_context: {
                return_url: "http://localhost:3000/complete-order",
                cancel_url: "http://localhost:3000/cancel-order",
                user_action: "PAY_NOW",
                brand_name: "Cafe Dulcet"
            }
        })
    })
    console.log(global.totalPrice);
    return response.data.links.find(link => link.rel === "approve").href;
    
}

export default createOrder