import { NavLink } from 'react-router-dom';
import './Footer.css';
import { userContext } from '../App';
import { useContext } from 'react';

function Footer() {
   const {userData} = useContext(userContext);
   
    return ( 
       <>
        <div className="footer-content">
           <div className='div_icon'>
           <NavLink to="/about"> <i className="bi bi-info-circle-fill about"></i></NavLink>
           <div>About</div>
           </div>  
            
           {userData?.token &&
           <div className='div_icon'>
           <NavLink to="/favCards"> <i className="bi bi-heart-fill card_fav"></i></NavLink>
           <div>Favorites</div>
           </div>
            } 
             
            { userData?.checked || userData?.isAdmin ?
           <div className='div_icon'>
           <NavLink to="/myCards"> <i className="bi bi-person-square my_card"></i></NavLink>
           <div>My Cards</div>
           </div> : <span></span>
            }
        </div>

        {/* <div className='div_copy '>
        <div >Contact Us</div>
        <div >Email: BCard@gmail.com whatapp: 054-5675671</div>
        <div>Phone: +973 050-7897891</div>
        </div>   */}

       <div className='div_copy fw-medium '><img className='img_footer' src="picture.jpg" />&copy; 2023 BCard.com. All Right Reserved </div>
        
        </>
     );
}

export default Footer;