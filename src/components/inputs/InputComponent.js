import React, { useState } from 'react'

import { Input } from 'antd';


export const InputComponent = () => {

    const [inputComponent, setInputComponent] = useState('mi.espacio')



    const handleChange = (e) => {

        if (e.target.value.length === 0) {
            setInputComponent('mi.espacio')

        }
        if (e.target.value.length !== 0) {
            setInputComponent(e.target.value)

        }
    }

    console.log(inputComponent)


    return (
        <div>

            <Input
                onChange={handleChange}
                placeholder="Ep: Mi espacio de trabajo"

            />


        </div>
    )
}



