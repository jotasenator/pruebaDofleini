import React, { useContext } from 'react'
import { Input } from 'antd'
import { AppContext } from '../../context/AppContext'


export const InputSuffixComponent = () => {


    const { handleChangeDomine } = useContext(AppContext)

    return (
        <div>

            <Input
                onChange={(e) => handleChangeDomine(e.target.value)}
                size='small'
                placeholder="Ep: mi.dominio"
                suffix=".dofleini.com"
            />


        </div>
    )
}



