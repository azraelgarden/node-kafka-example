import { Kafka, Consumer, ConsumerSubscribeTopic } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'consumer',
    brokers: ['0.0.0.0:9092'],
    retry: {
        initialRetryTime: 300,
        retries: 10
    }
});

const consumer : Consumer = kafka.consumer({ groupId: 'consumer-group'});
const kafkaTopic: ConsumerSubscribeTopic = {
    topic: 'issue-sales',
    fromBeginning: false
  }

async function run() {
    await consumer.connect();
    await consumer.subscribe( kafkaTopic );
    await consumer.run({
        eachMessage: async({topic, partition, message}) => {
            const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`
            console.log('---------------------------------------------------')
            console.log(`- ${prefix} | Message: ${message.value}`)
            console.log('---------------------------------------------------')
        },
    })
}

run().catch(console.error);