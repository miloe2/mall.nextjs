import React from 'react';
import 'normalize.css'; 
import { MongoClient } from 'mongodb';
import { connectDB } from '../src/util/database';

export default async function Home() {
    const client = await connectDB;
    const db =client.db('forum');
    let rst = await db.collection('post').find().toArray();

    // let db = (await connectDB).db('forum');
    // let result = await db.collection('post').find().toArray();

    return (
        <React.Fragment>
            <div className='w-full h-screen bg-slate-500'>
                메인 페이지입니다. 
                {
                rst.map((a , idx) => (
                        <div key={a.id}>
                            {a.title}
                            {a.content}
                        </div>
                    )
                )
                }
            </div>
        </React.Fragment>
    )
}
