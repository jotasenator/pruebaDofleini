import React, { useReducer } from 'react'
import { Prueba } from './Prueba'
import { AppContext } from './context/AppContext'
import { types } from './context/types/types'
import { appReducer } from './context/reducer/appReducer'


export const App = () => {

    const initialState =
    {
        color: '#d8dfff',
        inputComponent: 'mi.espacio',
        inputSuffixComponent: 'mi.dominio',
        personas: 'Sólo yo',
        privacidad: 'Privado',

    }


    const [state, dispatch] = useReducer(appReducer, initialState);

    const handleGlobal = (value) => {
        dispatch({
            type: types.globalTest,
            name: value.name,
            payload: value.payload
        })
    }



    return (
        <AppContext.Provider
            value={
                {
                    ...state,
                    handleGlobal

                }
            }>
            <Prueba />
        </AppContext.Provider>
    )
}
