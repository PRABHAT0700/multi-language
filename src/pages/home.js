import React from "react"
import Menu from "../component/menu"
import { useNavigate } from "react-router-dom"
import Languageoption from '../component/language-dropdown'
import {useTranslation} from 'react-i18next'
import i18next from "i18next"


const Contactus = () => {

    // const history = useNavigate();

    // const handleRedirect = () => {
    //     history('/aboutus')
    // }
    const {t} = useTranslation();



    return(

        <div style={{marginTop:'50px'}}>
            <Menu/>
        <div className="home-div">

           <div style={{textShadow:"4px 3px black", color:"white", fontSize:"1.3rem"}}>
               <h1>{t('welcome')} </h1>
               <h1> {t('contact')}  </h1> 
            </div> 

                <br />

            <div className="home-discr" >
            <h4> {t('channel')} </h4>
            <h4> {t('dashboard')} </h4>
            <h4> {t('about')} </h4>
            <h4> {t('holiday')} </h4>
            </div>
        </div>
            {/* <input/> */}
            {/* <button onClick={handleRedirect}>Submit</button> */}
        </div>
        
    )
}

export default Contactus