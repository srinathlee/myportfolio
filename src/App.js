import {FaBars,FaTwitterSquare,FaGithubSquare} from 'react-icons/fa'
import {RxCross2} from 'react-icons/rx'
import { useEffect, useState } from 'react'
import {GrProjects} from 'react-icons/gr'
import {IoIosSettings} from 'react-icons/io'
import {PiSquaresFourBold} from 'react-icons/pi'
import {SiShopify} from'react-icons/si'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsArrowRight,BsArrowDownShort} from 'react-icons/bs'
import {TfiMouse} from 'react-icons/tfi'
import {BiSolidSchool} from 'react-icons/bi'
import {GiSchoolBag} from 'react-icons/gi'
import {IoIosSchool} from 'react-icons/io'
import logo from './assets/logo.png'
import whatsapplogo from './assets/WhatsApp.svg.webp'
import arrow from './assets/arrow.png'
import Lottie from "lottie-react";
import homelottie from "./assets/homelottie.json";
import servicelottie from "./assets/servicelottie.json";
import contactlottie from "./assets/contactlottiee.json";
import homelott from "./assets/serviceslloott.json";
import {Button} from 'react-bootstrap'
import Projectcorousel from'./components/corousel/index.js'
import {motion} from 'framer-motion'
import emoji from './assets/emoji.gif'
import AOS from 'aos'
import { Chrono } from "react-chrono";
import Headroom from 'react-headroom'
import Marquee from "react-fast-marquee";
import frontend from './assets/front-end.png'
import ReactWhatsapp from 'react-whatsapp';
import 'aos/dist/aos.css'
import './App.css';

