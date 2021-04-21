import React, { useContext } from 'react'
import { Input } from 'antd'
import { AppContext } from '../../context/AppContext'



export const InputComponent = () => {

    const { handleGlobal } = useContext(AppContext)

    return (
        <div>

            <Input

                onChange={(e) => handleGlobal({
                    name: 'inputComponent',
                    payload: e.target.value
                })}
                placeholder="Ep: Mi espacio de trabajo"

            />


        </div>
    )
}



