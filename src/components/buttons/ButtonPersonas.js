import React, { useContext } from 'react'
import { Button } from 'antd';
import { AppContext } from '../../context/AppContext';


export const ButtonPersonas = () => {

    const { handleChangePersonas } = useContext(AppContext)

    return (
        <div className='quantityButton'>

            <Button onClick={() => handleChangePersonas('Sólo yo')} >Sólo yo</Button>
            <Button onClick={() => handleChangePersonas('2 - 10')}>2 - 10</Button>
            <Button onClick={() => handleChangePersonas('11 - 25')}>11 - 25</Button>
            <Button onClick={() => handleChangePersonas('26 - 50')}>26 - 50</Button>
            <Button onClick={() => handleChangePersonas('51 - 100')}>51 - 100</Button>
            <Button onClick={() => handleChangePersonas('500 +')}>500 +</Button>


        </div>
    )
}


