import React from 'react'

import { Button } from 'antd'


export const ButtonClean = () => {



    return (
        <div>
            <Button
                style={{
                    width: '112px',
                    height: '45px',
                    borderRadius: '5px',
                    background: '#FFFFFF',
                    border: '1px solid #E4E4E4',
                    opacity: '1',
                    marginLeft: '15px'

                }}
                onClick={() => window.location.replace('')}



            >
                Descartar
            </Button>

        </div>
    )
}
