import React from 'react'

import { Radio } from 'antd';

export const RadioDivSelect = () => {

    const [value, setValue] = React.useState('Privado');

    const onChange = e => {

        setValue(e.target.value);
    };
    const groupStyle = {
        display: 'flex',
        flexDirection: 'row'
    }

    const styleNoActive = {
        border: '1px solid #E4E4E4',

    }

    const styleTextNoActive = {
        font: 'normal normal normal 14px / 20px Fira Sans',
        letterSpacing: '0px',
        color: '#000000',
        opacity: '1'

    }

    const styleTextActive = {
        font: 'normal normal normal 14px / 20px Fira Sans',
        letterSpacing: '0px',
        color: '#149ffc',
        opacity: '1'
    }
    console.log('radio checked', value);




    return (
        <>
            <Radio.Group style={groupStyle} onChange={onChange} value={value}>

                {
                    value === 'Privado'
                        ?
                        (
                            <>
                                <div className='radio-div radio-div-1'>
                                    <Radio value={'Privado'}>
                                        <div style={styleTextActive} >
                                            Privado
                                             <p style={{ width: '237px' }}>
                                                El contenido será visible sólo para tí y los miembros de tu Organización.
                                             </p>
                                        </div>

                                    </Radio>

                                </div>

                                <div style={styleNoActive} className='radio-div radio-div-2'>
                                    <Radio value={'Público'}>
                                        <div style={styleTextNoActive}>
                                            Público
                                             <p style={{ width: '237px' }}>
                                                Cualquiera con el vínculo podrá ver la actividad de tu Organización
                                             </p>
                                        </div>
                                    </Radio>

                                </div>
                            </>

                        )

                        :
                        (

                            <>
                                <div style={styleNoActive} className='radio-div radio-div-1'>
                                    <Radio value={'Privado'}>
                                        <div style={styleTextNoActive}>
                                            Privado

                                        </div>
                                    </Radio>

                                </div>

                                <div className='radio-div radio-div-2'>
                                    <Radio value={'Público'}>
                                        <div style={styleTextActive} >
                                            Público
                                        </div>
                                    </Radio>

                                </div>
                            </>

                        )

                }

            </Radio.Group>
        </>

    )
}


