import React from 'react'

import { ButtonPersonas } from './components/buttons/ButtonPersonas'
import { ButtonClean } from './components/buttons/ButtonClean'
import { ButtonInfo } from './components/buttons/ButtonInfo'
import { InputComponent } from './components/inputs/InputComponent'
import { InputSuffixComponent } from './components/inputs/InputSuffixcomponent'
import { ButtonLoad } from './components/buttons/ButtonLoad'
import { RadioDivSelect } from './components/RadioDivSelect'
import { ButtonSubmit } from './components/buttons/ButtonSubmit'
import { ButtonTemas } from './components/buttons/ButtonTemas'

// import { SVG } from './components/svg/SVG'
import { SVGPlaygroung } from './components/svg/SVGPlaygroung'


import './css.css'
import { Parrafo1 } from './components/parrafos/Parrafo1'
import { Parrafo2 } from './components/parrafos/Parrafo2'
import { Parrafo3 } from './components/parrafos/Parrafo3'


export const Prueba = () => {
  return (
    <div className='global-col-all'>

      <div className=' global-col-left'>

        <h1>Configuración</h1>

        <div>
          <h3>Logo del espacio</h3>
          <div className='bBtn-loadBtn'>
            <ButtonLoad />
          </div>
        </div>



        <div className='infoBtn-p'>
          <ButtonInfo />
          <div className='p1-inforBtn'>
            <Parrafo1 />
          </div>
        </div >



        <div>
          <div className='espacio-input'>
            <h3>Nombre del espacio</h3>
            <InputComponent />
          </div>

          <div className='url-input'>
            <h3>URL del espacio (dirección web)</h3>
            <InputSuffixComponent />
          </div>

          <div className='infoBtn-p'>
            <ButtonInfo />
            <div className='p1-inforBtn'>
              <Parrafo2 />
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
            <ButtonInfo />
            <div className='p1-inforBtn'>
              <Parrafo3 />
            </div>
          </div>
        </div>


        <div className='radio-div-wrapper'>
          <h3>
            Color del tema
        </h3>
          <div className='temas'>
            <ButtonTemas />
          </div>
        </div>


        <div className='radio-div-wrapper'>
          <div>
            <h3>Privacidad del espacio</h3>
          </div>
          <div>
            <div className='radio-div'>
              <RadioDivSelect />
            </div>
          </div>
        </div>


        <div className='submit-button'>
          <div>
            <ButtonSubmit />
          </div>
          <div>
            <ButtonClean />
          </div>
        </div>
      </div>


      <div className='global-col-rigth'>
        {/* <SVG /> */}
        <SVGPlaygroung />
      </div>


    </div>

  )
}

