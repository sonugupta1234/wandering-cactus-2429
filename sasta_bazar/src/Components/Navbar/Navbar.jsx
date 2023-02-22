import React from 'react'
import styles from "./Navbar.module.css"
import photo from "../../Images/download-removebg-preview.jpg"
import {CiShoppingTag} from "react-icons/ci"
import {SiHomeassistantcommunitystore} from "react-icons/si"
import {FiHelpCircle} from "react-icons/fi"
import {RiMessage2Line} from "react-icons/ri"
import {IoMdContact} from "react-icons/io"
import {RiArrowDropDownLine} from "react-icons/ri"

export const Navbar = () => {
  return (
     <div className={styles.So_nav}>
       <div className={styles.So_img}>
         <img  src={photo} alt=""/>
       </div>

       <div className={styles.So_nav_dtls}>
        <div>
        <CiShoppingTag fontSize={"25px"} color="white"/>
        <p>Shopping</p>
        </div>

        <div>
        <SiHomeassistantcommunitystore fontSize={"25px"} color="white"/>
        <p>Sell</p>
        </div>

        <div>
        <FiHelpCircle fontSize={"25px"} color="white"/>
        <p>Help</p>
        </div>

        <div>
        <RiMessage2Line  fontSize={"25px"} color="white"/>
        <p>Messages</p>
        </div>

        <div>
        <IoMdContact fontSize={"25px"} color="white"/>
        <p>Sign In <RiArrowDropDownLine /></p>
        </div>
       </div>
     </div>
  )
}
