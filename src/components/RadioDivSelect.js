import React, { useContext } from 'react'

import { Radio } from 'antd';
import { AppContext } from '../context/AppContext';

export const RadioDivSelect = () => {

    const { handleChangePrivacidad } = useContext(AppContext)

    const { privacidad } = useContext(AppContext)



    const onChange = e => {

        handleChangePrivacidad(e.target.value);
    };
    const groupStyle = {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
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



    return (
        <>
            <Radio.Group style={groupStyle} onChange={onChange} value={privacidad}>

                {
                    privacidad === 'Privado'
                        ?
                        (
                            <>
                                <div className='radio-div radio-div-1'>
                                    <Radio value={'Privado'}>
                                        <div style={styleTextActive} >
                                            Privado
                                        </div>

                                    </Radio>

                                </div>

                                <div style={styleNoActive} className='radio-div radio-div-2'>
                                    <Radio value={'Público'}>
                                        <div style={styleTextNoActive}>
                                            Público
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


