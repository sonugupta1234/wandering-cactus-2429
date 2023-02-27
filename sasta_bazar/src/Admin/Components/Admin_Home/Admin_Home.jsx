import React from 'react'
import Admin_Navbar from '../Admin_Navbar/Admin_Navbar'
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';
import { Flex } from '@chakra-ui/layout';


const Admin_Home = () => {
  const product = useSelector((store) => console.log(store))
  const [state, setState] = React.useState({
    options: {
      colors: ["#E91E63", "#FF9800"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["18/02", "19/02", "20/02", "21/02", "22/02", "23/02", "24/02", "25/02", "26/02"],
      },
    },
    series: [
      {
        name: "Product-Ordered",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "Produts Delivered",
        data: [13, 50, 40, 40, 29, 50, 60, 81],
      },
    ],
  });
  const [user, setUser] = React.useState({
    options: {
      colors: ["#181823", "#537FE7"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["18/02", "19/02", "20/02", "21/02", "22/02", "23/02", "24/02", "25/02", "26/02"],
      },
    },
    series: [
      {
        name: "User Reviews",
        data: [30, 40, 45, 50, 45, 60, 70, 90],
      },
      {
        name: "Expected Reviews",
        data: [35, 50, 60, 70, 50, 70, 80, 80],
      },
    ],
  });
  return (
    <div>
      <div>
        <Admin_Navbar />
      </div>
      <div style={{display:"Flex", gap:"100px"}}>
        <div>
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            width="500"
          />
        </div>
        <div>
          <Chart
            options={user.options}
            series={user.series}
            type="bar"
            width="500"
          />
        </div>
      </div>
    </div>
  )
}

export default Admin_Home