function App() {
  
  useEffect(()=>{
  AOS.init({duration:2000})
  },[])
  const [menu,setMenu]=useState(false)
  const items = [{title: '2025'}, {title: '2021'}, {title: '2019'}]

  return (
    <div className="App">

      {/* ______________________home section______________________________ */}

        <div id="homesection">
         {/* ______________________header section____________________________ */}
    <Headroom className='headroom-container'>
    <div className='header'>
        <div className='nav'>
          <div>
             <img src={logo} className='logo'/>
          </div>

          <ul className='nav-links'>
            <li className='nav-item'><a className='linkitem' href='#homesection'>Home</a></li>            
            <li className='nav-item'><a className='linkitem'  href='#skillsection'>Services</a></li>      
            <li className='nav-item'><a className='linkitem'  href='#projectsection'>Projects</a></li>
            <li className='nav-item'><a className='linkitem'  href='#educationsection'>Education</a></li>
          </ul>

          <div className='mob-bars-profile'>
            <div className='bars' onClick={()=>setMenu(!menu)}>
              { menu?<RxCross2 className='bars'/>:<FaBars  />}
            </div>
          </div>
        </div>

        <div className={menu?"menu open":"menu"}> 
              <div className='nav-item'> <a  className='linkitem'  href='#homesection'>Home</a></div>
              <div  className='nav-item'><a  className='linkitem'  href='#skillsection'>Services</a></div>
              <div className='nav-item'><a className='linkitem'  href='#projectsection'>Projects</a></div>
              <div className='nav-item'><a className='linkitem'  href='#educationsection'>Education</a></div>
             


        </div>

      </div>
    </Headroom>
      {/* ______________________header colse _____________________________*/}

        <div className='main-section'>
          <div className='column-1'>
            <h1 data-aos="fade-right" className='main-heading'>H! I`m <span className='color-name'>SRINATH</span></h1>
            <div className='curve-para'>
            <img className='curve-image' src={arrow}/>
            <div  data-aos="fade-right" className='description'>
                 <p className='description-para'>A Passionated  fullstack developer  with a decent experience in designing,<br/>
                  I bring a unique blend of creativity and technical expertise to the table
                 </p>
                 <p className='tagline'>_ i bring your <span className='color-name'>ideas</span> into <span className='color-name'>reality</span></p>
            </div>
         
            </div>
            <div  data-aos="fade-right" className='colab-btn-arrow'>
                <p className='lets-colab'><a className='contact-link-colab' href='#contactsection'>Let`s Collaborate</a></p>
                <a href='#contactsection'><BsArrowRight className='colabarrow'/></a>
              </div>
          </div>
          <div  data-aos="fade-left" className='column-2'>
          <Lottie className='homelottie' animationData={homelottie} loop={true} />
          </div>
          <div  data-aos="fade-left" className='column-3'>
            <div className='vertical-line'></div>
             <div className='social-icons'>
              <a className='social-icon-link' href="https://www.linkedin.com/in/srinathb5255/" target="blank"> <AiFillLinkedin className='social-icon'/></a>
              <a className='social-icon-link' href="https://twitter.com/srinath5255/" target="blank"> <FaTwitterSquare  className='social-icon'/></a>
              <a className='social-icon-link' href="https://github.com/srinathlee" target="blank"><FaGithubSquare   className='social-icon'/></a>
            </div>
            <div className='vertical-line'></div>
          </div>
        </div>
         <div  data-aos="fade-up" className='scroll-section'>
           <TfiMouse className='mouse-icon'/>
           <p className='scroll-para'>Scroll down</p>
           <BsArrowDownShort className='downarr-icon'/>
         </div>
        </div>


      {/*________________________education timeline section_________________ */}

        <div id="educationsection" className='education-section'>

  <Chrono scrollable={{ scrollbar: true }} hideControls={true} theme={{
      primary: 'red',
      secondary: 'gray',
      cardBgColor: 'transprant',
      titleColor: 'black',
      titleColorActive: 'balck',
    }} items={items} mode="VERTICAL_ALTERNATING">
    <div  data-aos="fade-right" className='education-card'>
    <h1 className='education-ins-name'>MallaReddy Engineering Collage</h1>
    <p className='ins-cource'>Computer Science And Enginneering</p>
    <p className='ins-gpa'>CGPA : <span className='gpa'>8.1</span></p>
    </div>
    <div  data-aos="fade-left" className='education-card'>
    <h1 className='education-ins-name'>Narayana Junior Collage</h1>
    <p className='ins-cource'>Intermediate (MPC)</p>
    <p className='ins-gpa'>PERCENTAGE : <span className='gpa'>97%</span></p>
    </div>
    <div  data-aos="fade-right" className='education-card'>
    <h1 className='education-ins-name'>Kakatiya High School</h1>
    <p className='ins-cource'>Telangana State Board</p>
    <p className='ins-gpa'>GPA : <span className='gpa'>8.5</span></p>
    </div>
    
    <div className="chrono-icons">
  <IoIosSchool className='chrono-icon'/>
  <BiSolidSchool className='chrono-icon'/>
  <GiSchoolBag className='chrono-icon'/>
  </div>
  </Chrono>

        </div>
    
      {/*________________________project section___________________________ */}
        
        <div id="projectsection" className='projectsection'>
        <div className='header-section'>
        <h1 className='project-section-header'>PROJECTS</h1>
        <PiSquaresFourBold className='projecticon'/>
        </div>

        <div className='projects-container'>
          <div className='project-container'>
             <h1 className='project-name'>E Commerce Application</h1>
            <div className='project-card'>
                <Projectcorousel/>
                <div className='project-card-description'>
                  <div className='p-widget'>
                    <div className='heading-and-icon'>
                    <h1 className='p-wedget-heading'>Technologies Used</h1>
                    <motion.p animate={{rotate:[0,360]}} transition={{repeat:Infinity,duration:1}} className='settin-icon-container'> <IoIosSettings className='seting-icon'/></motion.p>
                    </div>
                    <p  className='p-wedget-para'>React Js , Node Js , Express Js , MongoDb , Zustand</p>

                  </div>
                
                   <div>
                  <h1 className='project-description-heading'>Description</h1>
                  <p className='project-description'>Built with cutting-edge technologies like React.js, Node.js, MongoDB, Express.js, and CSS, this Application offers a seamless and secure shopping experience,users can easily find the products that they like and can add to cart ,Shop like a pro, explore diverse categories, and enjoy a seamless, Amazon and Flipkart-inspired shopping experience. </p>
      
                   </div>
                   <div className='project-link-container'>
                   <p><a className='project-link' href='https://srinathshop.netlify.app/' target='_blank'>click!</a> here for the project view</p>
                   </div>
                </div>
            </div>
          </div>


          <div className='project-container'>
             <h1 className='project-name'>Game-Based Application</h1>
            <div className='project-card'>
            <img className='emoji-gif' src={emoji}/>
                <div className='project-card-description'>
                  <div className='p-widget'>
                    <div className='heading-and-icon'>
                    <h1 className='p-wedget-heading'>Technologies Used</h1>
                    <motion.p animate={{rotate:[0,360]}} transition={{repeat:Infinity,duration:1}} className='settin-icon-container'> <IoIosSettings className='seting-icon'/></motion.p>
                    </div>
                    <p  className='p-wedget-para'>React Js , CSS , Node Js , Express Js </p>

                  </div>
                
                   <div>
                  <h1 className='project-description-heading'>Description</h1>
                  <p className='project-description'>Built with cutting-edge technologies like React.js, Node.js, MongoDB, Express.js, and CSS, this Application offers a seamless and secure shopping experience,users can easily find the products that they like and can add to cart ,Shop like a pro, explore diverse categories, and enjoy a seamless, Amazon and Flipkart-inspired shopping experience. </p>
         
                   </div>
                   <p><a className='project-link' href='https://srinathemoji.ccbp.tech/' target='_blank'>click!</a> here for the project view</p>
                </div>
            </div>
          </div>

        </div>

        </div>

        {/*________________________skill and services___________________________ */}

        <div id="skillsection" className='skill-service-container'>
          
             <Lottie className='servicelottie' animationData={servicelottie} loop={true} />
             <Marquee autoFill={true} className='marque-container' >
 <div className='service-card'>
  <img className='service-img' src={frontend}/>
  <h1 className='service-heading'>FRONTEND</h1>
  <hr className='horizontal-line-skill'/>
  <ul className='skill-container'>
    <li className='skill'>ReactJs</li>
    <li className='skill'>JavaScript</li>
    <li className='skill'>Css</li>
    <li className='skill'>BootStrap</li>
  </ul>
  </div>

  <div className='service-card'>
  <img className='service-img' src={frontend}/>
  <h1 className='service-heading'>UI/UX DESIGN</h1>
  <hr className='horizontal-line-skill'/>
  <ul className='skill-container'>
    <li className='skill'>Figma</li>
    <li className='skill'>Prototyping</li>
           
  </ul>
  </div>

  <div className='service-card'>
  <img className='service-img' src={frontend}/>
  <h1 className='service-heading'>FRONTEND</h1>
  <hr className='horizontal-line-skill'/>
  <ul className='skill-container'>
    <li className='skill'>ReactJs</li>
    <li className='skill'>JavaScript</li>
    <li className='skill'>Css</li>
    <li className='skill'>BootStrap</li>
  </ul>
  </div>

  <div className='service-card'>
  <img className='service-img' src={frontend}/>
  <h1 className='service-heading'>BACKEND</h1>
  <hr className='horizontal-line-skill'/>
  <ul className='skill-container'>
    <li className='skill'>NodeJs</li>
    <li className='skill'>JavaScript</li>
    <li className='skill'>ExpressJs</li>
  </ul>
  </div>

  <div className='service-card'>
  <img className='service-img' src={frontend}/>
  <h1 className='service-heading'>DATABASE</h1>
  <hr className='horizontal-line-skill'/>
  <ul className='skill-container'>
    <li className='skill'>MongoDB</li>
    <li className='skill'>MySql</li>
  </ul>
  </div>
 


             </Marquee>

             {/* <Lottie className='homeservecicehott' animationData={homelott} loop={true} /> */}




        </div>


      {/*________________________Contact form _______________________________ */}

      <div id="contactsection" className='contact-form-container'>

        <h1 className='contact-form-heading'>Let`<span className='s-letter'>s</span> Collaborate</h1>
      <div className='contact-main-bg'>
      <ReactWhatsapp  className='whatsapp' number="6301912774" message="Hello World!!!" ><img className='whatsapplogo' src={whatsapplogo}/></ReactWhatsapp>

      <form  className='contact-form'>
          <input className='widget-1' type="text" placeholder='Enter Your Name'/>
          <input className='widget-1' type='email' placeholder='Enter Your Email'/>
          <textarea className='widget-2' placeholder='A Short description of your project.....'/>
          <input className='contact-button' type="submit"/>
         
        </form>
        <div  className='contact-lottie'>
          <Lottie className='contactlottie' animationData={contactlottie} loop={true} />
          </div>

      </div>

      </div>

      {/* ________________________footer section ____________________________ */}

      <div className='footer-section'>
           <div className='footer-social-icons'>
           <a className='footer-social-icon-link' href="https://www.linkedin.com/in/srinathb5255/" target="blank">
           <AiFillLinkedin className='insicon footer-icon social-icon'/> </a>
           
           <a className='footer-social-icon-link' href="https://twitter.com/srinath5255/" target="blank">
           <FaTwitterSquare  className='footer-icon social-icon'/> </a>
           
           <a className='footer-social-icon-link' href="https://github.com/srinathlee" target="blank">
           <FaGithubSquare   className='footer-icon social-icon'/> </a>
             
             
            </div>
            <p>© 2023 Copyright: srinathportfolio.com</p>

      </div>




  
      </div>
     );
}

export default App;
