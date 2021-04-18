import React, { useState } from 'react'
import { Button } from 'antd';

export const ButtonPersonas = () => {

    const [valuePersonas, setValuePersonas] = useState('Sólo yo')



    const handleClick1 = () => {
        setValuePersonas('Sólo yo')


    }
    const handleClick2 = () => {
        setValuePersonas('2 - 10')


    }
    const handleClick3 = () => {
        setValuePersonas('11 - 25')
    }


    const handleClick4 = () => {
        setValuePersonas('26 - 50')

    }
    const handleClick5 = () => {
        setValuePersonas('51 - 100')


    }
    const handleClick6 = () => {
        setValuePersonas('500 +')


    }

    console.log(valuePersonas)



    return (
        <div className='quantityButton'>

            <Button onClick={handleClick1} >Sólo yo</Button>
            <Button onClick={handleClick2}>2 - 10</Button>
            <Button onClick={handleClick3}>11 - 25</Button>
            <Button onClick={handleClick4}>26 - 50</Button>
            <Button onClick={handleClick5}>51 - 100</Button>
            <Button onClick={handleClick6}>500 +</Button>


        </div>
    )
}


