import "./Admin_Userlist.css"
import React, { useEffect } from 'react'
import { store } from "../../../Redux/store";
import { useSelector, useDispatch } from "react-redux"
import { GET_USERS } from '../../../Redux/AdminRedux/action'
import Admin_Navbar from "../Admin_Navbar/Admin_Navbar"
import Admin_UserCard from "./Admin_UserCard"
export const Admin_Userlist = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GET_USERS)
  }, [])
  const users = useSelector((store) => store.AdminReducer.users)
  console.log("users", users);
  return (
    <>
      <div>
        <Admin_Navbar />
      </div>
      <div className="card">
        {users.length > 0 && users.map((el) =>
        <div >
        <Admin_UserCard key={el.id} {...el} />
        </div>
        )
        }
      </div>
    </>
  )
}
