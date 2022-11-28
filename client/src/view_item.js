import React from 'react'

import { useState } from "react";
const items =[ 
    {
        name:"Apple",
        id: 123
    },
    {
        name:"Apple",
        id: 321
    },
    {
        name:"Apple",
        id: 132
    }

];
function App()
{

    return (
        <div >
            {items.map((item)=>(
                <div>
                    <h5> Item name: {item.name}  Id :{item.id}
                    </h5>
                </div>
            )
            )}
        </div>
    );
}
export default App();