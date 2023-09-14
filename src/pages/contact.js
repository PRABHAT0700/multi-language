import React from "react"
import Menu from "../component/menu"
import { useNavigate } from "react-router-dom"
import Languageoption from '../component/language-dropdown'
import {useTranslation} from 'react-i18next'
import i18next from "i18next"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const Contactus = () => {
    const history = useNavigate();
    const handleRedirect = () => {
        history('/aboutus')
    }
    const {t} = useTranslation();
    const handleClick=(e)=>{
        i18next.changeLanguage(e.target.value)
    }
    return(
        <div style={{marginTop:'50px'}}>
            <Menu/>
        
 <div className="div-form-main">
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="on"
    >                                                            
    <div className="form-div">
      <div>
        <TextField
          error
          id="outlined-error"
          label="Name"
          defaultValue={t('f-name')}       
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Name"
          defaultValue={t('l-name')} 
          helperText="Incorrect entry."
        />
      </div>
      <div>
        <TextField
          error
          id="filled-error"
          label="Name"
          defaultValue={t('father')} 
          variant="filled"
        />
        <TextField
          error
          id="filled-error-helper-text"
          label="email"
          defaultValue={t('fmail')} 
          helperText="Incorrect entry."
          variant="filled"
        />
      </div>
      <div>
        <TextField
          error
          id="standard-error"
          label="password"
          defaultValue={t('password')} 
          variant="standard"
        />
        <TextField
          error
          id="standard-error-helper-text"
          label="password"
          defaultValue={t('confirm')} 
          helperText="Incorrect entry."
          variant="standard"
        />
        <div className="button-form" >
            <Button variant="contained" color="success">
            {t('submit')}
            </Button>
        </div>
        
      </div>

      </div>
    </Box>

    </div>

        </div>
        
    )
}
export default Contactus