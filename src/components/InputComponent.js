import React from 'react'

import { Input } from 'antd';


export const InputComponent = () => {

    const handleChange = (e) => {
        const inputComponent = e.target.value
        console.log(inputComponent)
    }


    return (
        <div>

            <Input
                onChange={handleChange}
                placeholder="Ep: Mi espacio de trabajo"

            />


        </div>
    )
}



