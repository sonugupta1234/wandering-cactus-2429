import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import styles from "./Homepage.module.css"
import {CiLocationOn } from "react-icons/ci"
import {RiArrowDropDownLine} from "react-icons/ri"
import {BsSearch} from "react-icons/bs"
import {BiBuildings} from "react-icons/bi"
import { GiDrill} from "react-icons/gi"

export const Homepage = () => {
  return (
     <div>
        <Navbar />
        <div className={styles.So_home}>
        
        
          <h1>Search for products & find verified sellers near you</h1>
          <div className={styles.So_input}>
            <button className={styles.So_button}>
            <CiLocationOn />
            <span>All India</span>
            <RiArrowDropDownLine />
            </button>
            <input  placeholder='Enter product/service name'/>
            <button className={styles.So_but}>
             < BsSearch />
              Search
            </button>
          </div>
      </div>

      <div className={styles.So_category}>
        <div>
        <BiBuildings fontSize={"25px"}/>
        <span>Building & Construction</span>
        </div>

        <div>
       < GiDrill fontSize={"25px"}/>
       <span>Electronics & Electrical</span>
        </div>
      </div>
        
    </div>
  )
}
