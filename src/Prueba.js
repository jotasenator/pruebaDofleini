import React from 'react'
import { BBtn } from './components/BBtn'
import { ButtonPersonas } from './components/ButtonPersonas'
import { InfoBtn } from './components/InfoBtn'
import { InputComponent } from './components/InputComponent'
import { InputSuffixComponent } from './components/InputSuffixcomponent'
import { LoadBtn } from './components/LoadBtn'
import { TemasButton } from './components/TemasButton'


import './css.css'


export const Prueba = () => {
  return (
    <div className='global'>
      <h1>Configuración</h1>

      <div>
        <h3>Logo del espacio</h3>
        <div className='bBtn-loadBtn'>
          <BBtn />

          <LoadBtn />

        </div>
      </div>



      <div className='infoBtn-p'>
        <InfoBtn />
        <div className='p1-inforBtn'>
          <p>
            Este logo identificará tu espacio entre el resto.
          </p>
          <p>
            Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp con fondo transparente.
         </p>
        </div>
      </div >



      <div>

        <div>
          <h3>Nombre del espacio</h3>

          <InputComponent />
        </div>

        <div className='url-input'>
          <h3>URL del espacio (dirección web)</h3>
          <InputSuffixComponent />

        </div>
        <div className='infoBtn-p'>
          <InfoBtn />
          <div>
            <p>
              Puedes cambiar la URL de tu espacio (dirección web) en cualquier momento, pero por cortesía hacia tus compañeros de trabajo y otros usuarios de Plankton, porfavor no lo hagas muy seguido :)
           </p>
            <p>
              Nota: Si cambias la URL de tu espacio, Plankton automáticamente redireccionará desde la antigua dirección hacia la nueva. En cualquier caso, deberías asegurarte que tus compañeros sepan acerca del cambio porque la dirección anterior pasará a estar libre y puede ser usada por otro espacio en el futuro.
            </p>
          </div>
        </div>
      </div >

      <div>
        <div>
          <h3>
            ¿Cuántas personas trabajarán contigo, incluyéndote a ti?
        </h3>
          <div>
            <ButtonPersonas />
          </div>

        </div>

        <div className='infoBtn-p'>
          <InfoBtn />
          <div>
            <p>Este logo identificará tu espacio entre el resto.</p>

            <p> Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp con fondo transparente</p>
          </div>
        </div>
      </div>

      <div>
        <h3>
          Color del tema
        </h3>
        <div >

          <TemasButton />

        </div>
      </div>

      <div>
        <h3>Privacidad del espacio</h3>

      </div>
    </div>
  )
}

