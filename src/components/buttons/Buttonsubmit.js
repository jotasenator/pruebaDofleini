import React, { useContext } from 'react'

import { Button } from 'antd'
import { AppContext } from '../../context/AppContext'

import Swal from 'sweetalert2'



export const ButtonSubmit = () => {

    const { color,
        inputComponent,
        inputSuffixComponent,
        personas,
        privacidad,
    } = useContext(AppContext)


    return (
        <div>
            <Button
                style={{
                    width: '159px',
                    height: '45px',
                    borderRadius: '5px',
                    color: 'white',
                    background: '#48B5FE'
                }}

                onClick={() =>


                    Swal.fire(`Parámetros seleccionados:
                    Espacio: ${inputComponent}
                    Dominio: ${inputSuffixComponent}
                    Personas: ${personas}
                    Privacidad: ${privacidad}
                    Color: ${color}`)




                }

            >
                Guardar cambios
            </Button>


        </div >
    )
}
