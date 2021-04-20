import React from 'react'

import { Upload, Button } from 'antd';

import loadingIcon from '../../image/Group 2493.svg'

export const ButtonLoad = () => {

    return (
        <div className='loadButton'

        >
            <Upload

                listType="picture"

            >
                <Button

                    style={{
                        borderRadius: '5px'
                    }}
                    icon={<img src={loadingIcon} alt="loadingIcon" />}>
                    Subir logo
                </Button>

            </Upload>


        </div >
    )
}

