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


    const handleChangeColor = (value) => {
        dispatch({ type: types.color, payload: value })
    }

    const handleChangeSpace = (value) => {
        dispatch({ type: types.inputComponent, payload: value })
    }

    const handleChangeDomine = (value) => {
        dispatch({ type: types.inputSuffixComponent, payload: value })
    }

    const handleChangePersonas = (value) => {
        dispatch({ type: types.personas, payload: value })
    }

    const handleChangePrivacidad = (value) => {
        dispatch({ type: types.privacidad, payload: value })
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
                    handleChangePrivacidad,

                }
            }>
            <Prueba />
        </AppContext.Provider>
    )
}
