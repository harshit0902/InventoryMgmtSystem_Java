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

function ViewItems()
{
    return (
        <>
    <div>
        {items.map((item)=>(
                <div key={item.id}>
                    <h5> Name: {item.name} ID: {item.id}
                    </h5>
                </div>
            )
        )}
    </div>
        </>
    );
}
export default ViewItems;