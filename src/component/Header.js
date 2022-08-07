import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import './Header.css';
import { IconButton } from '@mui/material';
// Here we are import React from react .so This is how we create a React Component by importing React from react.
// by writing rfce we get this sinnpet. And in this sinnpet the function is created which has same name as the File have.
function Header() {
  return (
    <div className='tinder-header'>
        <IconButton className='header-icons' fontSize='large'>
        <PersonIcon  fontSize='large' />
        </IconButton>
        {/* I'm a  good component */}
        <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tinder-icon.png'/>
        
        <IconButton className='header-icons' fontSize='large'>
        <ForumIcon className='header-icons' fontSize='large'/>
        </IconButton>
        </div>
  )
}

// here we are exporting this particular  function i.e Header to the component where it is using
// here we are Exporting the child Component i.e Header.js to parent Component i.e App.js 
export default Header