import React from "react"
import { useNavigate } from 'react-router-dom'
import "./NavBar.less"
import { DeleteOutline } from 'antd-mobile-icons'
export default function NavBar({title}) {
	const navigate = useNavigate()
  const back = () =>navigate(-1)
	return (
		<div className="nav-bar__wrap">
			<span className="hekka-font hekka-back" onClick={back}></span>
			
			<div className="nav-bar__occupy">
			{title}
			</div>
			
			<DeleteOutline  fontSize={18}/>
		</div>
	)
}
