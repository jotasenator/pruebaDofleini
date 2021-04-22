import React from 'react'

import { Button } from 'antd';

import loadingIcon from '../../image/Group 2493.svg'

export const ButtonLoad = () => {
    const uploadedImage = React.useRef(null)


    const handleImageUpload = (e) => {

        const [file] = e.target.files

        if (file) {
            const reader = new FileReader()
            const { current } = uploadedImage
            current.file = file
            reader.onload = (e) => {
                current.src = e.target.result
            }
            reader.readAsDataURL(file)


        }
    }

    const inputFileRef = React.useRef(null);

    const handleInput = () => {
        inputFileRef.current.click()
    }




    return (
        <div className='loadButton '>
            <input
                ref={inputFileRef}
                id='input'
                type='file'
                accept='image/png'
                multiple={false}
                name=''
                onChange={handleImageUpload}
            />

            <Button
                id='button'
                onClick={handleInput}
                icon={<img src={loadingIcon} alt="loadingIcon" />}>
                Subir logo
                </Button>
            <div id='crop'>
                <div className='B'>B</div>
                <img className='imagen-B'
                    alt=''
                    ref={uploadedImage}
                />

            </div>



        </div >
    )
}

