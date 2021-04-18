import React, { useState } from 'react'

import { Input } from 'antd';





export const InputSuffixComponent = () => {



    const [inputSuffixComponent, setInputSuffixComponent] = useState('mi.dominio')


    const handleChange = (e) => {
        if (e.target.value.length === 0) {
            setInputSuffixComponent('mi.dominio')

        }
        if (e.target.value.length !== 0) {
            setInputSuffixComponent(e.target.value)

        }

    }

    console.log(inputSuffixComponent)

    return (
        <div>

            <Input
                onChange={handleChange}
                size='small'
                placeholder="Ep: mi.dominio"
                suffix=".dofleini.com"
            />


        </div>
    )
}



