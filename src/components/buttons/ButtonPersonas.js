import React, { useContext } from 'react'
import { Button } from 'antd';
import { AppContext } from '../../context/AppContext';


export const ButtonPersonas = () => {

    const { handleGlobal } = useContext(AppContext)

    return (
        <div className='quantityButton'>

            <Button onClick={() => handleGlobal({ name: 'personas', payload: 'Sólo yo' })} > Sólo yo</Button>
            <Button onClick={() => handleGlobal({ name: 'personas', payload: '2 - 10' })}>2 - 10</Button>
            <Button onClick={() => handleGlobal({ name: 'personas', payload: '11 - 25' })}>11 - 25</Button>
            <Button onClick={() => handleGlobal({ name: 'personas', payload: '26 - 50' })}>26 - 50</Button>
            <Button onClick={() => handleGlobal({ name: 'personas', payload: '51 - 100' })}>51 - 100</Button>
            <Button onClick={() => handleGlobal({ name: 'personas', payload: '500 +' })}>500 +</Button>


        </div>
    )
}


