import React from "react"
import Menu from "../component/menu"
import Languageoption from '../component/language-dropdown'
import {useTranslation} from 'react-i18next'
import i18next from "i18next"

const Aboutus = () => {

    const {t} = useTranslation();
    
    return(
        <div style={{marginTop:'50px'}}>
            <Menu/>
            <div className="div-about" >
               <h4>{t('aboutUs')}</h4>
            </div>
            
        </div>
       
    )
}
export default Aboutus