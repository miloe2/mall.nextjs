'use client'

import React, { useState } from 'react';
import Image from 'next/image';

let 상품 = ['tomatose', 'pasta', 'coconut'];

const List = () => {
    const [ amtArr, setAmtArr ]= useState([0, 0, 0]);

    const update = (i:number, op :string) => {
        let copy = [...amtArr];
        if(op === '+'){
            copy[i] = copy[i] +1

        } else {
            if(copy[i] !== 0){
                copy[i] = copy[i] - 1
            } else {
                copy[i] = 0
            }
        }
        setAmtArr(copy)
    }
    
    

    return (
        <React.Fragment>
            <div className='w-full h-full flex px-60 justify-center'>
                {
                    상품.map((a, idx) => (
                        <div key={idx} className='mx-1'>
                            {/* <Image src={이미지[idx]} alt="" />   */}
                            <div className='w-80 h-80 '>
                                <Image src={`https://source.unsplash.com/random/30${idx}×300`} width={300} height={300} alt="" className='w-full h-full object-cover'/>  
                            </div>
                            <div className='justify-center items-center h-auto flex flex-col'>
                                <div className='text-sm font-bold'>{a}</div>
                                <div className='flex flex-row'> 
                                    <button onClick={()=>{
                                        update(idx, '+');
                                        }} > + </button>
                                    <div className=' w-10 h-auto text-center'> {amtArr[idx]} </div> 
                                    <button onClick={()=>{
                                        update(idx, '-');
                                        }} > - </button>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </React.Fragment>
    );
};

export default List;
