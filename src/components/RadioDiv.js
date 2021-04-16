import React from 'react'

import { Radio } from 'antd';

export const RadioDiv = () => {

    const [value, setValue] = React.useState('Privado');

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const groupStyle = {
        display: 'flex',
        flexDirection: 'row'
    }

    return (

        <Radio.Group style={groupStyle} onChange={onChange} value={value}>
            <div className='radio-div radio-div-1'>
                <Radio value={'Privado'}>Privado</Radio>

            </div>

            <div style={{ border: 'border: 1px solid #E4E4E4 !important' }} className='radio-div radio-div-2'>
                <Radio value={'Público'}>Público</Radio>

            </div>




        </Radio.Group>


    )
}


