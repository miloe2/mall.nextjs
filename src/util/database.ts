// import { MongoClient } from 'mongodb'
// const url = 'mongodb+srv://admin:<1234>@cluster0.5pqq5tu.mongodb.net/?retryWrites=true&w=majority'
// const options = { useNewUrlParser: true }
// let connectDB: Promise<MongoClient>;

// if (process.env.NODE_ENV === 'development') {
//   if (!global._mongo) {
//     global._mongo = new MongoClient(url, options).connect()
//   }
//   connectDB = global._mongo
// } else {
//   connectDB = new MongoClient(url, options).connect()
// }
// export { connectDB }

/////////////////
// 몽고 연결 API root/src/util/database.ts
// import 'dotenv/config';
// import {MongoClient} from 'mongodb'
// // Connect MongoDB
// const url = 'mongodb+srv://admin:1234@cluster0.5pqq5tu.mongodb.net/?retryWrites=true&w=majority'
// // const url = process.env.MONGODB_URL;
// // 환경변수 설정하지 않으면 에러 발생
// if (!url) {
//     throw new Error('The MONGODB_URL environment variable is not defined')
// }
// let connectDB: Promise<MongoClient>;
// if (process.env.NODE_ENV === 'development') {
//     if (!global._mongo) {
//         global._mongo = new MongoClient(url).connect()
//     }   
//     connectDB = global._mongo
// } else {
//     connectDB = new MongoClient(url).connect()
// }
// export {connectDB}

// if (process.env.NODE_ENV === 'development') {
//   if (!global._mongo) {
//     global._mongo = new MongoClient(url).connect()
//   }
//   connectDB = global._mongo
// } else {
//   connectDB = new MongoClient(url).connect()
// }
// export { connectDB }

import {MongoClient} from 'mongodb'
// Connect MongoDB
const url = process.env.MONGODB_URL;
// const url  = 'mongodb+srv://admin:1234@cluster0.5pqq5tu.mongodb.net/?retryWrites=true&w=majority'

// 환경변수 설정하지 않으면 에러 발생
if (!url) {
    throw new Error('The MONGODB_URL environment variable is not defined')
}
let connectDB: Promise<MongoClient>;
if (process.env.NODE_ENV === 'development') {
    if (!global._mongo) {
        global._mongo = new MongoClient(url).connect()
    }
    connectDB = global._mongo
} else {
    connectDB = new MongoClient(url).connect()
}
export {connectDB}

