import React from 'react';

const layout = ({children} : {children: React.ReactNode}) => {
    return (
        <div >
            현대카드 할인중입니다. 
            {children}
        </div>
    );
};

export default layout;