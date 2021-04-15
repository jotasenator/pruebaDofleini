import React from 'react'
import { Button } from 'antd'

export const BBtn = () => {
    return (
        <div className='bBtn'>
            <Button
                shape="circle"
                style={{
                    backgroundColor: '#343C4A',
                    width: '67px',
                    height: '67px',
                    border: '1px solid #343C4A',
                    pointerEvents: 'none'

                }}

            >
                <div
                    className='B'
                    style={{
                        color: 'white',
                        fontSize: '34px'

                    }}

                >
                    B
                </div>
            </Button>

        </div>
    )
}
