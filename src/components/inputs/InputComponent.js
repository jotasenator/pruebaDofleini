import React, { useContext } from 'react'
import { Input } from 'antd'
import { AppContext } from '../../context/AppContext'



export const InputComponent = () => {

    const { handleChangeSpace } = useContext(AppContext)

    return (
        <div>

            <Input

                onChange={(e) => handleChangeSpace(e.target.value)}
                placeholder="Ep: Mi espacio de trabajo"

            />


        </div>
    )
}



