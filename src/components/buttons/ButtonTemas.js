import React, { useContext } from 'react'
import { Button } from 'antd'
import { AppContext } from '../../context/AppContext'




export const ButtonTemas = () => {

    const { handleGlobal } = useContext(AppContext)

    const colors = [
        '#39B0FF',
        '#04B58B',
        '#3E9C4B',
        '#B6BC00',
        '#E59100',
        '#E55C00',
        '#EE1F50',
        '#D6198A',
        '#B321F1',
        '#48B5FE'
    ]

    return (
        <div className='temas-btn' >
            {
                colors.map((color, index) => (
                    <div key={index}>
                        <Button shape="circle" style={{
                            backgroundColor: color,
                            color: color,
                            border: '1px solid',
                            width: '45px',
                            height: '47.54px',
                            flexGrow: '1',

                        }}
                            onClick={() => handleGlobal({ name: 'color', payload: color })}
                        >{String(' ')}</Button>
                    </div>
                ))
            }
        </div >
    )
}
