import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { homeCommonInfo } from "../../api/activity"
import styled from "styled-components"
import Img from "../core/Img"
import { useEffect } from "react"

const NotificationBar = (props) => {
	const notify = useSelector((state) => state.notify)
	const dispatch = useDispatch()
	const homeInfo = async () => {
		const { topBar } = await homeCommonInfo()
		dispatch({ type: "notify", payload: topBar })
	}
	useEffect(() => {
		homeInfo()
	}, [ ])

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
