import express from 'express';
import bodyParser from 'body-parser';
import { Kafka, Producer } from 'kafkajs';

import routes from './routes';

const app = express();
const port = 8080;

const kafka = new Kafka({
    clientId: 'saleApi',
    brokers: ['0.0.0.0:9092'],
    retry: {
        initialRetryTime: 300,
        retries: 10
    }
});

const producer : Producer = kafka.producer()

app.use((req, res, next) => {
    req.producer = producer;
    return next();
})

app.use(bodyParser.json());
app.use(routes);

async function run() {
    await producer.connect();
    app.listen(port);
};

run().catch(console.error);