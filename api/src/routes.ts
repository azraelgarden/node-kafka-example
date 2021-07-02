import express from 'express';
const routes = express.Router();

type RequestBody = {
    customer: {
        id: number,
        name: string
    },
    products: [
        {
            id: number,
            name: string,
            price: number,
            quantity: number
        }
    ],
    coupon?: {
        id: number,
        name: string,
        promocode: string
    }
}

routes.post('/sale', async (req, res) => {
    req.producer.connect();

    const body = req.body as RequestBody;

    const consumerObject = {
        id:body.customer.id,
        name:body.customer.name
    }

    const productsArray = () => {
        const receivedProducts = req.body.products.length;
        const products = [];

        for(let i=0; i < receivedProducts; i++) {
            console.log(req.body.products[i]);
            products.push(
                {
                    id:body.products[i].id,
                    name:body.products[i].name,
                    price:body.products[i].price,
                    quantity:body.products[i].quantity
                }
            )
        }

        return products;
    }

    const couponObject =body.coupon ? {
        id:body.coupon.id,
        name:body.coupon.name,
        promocode:body.coupon.promocode
    } : null;

    const saleMessage = {
        consumer:  consumerObject,
        products: productsArray(),
        coupon: couponObject
    }

    await req.producer.send({
        topic: 'issue-sales',
        messages: [
            {
                value: JSON.stringify(saleMessage)
            }
        ]
    })

    return res.status(200).json({
        serverAnswer: 'The sale has been successfully sent'
    })

})

export default routes;