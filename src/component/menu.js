import { NavLink } from 'react-router-dom';
import './menu.css';
import Languageoption from './language-dropdown';
import i18next from "i18next"


const Menu = () =>{
    const handleClick=(e)=>{
        i18next.changeLanguage(e.target.value)
    }
    return(
        <div className='menu-wrapper'>

            <div className='menu-wrapper2'>
            <NavLink to="/">Home</NavLink>
            <NavLink exact to="/contactus">Contact</NavLink>
            <NavLink exact to="/aboutus">About</NavLink>
           <div className='lan'>  <Languageoption  onChange={(e)=> handleClick(e)}/>  </div>
           </div>

        </div>
    )
}
export default Menu;