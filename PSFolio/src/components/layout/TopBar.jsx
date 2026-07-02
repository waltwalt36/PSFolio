import "./TopBar.css"
import { FaCircleInfo } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { IoCalendarNumber } from "react-icons/io5";
import { TbMessagesFilled } from "react-icons/tb";
import { BsHeadset } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { HiMiniTrophy } from "react-icons/hi2";
import { PiToolboxFill } from "react-icons/pi";
import { FiPower } from "react-icons/fi";
import { useState, useEffect } from "react"

function TopBar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() =>{
      setTime(new Date().toLocaleTimeString());
    }, 1000)
  }, [])

  return <>
  <div className="top-bar">
    <div className="top-bar-left">
      <FaCircleInfo/>
      <FaUserFriends/>
      <IoCalendarNumber/>
      <TbMessagesFilled/>
      <BsHeadset/>
      <FaLinkedin/>
      <HiMiniTrophy/>
      <PiToolboxFill/>
      <FiPower/>
    </div>
    <p className="time">{time}</p>
  </div>
  </>
}

export default TopBar