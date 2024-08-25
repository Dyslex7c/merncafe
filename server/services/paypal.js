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
    return response.data.access_token
}

const createOrder = async () => {
    const accessToken = await generateAccessToken();
    const items = global.priceBreakdown.priceBreakdown.splice(0, global.priceBreakdown.priceBreakdown.length - 1).map((item) => {        
        return ({
            name: item.name,
            description: "Complete",
            quantity: 1,
            unit_amount: {
                currency_code: "USD",
                value: item.price
            }
        })
    })
    
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
                    items: items,
                    amount: {
                        currency_code: "USD",
                        value: global.priceBreakdown.priceBreakdown[global.priceBreakdown.priceBreakdown.length - 1].totalPrice + 50,
                        breakdown: {
                            item_total: {
                                currency_code: "USD",
                                value: global.priceBreakdown.priceBreakdown[global.priceBreakdown.priceBreakdown.length - 1].totalPrice
                            },
                            shipping: {
                                currency_code: "USD",
                                value: 50
                            },
                        }
                    }
                }
            ],
            application_context: {
                return_url: "https://merncafe.vercel.app/complete-order",
                cancel_url: "https://merncafe.vercel.app/cancel-order",
                user_action: "PAY_NOW",
                brand_name: "Café Dulcet"
            }
        })
    })
    return response.data.links.find(link => link.rel === "approve").href;
    
}

export default createOrder