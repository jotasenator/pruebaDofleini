import React, { useReducer } from 'react'

import { appReducer } from './reducer/appReducer'

import { Prueba } from './Prueba'
import { AppContext } from './context/AppContext'



export const App = () => {

    const initialState =
    {
        color: '#d8dfff',
        inputComponent: 'mi.espacio',
        inputSuffixComponent: 'mi.dominio',
        personas: 'Sólo yo',
        privacidad: 'Privado'
    }


    const [state, dispatch] = useReducer(appReducer, initialState);


    const handleChangeColor = (value) => {
        dispatch({ type: 'CHANGE_COLOR', payload: value })
    }

    const handleChangeSpace = (value) => {
        dispatch({ type: 'CHANGE_INPUT_SPACE', payload: value })
    }

    const handleChangeDomine = (value) => {
        dispatch({ type: 'CHANGE_INPUT_DOMINE', payload: value })
    }

    const handleChangePersonas = (value) => {
        dispatch({ type: 'CHANGE_PERSONAS', payload: value })
    }

    const handleChangePrivacidad = (value) => {
        dispatch({ type: 'CHANGE_PRIVACIDAD', payload: value })
    }



    return (
        <AppContext.Provider
            value={
                {
                    ...state,
                    handleChangeColor,
                    handleChangeSpace,
                    handleChangeDomine,
                    handleChangePersonas,
                    handleChangePrivacidad
                }
            }>
            <Prueba />
        </AppContext.Provider>
    )
}
