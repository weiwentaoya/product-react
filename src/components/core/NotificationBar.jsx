import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getHomeInfo } from "../../store-rtk/features/notifySlice"
import styled from "styled-components"
import Img from "../core/Img"

const NotificationBar = (props) => {
	const notify = useSelector((state) => state.notify)
	const dispatch = useDispatch()
	useEffect(() => {
		if (!notify.imgUrl) {
			dispatch(getHomeInfo())
		}
	}, [])

	// console.log("dispatch", dispatch)

	return (
		<Container>
			<Img src={notify.imgUrl} perch="strip" fit="cover" />
		</Container>
	)
}

export const Container = styled.div`
	min-height: 34px;
	max-width: 100vw;
`

export default React.memo(NotificationBar)
