export {};
declare global {
    var _mongo: Promise<MongoClient> | undefined;
}
// declare global {
//     namespace NodeJS {
//         interface Global {
//             _mongo: Promise<MongoClient> | undefined;
//         }
//     }
// }
