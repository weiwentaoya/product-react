import React, { useState } from "react"
import { Popup, Input } from "antd-mobile"
import styled from "styled-components"
import { CloseOutline } from "antd-mobile-icons"
import { checkEmailRegister, h5Login } from '../../api/user'
import md5 from 'js-md5'
import { useDispatch } from 'react-redux';
import userActions from '../../store/actions/user.action'
import cartAction from '../../store/actions/cart.action'
const LoginComponent = ({ afterClose }) => {
	const [visible, setVisible] = useState(true)
	const [user, setUser] = useState({
		bindType: 7,
		recaptchaAction: "LOGIN",
		recaptchaToken: "03AKH6MRGoJT5XjCENNCas5G5Gx5asN0-erYN9O0-PAyF6AxmHsnriBjoLKRgSLtuGzLZOLN5SpzgCbxDdJCry9jKVxTaazWiJnZTzRsUTG-Ji1ZVeq4SeIcPHprMsR2jB6WYf2YkYlFeglrsx0aXofLDREd_jvrmuDxkjjhM32zLCL8Jj92PlkskwF1ry8LrhyeFYAk2AHkFGEoJegSz9NQF5o6L8COhCArxqGz_PQq5iv3OsEU1Er9k1qyVMHT_LJ0OEh1YEBHSzUnmjfOOITSWDNtKFdCejubkuLZRCIONaZH5ET8Jr62IvcspZtkeugn53j5K9vJtH2b8JAjW3B4NVL_QiDPy8imsDX4O0xq6B2FKXFW3spy8AXhCCzMSnSeM8DSwOlad-BKrwm0EnIRjiYkqKGGrO9nEK7R4hQJFw-aH-Df6xnhhHLFQOGiZnmpLjlwRnhWbr8ndi8RiVY0hDnbTIpn4kC_ZCT2yhpqDISE-FwJ4Q_97nJ-5oPbEqBWijLnrdD7qPEPYlHe2hUZCgsPhFGRGIyJKIrvp1WT33WyZe-j8hasLFEYOpmEPEYkd9dx4x1DqfOK623bvwisDFX7AHdLFKke3Jx9XT8Dj9xxEEJv0z430lHLe3k7uToNSWTOuk0E_UqfZgmi7r0Gc5o-5zfuSEciiHOZZhr3PMkdkbDkkGKlvvbJ-J3UQHnJCYTeSmKl3hVMIjyNbQywXhsG6nIWThZ_zWx4V-Wz_Zd-6LTxtdSmTtSOF3w1JtfhjzVG_UGSNjTo3Ls8Mhe338e8yvz_1FZ59Yy7Vkl49bjRTNmWx2HheeOsGxnP-4q8CWjVsPN-Eg-qjxwXlDmnuFfIbrhCIXo8VA_xuUL-FVcAtD6dSo5Iso1ZeR7qMnk2JfFaDUyCtVqleUd7Z1I4pvwIx2vQ3GJZWjtzTMnkfd6YBW5YtwP0nc8FyN8dq4IMtTtvBRkfizW47wyL9RpF55tG4Pv0ZUJHjdbLyc3YsLfEt4h0_W2gJZPa7mKgh1cW-88EIZi3FXmHLx3A4dxQuj_wzsjOYjUM2gurbeHSIdBUQSN3DHIJQHnHJosIJPSdj9K-4rRT4p50wyTj2czirkCpOgrmHgiqnKAcH4vJzQXmFp3kTOUrQIQISWPIOnVK_l9V0EOR6nS9Rzu_2QbbJ1OhDDj4V_FJbepd6jfbRapm_sUmTgx5kIkl6JMv--DNsiKz1vOqo_iFB3J3AcW0vUb4I0l0i4dc4CHKKnZ5r-9imsAjbPDWzpQxBrS_7FKzklj3vM5isC-46oI7VeG1wY78s9PNVjgdaLgmlvoFXTd33kgBdDIgtvMzjiZ5XiuAHq5qaEutRtRjvuj7GbBRuwYCYE1UQ44JDxo4MPEdhm8-rrVc7wNZV-T1iWVuVe41UB7n9W7ZhNSE31ar7fEVMOlFPlKINoogAAGY4MjhvopeR2Y7EsAYhJNtyaGP_ildMuY3zOdiGrQqvOLahfcdGntMMEGtRMFcwEXACi87ZHWcgXOszN5im5F0ft7tEL0PgEvu43jGAkGaxJGvSnbZptRsQjJRLjCwktAsev6bezYM8gR0lZWjqW-8QyVv_DUw6-DEtP_gRn3j8fvnA0pmNlf9z1OlD8N9ibEge09w3Tm_aEJImjLPV-K0jA9q_c-JLCuWTjfIHISNh7iXVMHIVJNIQpYtrmsw",
		email: "",
		password: ""
	})
	const [step, setStep] = useState(1)
	const handleContinue = async () => {
		console.log(user);
		if (user.email) {
			await checkEmailRegister({email: user.email})
			setStep(2)
		}
	}
	const dispatch = useDispatch()
	const handleSign = async () => {
		const res = await h5Login({
			...user,
			password: md5(user.password)
		})
		dispatch(userActions.userInfo(res.userProfileInfo))
		dispatch(userActions.userToken(res.token))
		dispatch(userActions.userRefreshToken(res.refreshToken))
		dispatch(cartAction.cartCartLen())
		setVisible(false)
	}
	return (
		<Popup
			visible={visible}
			onMaskClick={() => {
				setVisible(false)
			}}
			afterClose={afterClose}
			position="left"
			bodyStyle={{ width: "100vw" }}
		>
			<Container>
				<div className="login-popup__header">
					<CloseOutline
						color="#c8c9cc"
						fontSize={20}
						onClick={() => setVisible(false)}
					/>
				</div>
				<div className="login-popup__logo">
					<img src={require("@/static/logo.png")} alt="" />
				</div>
				{step === 1 && (
					<div>
						<div className="login-popup__title">{'Sign In Or Sign Up'}</div>
						<div className="login-popup__email">
							<Input
								placeholder="EMAIL ADDRESS"
								clearable
								value={user.email}
								onClear={() => {
									setUser({
										...user,
										email: "",
									})
								}}
								onChange={(val) => {
									setUser({
										...user,
										email: val,
									})
								}}
							/>
						</div>
						<div className="login-popup__btn" onClick={handleContinue}>Continue</div>
					</div>
				)}
				{step === 2 && (
					<div>
						<div className="login-popup__title">{'Sign In'}</div>
						<div className="login-popup__email">
							<Input
								placeholder="PASSWORD"
								clearable
								type='password'
								value={user.password}
								onClear={() => {
									setUser({
										...user,
										password: "",
									})
								}}
								onChange={(val) => {
									setUser({
										...user,
										password: val,
									})
								}}
							/>
						</div>
						<div className="login-popup__btn" onClick={handleSign}>Sign In</div>
					</div>
				)}
			</Container>
		</Popup>
	)
}

export const Container = styled.div`
	min-height: 100vh;
	padding: 0 28px;
	text-align: center;
	.login-popup__header {
		height: 56px;
		line-height: 56px;
		text-align: right;
	}
	.login-popup__logo {
		width: 140px;
		display: inline-block;
		margin-bottom: 35px;
		img {
			width: 100%;
		}
	}
	.login-popup__title {
		font: normal 600 16px/22px PingFangSC, PingFangSC-Semibold;
		margin-bottom: 28px;
	}
	.login-popup__email {
		padding: 10px 16px;
		border: 1px solid #d9dbe2;
	}
	.login-popup__btn{
		background-color: #000;
    color: #fff;
    margin-top: 28px;
		height: 44px;
		line-height: 44px;
		text-align: center;
		font-weight: bold;
	}
`
LoginComponent.propTypes = {}
export default LoginComponent
