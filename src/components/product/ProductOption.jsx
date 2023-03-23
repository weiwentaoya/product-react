import React from "react"
import styled from "styled-components"

const ProductOption = ({ product }) => {
	return (
		<Container>
			{product.spuOptionList &&
				product.spuOptionList.map((option) => {
					return (
						<div className="option-list" key={option.optionId}>
							<div className="option-list__title">
								<span>{option.optionName} :</span>
								{option.sizeIconView === 1 && (
									<span className="size-chat">Size Chat</span>
								)}
							</div>
							<div className="option-list__value">
								{option.optionValueList &&
									option.optionValueList.map((val) => {
										return (
											<span
												key={val.optionValueId}
												className="option-list__option"
											>
												{val.optionValueName}
											</span>
										)
									})}
							</div>
						</div>
					)
				})}
		</Container>
	)
}

export const Container = styled.div`
	border-bottom: 8px solid #f5f5f5;
	padding: 0 12px 16px;
	.option-list {
		&__title {
			font-size: 14px;
			font-family: Montserrat, Montserrat-SemiBold;
			font-weight: 600;
			margin-top: 20px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.size-chat {
				font-size: 12px;
				color: #999;
				font-weight: 400;
			}
		}
		&__value {
			display: flex;
			flex-wrap: wrap;
		}
		&__option {
			padding: 4px 12px;
			border: 1px solid #cdcdcd;
			border-radius: 19px;
			font-size: 14px;
			font-family: Montserrat, Montserrat-SemiBold;
			font-weight: 600;
			margin-top: 8px;
			margin-right: 10px;
		}
	}
`

export default ProductOption
