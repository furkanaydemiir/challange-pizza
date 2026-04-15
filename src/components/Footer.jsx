import React from 'react'
import '../css/footer.css'
import logo from '../../images/iteration-2-images/footer/logo-footer.svg'
import addres from '../../images/iteration-2-images/footer/icons/icon-1.png'
import mail from '../../images/iteration-2-images/footer/icons/icon-2.png'
import phone from '../../images/iteration-2-images/footer/icons/icon-3.png'
import image1 from '../../images/iteration-2-images/footer/insta/li-0.png'
import image2 from '../../images/iteration-2-images/footer/insta/li-1.png'
import image3 from '../../images/iteration-2-images/footer/insta/li-2.png'
import image4 from '../../images/iteration-2-images/footer/insta/li-3.png'
import image5 from '../../images/iteration-2-images/footer/insta/li-4.png'
import image6 from '../../images/iteration-2-images/footer/insta/li-5.png'
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className='footer-container'>
       <div className='footer-main'>
           
           <div className='footer-grid-1'>
               <img className='logo-icon' src={logo} alt="Logo" />
               
               <div className='footer-label'>
                <img src={addres} alt="Address" />
                <div>
                  341 Londonderry Road,<br />
                  Istanbul Türkiye
                </div>
               </div>
               
               <div className='footer-label'>
                <img src={mail} alt="Mail" />
                <span>aciktim@teknlojikyemekler.com</span>
               </div>
               
               <div className='footer-label'>
                <img src={phone} alt="Phone" />
                <span>+90 216 123 45 67</span>
               </div>
           </div>

           <div className='footer-grid-2'>
             <ul>
              <h3 style={{paddingBottom:"30px"}}>Hot Menu</h3>
              <li>Terminal Pizza</li>
              <li>5 Kişilik Hackathlon Pizza</li>
              <li>useEffect Tavuklu Pizza</li>
              <li>Beyaz Console Frosty</li>
              <li>Testler Geçti Mutlu Burger</li>
              <li>Position Absolute Acı Burger</li>
             </ul>
           </div>

           <div className='footer-grid-3'>
            <h3>Instagram</h3>
            <div className='image-container'>
             <img className='insta-img' src={image1} alt="Instagram 1" />
             <img className='insta-img' src={image2} alt="Instagram 2" />
             <img className='insta-img' src={image3} alt="Instagram 3" />
             <img className='insta-img' src={image4} alt="Instagram 4" />
             <img className='insta-img' src={image5} alt="Instagram 5" />
             <img className='insta-img' src={image6} alt="Instagram 6" />
            </div>
           </div>

       </div>
       <div className='footer-bar'>
       <div>
        <hr className='line'/>
       </div>
       <div className='twitter-area'>
         <p>© 2023 Teknolojik Yemekler</p>
         <FaTwitter size={26}  />

       </div>
       </div>
    </footer>

    
  )
}

export default Footer