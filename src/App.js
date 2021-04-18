import React from 'react'
import { AppContext } from './appContext/AppContext'

import { Prueba } from './Prueba'


export const App = () => {




    const valores = {
        miDominio: 'viva fidel',
        miEspacio: 'mi.espacio',
        color: 'red',
        valuePersonas: '5 personas',
        valueInput: 'Privado'

    }


    return (
        <AppContext.Provider value={valores}>
            <Prueba />

        </AppContext.Provider>
    )
}
