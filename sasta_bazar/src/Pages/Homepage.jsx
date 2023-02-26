import React from 'react'
import { Navbar } from '../Components/Navbar'
import { CiLocationOn } from "react-icons/ci"
import { RiArrowDropDownLine } from "react-icons/ri"
import { BsSearch } from "react-icons/bs"
import { BiBuildings } from "react-icons/bi"
import { GiDrill } from "react-icons/gi"
import { Box, Heading, Button, Input, Flex, Text, GridItem, Grid, Image, InputGroup, InputLeftAddon, Tabs, TabPanels, TabPanel, Divider, HStack } from "@chakra-ui/react"
import { MdLocalPharmacy } from "react-icons/md"
import { FaIndustry } from "react-icons/fa"
import { MdFastfood } from "react-icons/md"
import Carousel from '../Components/Carousel'
import { SiTrustpilot } from "react-icons/si"
import { VscWorkspaceTrusted } from "react-icons/vsc"
import { BiMessageDetail } from "react-icons/bi"

export const Homepage = () => {
  return (
    <Box>
      <Navbar />
      <Box h={{ lg: "230px", base: "470px" }} w={{ lg: "100%", base: "50%" }} border="1px solid white" backgroundImage="url('https://legacyscs.com/wp-content/uploads/2019/10/Warehouse-RFP-770x253.jpg')"
      >


        <Heading mt={20} color="white" filter="auto" brightness="100%">Search for products & find verified sellers near you</Heading>
        <Box w={{ lg: "80%", base: "90%" }} height="50px" mt={10} ml={{ lg: "300px", base: "30px" }} >
          <Flex direction={{ lg: "row", base: "column" }}>
            <Button height="50px" w={{ lg: "15%", base: "75%" }} fontSize={'17px'} borderRadius="0px" >
              <CiLocationOn />
              <span>All India</span>
              <RiArrowDropDownLine />

            </Button>
            <Divider height="50px" display={{ base: "none" }} orientation='vertical' />

            <Input height="50px" filter="auto" brightness="100%" borderRadius="0px" w={{ lg: "40%", base: "75%" }} variant='filled' onChange={{ backgroundColor: "white" }} placeholder='Enter product/service name' />

            <Button height="50px" borderRadius="0px" w={{ lg: "10%", base: "75%" }} color="white" backgroundColor={"#048277"} _hover={{ backgroundColor: "#048277" }}>
              < BsSearch />
              Search
            </Button>
          </Flex>
        </Box>
      </Box>

      <Box width="100%" mt={6} >
        <Flex justifyContent={'space-between'} direction={{ lg: "row", base: "column" }}>
          <Box >
            <Flex>
              <BiBuildings fontSize={"30px"} />
              Building & Construction
            </Flex>
          </Box>

          <Box >
            <Flex>
              < GiDrill fontSize={"30px"} />
              Electronics & Electrical
            </Flex>
          </Box>

          <Box  >
            <Flex>
              < MdLocalPharmacy fontSize={"30px"} />
              Drugs & Pharma
            </Flex>
          </Box>


          <Box>
            <Flex>
              < FaIndustry fontSize={"30px"} />
              Industrial Machinery
            </Flex>
          </Box>

          <Box>
            <Flex>
              < MdFastfood fontSize={"30px"} />
              Food and Agriculture
            </Flex>
          </Box>

        </Flex>
      </Box>

      <Box width="100%" mt={6}>
        <Flex direction={{ lg: "row", base: "column" }}>
          <Box width="30%" ml={{ base: "40px" }}>
            <Heading mt={{ lg: "10px", base: "5px" }}>
              We connect
              Buyers & Sellers
            </Heading>
            <Text mt={6}>IndiaMART is India's largest online B2B marketplace, connecting buyers with suppliers.</Text>

            <Box mt={10}>
              <Flex justifyContent={'space-between'} direction={{ lg: "row", base: "column" }}>
                <Box >
                  < SiTrustpilot color="blue" fontSize={'30px'} />
                  Trusted Platform
                </Box>

                <Box>
                  <VscWorkspaceTrusted color="blue" fontSize={'30px'} />
                  Safe & Secure
                </Box>

                <Box>
                  <BiMessageDetail color="blue" fontSize={'30px'} />
                  Quick Assistance
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box w={{ lg: "70%", base: "35%" }} >
            <Carousel />
          </Box>
        </Flex>
      </Box>

      <Heading textAlign={{ lg: "left", base: "center" }} w={{ base: "50%" }} mt={6}>Building Construction Material & Equipment</Heading>


      <Box width="100%" mt={8}>
        <Flex direction={{ lg: "row", base: "column" }}>
          <Box w={{ lg: "30%", base: "50%" }} height="400px" border="1px solid white" backgroundImage="url('https://i0.wp.com/wnainc.com/wp-content/uploads/2017/01/mechanical-drawing-e1484917722138-1.jpg?w=973&ssl=1')">
            <Box mt={{ lg: "250px", base: "200px" }} >
              <Text color="white">Prefabricated Houses</Text>
              <Text color="white">Scaffolding Planks & Plates</Text>
              <Text color="white">Construction Machines</Text>
              <Text color="white">Crushing Machines & Plants</Text>
              <Button>View All</Button>
            </Box>
          </Box>

          <Box width={{ lg: "70%", base: "50%" }}>
            <Grid templateColumns={{ lg: 'repeat(3, 1fr)', base: 'repeat(2,1fr)' }} gap={4}>
              <GridItem boxShadow={'2xl'}>
                <Flex direction={{ lg: "row", base: "column" }}>
                  <Box width={{ base: "100%" }} >
                    <Image src="https://3.imimg.com/data3/RS/UH/GLADMIN-5385/brick-making-machines-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Brick Making Machines</Text>
                    <Text>Fly Ash Brick Making Machine</Text>
                    <Text>Clay Brick Making Machine</Text>
                    <Text>Cement Brick Making Machine</Text>
                  </Box>
                </Flex>
              </GridItem>


              <GridItem boxShadow={'2xl'}>
                <Flex direction={{ lg: "row", base: "column" }}>
                  <Box width={{ base: "100%" }}>
                    <Image src="https://3.imimg.com/data3/OI/XL/GLADMIN-34562/passenger-lifts-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Passenger Lifts</Text>
                    <Text>Residential Elevator</Text>
                    <Text>Kone Passenger lift</Text>
                    <Text>Stair Lift</Text>
                  </Box>
                </Flex>
              </GridItem>


              <GridItem boxShadow={'2xl'}>
                <Flex direction={{ lg: "row", base: "column" }}>
                  <Box width={{ base: "100%" }}>
                    <Image src="https://3.imimg.com/data3/KS/JQ/GLADMIN-2475/tmt-bars-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>TMT Bars</Text>
                    <Text>TMT Steel Bars</Text>
                    <Text>TATA TMT Bars</Text>
                    <Text>Kamdhenu TMT Bars</Text>
                  </Box>
                </Flex>
              </GridItem>


              <GridItem boxShadow={'2xl'}>
                <Flex direction={{ lg: "row", base: "column" }}>
                  <Box width={{ base: "100%" }}>
                    <Image src="https://5.imimg.com/data5/QO/YD/GLADMIN-2/plywoods-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Plywoods</Text>
                    <Text>Shuttering Plywood</Text>
                    <Text>Laminated Plywood</Text>
                    <Text>Waterproof Plywood</Text>
                  </Box>
                </Flex>
              </GridItem>


              <GridItem boxShadow={'2xl'}>
                <Flex direction={{ lg: "row", base: "column" }}>
                  <Box width={{ base: "100%" }}>
                    <Image src="https://3.imimg.com/data3/JE/DA/MY-2/hydraulic-excavator-500x500-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Excavator</Text>
                    <Text>Hitachi Excavator</Text>
                    <Text>Hyundai Excavator</Text>
                    <Text>Komatsu Excavator</Text>
                  </Box>
                </Flex>
              </GridItem>


              <GridItem boxShadow={'2xl'}>
                <Flex direction={{ lg: "row", base: "column" }}>
                  <Box width={{ base: "100%" }}>
                    <Image src="https://3.imimg.com/data3/VG/QG/GLADMIN-27799/emulsion-paints-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Emulsion Paints</Text>
                    <Text>Asian Emulsion Paints</Text>
                    <Text>Berger Emulsion Paints</Text>
                    <Text>Nerolac Emulsion Paints</Text>
                  </Box>
                </Flex>
              </GridItem>



              <GridItem boxShadow={'2xl'}>
                <Flex direction={{ lg: "row", base: "column" }}>
                  <Box width={{ base: "100%" }}>
                    <Image src="https://3.imimg.com/data3/UT/PB/GLADMIN-12558/wood-door-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Wooden Door</Text>
                    <Text>Designer Wooden Door</Text>
                    <Text>Plywood Door</Text>
                    <Text>Wooden Flush Doors</Text>
                  </Box>
                </Flex>
              </GridItem>



              <GridItem boxShadow={'2xl'}>
                <Flex direction={{ lg: "row", base: "column" }}>
                  <Box width={{ base: "100%" }}>
                    <Image src="https://3.imimg.com/data3/VN/LA/GLADMIN-2047/pvc-pipes-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>PVC Pipes</Text>
                    <Text>Finolex Pipes</Text>
                    <Text>Rigid PVC Pipes</Text>
                    <Text>Flexible PVC Pipes</Text>
                  </Box>
                </Flex>
              </GridItem>


              <GridItem boxShadow={'2xl'}>
                <Flex direction={{ lg: "row", base: "column" }}>
                  <Box width={{ base: "100%" }}>
                    <Image src="https://3.imimg.com/data3/YD/WE/GLADMIN-23639/building-brick-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Building Brick</Text>
                    <Text>Red Brick</Text>
                    <Text>Fly Ash Bricks</Text>
                    <Text>Cement Brick</Text>
                  </Box>
                </Flex>
              </GridItem>


            </Grid>
          </Box>
        </Flex>
      </Box>





      <Heading textAlign={'left'} mt={6}>Electronics & Electrical Goods & Supplies</Heading>


      <Box width="100%" mt={8}>
        <Flex>
          <Box width="30%" height="400px" border="1px solid white" backgroundImage="url('https://www.jobsandskills.wa.gov.au/sites/default/files/styles/course_page_image/public/course-page-images/jswa-course-electronics2.jpg?itok=FmC6aurk')">
            <Box mt={250} >
              <Text color="white">Voltage & Power Stabilizers</Text>
              <Text color="white">GPS and Navigation Devices</Text>
              <Text color="white">Biometrics & Access Control Devices</Text>
              <Text color="white">CCTV, Surveillance Systems and Parts</Text>
              <Button>View All</Button>
            </Box>
          </Box>

          <Box width="70%">
            <Grid templateColumns='repeat(3, 1fr)' gap={4}>
              <GridItem boxShadow={'2xl'}>
                <Flex>
                  <Box>
                    <Image src="https://4.imimg.com/data4/HI/RA/GLADMIN-181283/photocopier-machine-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Office Automation Products</Text>
                    <Text>Multifunction Printer</Text>
                    <Text>Xerox Machines</Text>
                    <Text>Fingerprint Scanners</Text>
                  </Box>
                </Flex>
              </GridItem>


              <GridItem boxShadow={'2xl'}>
                <Flex>
                  <Box>
                    <Image src="https://5.imimg.com/data5/GLADMIN/Default/2022/3/MZ/VG/IH/87924/arduino-sensor-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Sensors & Transducers</Text>
                    <Text>Level Sensors</Text>
                    <Text>Proximity Sensor</Text>
                    <Text>Sensor for Home & Office</Text>
                  </Box>
                </Flex>
              </GridItem>


              <GridItem boxShadow={'2xl'}>
                <Flex>
                  <Box>
                    <Image src="https://5.imimg.com/data5/JW/EX/GLADMIN-2/digital-controller-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Process Controllers</Text>
                    <Text>Level Controllers</Text>
                    <Text>Motor Controllers</Text>
                    <Text>Temperature Controller</Text>
                  </Box>
                </Flex>
              </GridItem>


              <GridItem boxShadow={'2xl'}>
                <Flex>
                  <Box>
                    <Image src="https://5.imimg.com/data5/RO/JS/GLADMIN-2/lighting-controllers1-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Control & Automation</Text>
                    <Text>VFD</Text>
                    <Text>PLC</Text>
                    <Text>HMI</Text>
                  </Box>
                </Flex>
              </GridItem>


              <GridItem boxShadow={'2xl'}>
                <Flex>
                  <Box>
                    <Image src="https://3.imimg.com/data3/XB/KH/GLADMIN-105874/light-emitting-diode-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Diodes & Active Devices</Text>
                    <Text>Integrated Circuits</Text>
                    <Text>Thyristors</Text>
                    <Text>Light Emitting Diode</Text>
                  </Box>
                </Flex>
              </GridItem>


              <GridItem boxShadow={'2xl'}>
                <Flex>
                  <Box>
                    <Image src="https://5.imimg.com/data5/GLADMIN/Default/2022/6/SI/KH/VT/87924/house-wire-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Wires & Cables</Text>
                    <Text>House Wire</Text>
                    <Text>Armoured Cable</Text>
                    <Text>Power Cable</Text>
                  </Box>
                </Flex>
              </GridItem>



              <GridItem boxShadow={'2xl'}>
                <Flex>
                  <Box>
                    <Image src="https://5.imimg.com/data5/VB/IL/GLADMIN-2/street-light-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Commercial Lights</Text>
                    <Text>Flood Lights</Text>
                    <Text>Street Lights</Text>
                    <Text>Panel Light</Text>
                  </Box>
                </Flex>
              </GridItem>



              <GridItem boxShadow={'2xl'}>
                <Flex>
                  <Box>
                    <Image src="https://5.imimg.com/data5/LX/YW/GLADMIN-2/inverter-batteries-125x125.png" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Battries</Text>
                    <Text>Lithium Battery</Text>
                    <Text>Inverter Batteries</Text>
                    <Text>Electric Vehicle Battery</Text>
                  </Box>
                </Flex>
              </GridItem>


              <GridItem boxShadow={'2xl'}>
                <Flex>
                  <Box>
                    <Image src="https://3.imimg.com/data3/EX/HO/GLADMIN-37340/solar-power-systems-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Solar & Renewable Energy</Text>
                    <Text>Solar Panels</Text>
                    <Text>Solar Inverter</Text>
                    <Text>Solar Pumps</Text>
                  </Box>
                </Flex>
              </GridItem>


            </Grid>
          </Box>
        </Flex>
      </Box>





      <Heading textAlign={'left'} mt={6}>Hospital and Medical Equipment</Heading>


      <Box width="100%" mt={8}>
        <Flex>
          <Box width="30%" height="400px" border="1px solid white" backgroundImage="url('https://images.foxtv.com/static.fox5atlanta.com/www.fox5atlanta.com/content/uploads/2020/01/932/524/high-blood-pressure.jpg?ve=1&tl=1')">
            <Box mt={250} >
              <Text color="white">Medical Ventilators</Text>
              <Text color="white">Oxygen Cylinder</Text>
              <Text color="white">Patient Handling Equipment</Text>
              <Text color="white">CPAP, BiPAP Machine & Accessories</Text>
              <Button>View All</Button>
            </Box>
          </Box>

          <Box width="70%">
            <Grid templateColumns='repeat(3, 1fr)' gap={4}>
              <GridItem boxShadow={'2xl'}>
                <Flex>
                  <Box>
                    <Image src="https://hm.imimg.com/imhome_gifs/cvid09.png" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Medical Laboratory Instruments</Text>
                    <Text>Rapid Test Kit</Text>
                    <Text>Biochemistry Analyzer</Text>
                    <Text>Blood Bank Equipments

                      Hematology Analyzers</Text>
                  </Box>
                </Flex>
              </GridItem>


              <GridItem boxShadow={'2xl'}>
                <Flex>
                  <Box>
                    <Image src="https://5.imimg.com/data5/IW/EI/MY-3076857/patient-monitoring-system-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Patient Monitoring Systems</Text>
                    <Text>Blood Pressure Machine</Text>
                    <Text>Capnometer</Text>
                    <Text>Medical Monitor

                      Surgical Monitor</Text>
                  </Box>
                </Flex>
              </GridItem>


              <GridItem boxShadow={'2xl'}>
                <Flex>
                  <Box>
                    <Image src="https://5.imimg.com/data5/NT/KF/MY-1383163/infrared-thermometer-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Thermometer</Text>
                    <Text>Infrared Thermometers</Text>
                    <Text>Forehead Thermometer</Text>
                    <Text>Non Contact Thermometer</Text>
                  </Box>
                </Flex>
              </GridItem>


              <GridItem boxShadow={'2xl'}>
                <Flex>
                  <Box>
                    <Image src="https://5.imimg.com/data5/CM/CP/JH/SELLER-5038493/neonatal-portable-icu-ventilator-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Medical Imaging Machine</Text>
                    <Text>X Ray Machine</Text>
                    <Text>Ultrasound Machines</Text>
                    <Text>ECG Machine

                      Doppler Machine</Text>
                  </Box>
                </Flex>
              </GridItem>


              <GridItem boxShadow={'2xl'}>
                <Flex>
                  <Box>
                    <Image src="https://5.imimg.com/data5/OQ/SV/MY-905156/stethoscope-cardio-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Stethoscope</Text>
                    <Text>Cardiology Stethoscope</Text>
                    <Text>Dual Head Stethoscope</Text>
                    <Text>Electronic Stethoscope

                      Pediatric Stethoscope</Text>
                  </Box>
                </Flex>
              </GridItem>


              <GridItem boxShadow={'2xl'}>
                <Flex>
                  <Box>
                    <Image src="https://5.imimg.com/data5/NU/ZZ/AQ/SELLER-35236796/electric-suction-unit-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Suction Machine</Text>
                    <Text>Electric Suction Unit</Text>
                    <Text>Foot Operated Suction Unit</Text>
                    <Text>Liposuction Machine

                      Central Suction System</Text>
                  </Box>
                </Flex>
              </GridItem>


            </Grid>
          </Box>
        </Flex>
      </Box>






      <Heading textAlign={'left'} mt={6}>Transportation & Logistics</Heading>


      <Box width="100%" mt={8}>
        <Flex>
          <Box width="30%" height="400px" border="1px solid white" backgroundImage="url('https://media.bizj.us/view/img/11639152/lewis-logistics-forkllift*480xx1500-2000-0-0.jpg')">
            <Box mt={250} >
              <Text color="white">Automotive Logistics</Text>
              <Text color="white">Pharmacy Dropshipper</Text>
              <Text color="white">Drop Shipping Services</Text>
              <Button>View All</Button>
            </Box>
          </Box>

          <Box width="70%">
            <Grid templateColumns='repeat(3, 1fr)' gap={4}>
              <GridItem boxShadow={'2xl'}>
                <Flex>
                  <Box>
                    <Image src="https://5.imimg.com/data5/TM/DV/LX/SELLER-33028307/corporate-domestic-courier-service-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Transportation Services</Text>
                    <Text>Goods Transport Services</Text>
                    <Text>Dangerous Goods Transportation</Text>
                    <Text>Food Transportation Services</Text>
                  </Box>
                </Flex>
              </GridItem>


              <GridItem boxShadow={'2xl'}>
                <Flex>
                  <Box>
                    <Image src="https://5.imimg.com/data5/UU/AO/IG/SELLER-47839771/local-shifting-service-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Domestic Relocation Service</Text>
                    <Text>Packers Movers</Text>
                    <Text>Loading Unloading Services</Text>
                    <Text>Local Shifting Service</Text>
                  </Box>
                </Flex>
              </GridItem>


              <GridItem boxShadow={'2xl'}>
                <Flex>
                  <Box>
                    <Image src="https://5.imimg.com/data5/SR/AM/MY-4376139/cargo-shipping-service-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Cargo & Shipping</Text>
                    <Text>Air Cargo Service</Text>
                    <Text>Rail Cargo</Text>
                    <Text>Sea Cargo Service</Text>
                  </Box>
                </Flex>
              </GridItem>


              <GridItem boxShadow={'2xl'}>
                <Flex>
                  <Box>
                    <Image src="https://5.imimg.com/data5/HD/KA/QI/GLADMIN-65832/heavy-duty-truck-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Truck Rentals</Text>
                    <Text>Tipper Truck Rental Services</Text>
                    <Text>Full Trucks Service</Text>
                    <Text>Lorry Transport Services

                      Container Truck Service</Text>
                  </Box>
                </Flex>
              </GridItem>


              <GridItem boxShadow={'2xl'}>
                <Flex>
                  <Box>
                    <Image src="https://5.imimg.com/data5/UE/AD/MY-37442849/local-logistics-service-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Logistics Service</Text>
                    <Text>Third Party Logistics</Text>
                    <Text>Cold Chain Logistics</Text>
                    <Text>Local Logistics Services

                      Contract Logistics Service</Text>
                  </Box>
                </Flex>
              </GridItem>


              <GridItem boxShadow={'2xl'}>
                <Flex>
                  <Box>
                    <Image src="https://5.imimg.com/data5/SR/RI/MY-12870604/parcel-delivery-services-125x125.jpg" alt="" />
                  </Box>

                  <Box>
                    <Text fontWeight={'bold'}>Other Services</Text>
                    <Text>Warehousing Services</Text>
                    <Text>Home Delivery Service</Text>
                    <Text>Courier Service</Text>
                  </Box>
                </Flex>
              </GridItem>


            </Grid>
          </Box>
        </Flex>
      </Box>

      <Heading textAlign={'left'} mt={6}>Explore products from Premium Brands</Heading>

      <Box width="100%">
        <Grid templateColumns='repeat(3, 1fr)' gap={10}>
          <GridItem>
            <Image width="80%" src="https://file.mk.co.kr/meet/neds/2022/04/image_readtop_2022_378930_16511440605025338.jpg" alt="" />
          </GridItem>

          <GridItem>
            <Image width="50%" src="https://www.opalpart.com/wp-content/uploads/2021/02/SANY.jpg" alt="" />
          </GridItem>

          <GridItem>
            <Image width="50%" src="https://storage.googleapis.com/impact-news-photo/news-photo/7526.Volume18_Issue05_68.jpg" alt="" />
          </GridItem>

          <GridItem>
            <Image width="50%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Atlas-Copco-Logo.svg/1200px-Atlas-Copco-Logo.svg.png" alt="" />
          </GridItem>

          <GridItem>
            <Image width="50%" src="https://seekvectorlogo.com/wp-content/uploads/2017/12/canon-vector-logo.png" alt="" />
          </GridItem>


          <GridItem>
            <Image width="30%" src="https://5.imimg.com/data5/SELLER/Default/2021/5/JM/WV/AH/16255361/jaguar-bathroom-fittings-500x500.jpg" alt="" />
          </GridItem>

        </Grid>
      </Box>


      <Heading textAlign="left" mt={10}>Featured Recommendations</Heading>

      <Box width="100%" mt={6}>
        <Grid templateColumns='repeat(4, 1fr)' gap={10}>
          <GridItem margin={'auto'} >
            <Image ml={100} src="https://4.imimg.com/data4/LG/EJ/MY-346460/rajabogam-ponni-rice-125x125.png" alt="" />
            <Text>Rajabogam Ponni Rice (Old) Tamil Ponni Rice</Text>
            <Text>₹ 50/ Kg</Text>
            <Text>By: A.Duraisamy Modern Rice Mill</Text>
            <Button>Get Best Price</Button>
          </GridItem>

          <GridItem>
            <Image ml={100} src="https://5.imimg.com/data5/GY/FN/MY-3436896/ponni-rice-125x125.jpg" alt="" />
            <Text>Pooni Rice</Text>
            <Text>₹ 32/ Kg</Text>
            <Text>By: V S T Exim</Text>
            <Button mt={5}>Get Best Price</Button>
          </GridItem>


          <GridItem>
            <Image ml={100} src="https://5.imimg.com/data5/ANDROID/Default/2022/10/HU/UP/BI/5158094/product-jpeg-125x125.jpg" alt="" />
            <Text>Ponni Samba Rice ( Cycle Brand Bags for SRILANKA)</Text>
            <Text>₹ 795/ Bag</Text>
            <Text>Sold By - Mithuna Foods</Text>
            <Button>Get Best Price</Button>
          </GridItem>

          <GridItem>
            <Image ml={100} src="https://5.imimg.com/data5/RH/FK/MY-13537206/boiled-ponni-rice-125x125.jpg" alt="" />
            <Text>Boiled Ponni Rice</Text>
            <Text>₹ 35/ Kilogram</Text>
            <Text>Sold By - Mithuna Foods</Text>
            <Button mt={5}>Get Best Price</Button>
          </GridItem>
        </Grid>
      </Box>




      <Box width="80%" margin="auto" mt={20}>
        <Flex>
          <Box width="30%">
            <Image src="https://hm.imimg.com/imhome_gifs/app-img.png" alt="" />
          </Box>

          <Box width="50%" ml={30}>
            <Box>
              <Heading>Get IndiaMART App</Heading>
              <Text>Search for products/services and connect with verified sellers on the go!</Text>
            </Box>

            <Box mt={30}>
              <Flex>
                <InputGroup>
                  <InputLeftAddon children='+91' />
                  <Input type='tel' placeholder='Enter Mobile Number' />
                </InputGroup>
                <Button backgroundColor={"#007A6E"} _hover={{ backgroundColor: "#007A6E" }}>
                  Send me the link
                </Button>
              </Flex>
              <Text mt={10}>We will send you a link, open it on your phone to download the App</Text>
            </Box>
          </Box>
        </Flex>
      </Box>




      <Box width="90%" margin={'auto'}>
        <Tabs variant='unstyled'>
          <Flex>
            <TabPanels>
              <TabPanel>
                <Text fontWeight={'bold'}>About Us</Text>
                <Text>Join Sales</Text>
                <Text>Success Stories</Text>
                <Text>Press Section</Text>
                <Text>Advertise with Us</Text>
                <Text>Investor Section</Text>
              </TabPanel>

            </TabPanels>

            <TabPanels>
              <TabPanel>
                <Text fontWeight={'bold'}>Help</Text>
                <Text>Feedback</Text>
                <Text>Complaints</Text>
                <Text>Customer Care</Text>
                <Text>Jobs & Careers</Text>
                <Text>Contact Us</Text>
              </TabPanel>

            </TabPanels>


            <TabPanels>
              <TabPanel>
                <Text fontWeight={'bold'}>Suppliers Tool Kit</Text>
                <Text>Sell on IndiaMART</Text>
                <Text>Latest BuyLead</Text>
                <Text>Learning Centre</Text>
                <Text>Ship With IndiaMART</Text>
              </TabPanel>

            </TabPanels>


            <TabPanels>
              <TabPanel>
                <Text fontWeight={'bold'}>Buyers Tool Kit</Text>
                <Text>Post Your Requirement</Text>
                <Text>Products you Buy</Text>
                <Text>Search Products & Suppliers</Text>
                <Text>Pay With IndiaMART</Text>
              </TabPanel>

            </TabPanels>


            <TabPanels>
              <TabPanel>
                <Text fontWeight={'bold'}>Accounting Solutions</Text>
                <Text>Accounting Software</Text>
                <Text>Tally on Mobile</Text>
                <Text>GST e-Invoice</Text>
              </TabPanel>

            </TabPanels>
          </Flex>
        </Tabs>
      </Box>

      <Flex
        direction={["column", "column", "row"]}
        color="gray"
        bg="#232324"
        justifyContent="space-between"
        alignItems="center"
        h="80px"
        mt="10"
      >
        <Box ml="5">Copyright © 1996-2023 IndiaMART. All rights reserved.</Box>
        <HStack mr="5" gap="5">
          <Box>Home </Box>
          <Box> Sell on IndiaMART</Box>
          <Box>FAQ</Box>
          <Box>Terms of Use</Box>
          <Box> Privacy Policy</Box>
        </HStack>
      </Flex>
    </Box>
  )
}
