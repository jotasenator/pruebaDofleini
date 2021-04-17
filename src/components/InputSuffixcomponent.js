import React from 'react'

import { Input } from 'antd';


export const InputSuffixComponent = () => {

    const handleChange = (e) => {
        const inputSuffixComponent = e.target.value
        console.log(inputSuffixComponent)
    }

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



