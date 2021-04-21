import React, { useContext } from 'react'
import { Input } from 'antd'
import { AppContext } from '../../context/AppContext'


export const InputSuffixComponent = () => {


    const { handleGlobal } = useContext(AppContext)

    return (
        <div>

            <Input
                onChange={(e) => handleGlobal({
                    name: 'inputSuffixComponent',
                    payload: e.target.value
                })}
                size='small'
                placeholder="Ep: mi.dominio"
                suffix=".dofleini.com"
            />


        </div>
    )
}



