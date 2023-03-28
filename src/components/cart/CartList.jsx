import React from "react"
import { formatPrice } from "../../utils/format"
import styled from "styled-components"
import Img from "../../components/core/Img"
import { Stepper, Toast, Dialog } from "antd-mobile"
import { CheckOutline, DeleteOutline } from "antd-mobile-icons"
import { cartAddNum, cartRemoveSku } from "../../store-rtk/features/cartSlice"
import { useDispatch } from "react-redux"
const CartList = ({ cartList, unavailable }) => {
	let toastLoading, dialog
	const dispatch = useDispatch()

	const handleChange = async (item, q) => {
		if (q < 1) {
			handleRemove(item)
			return
		}
		toastLoading = Toast.show({
			icon: "loading",
			maskClickable: false,
			duration: 0,
		})
		await dispatch(cartAddNum(item, q))
		toastLoading?.close()
	}
  const handleRemove = async (item)=>{
    dialog = Dialog.show({
      content: "Are you sure you want to delete this item?",
      actions: [
        [
          {
            key: "cancel",
            text: "Cancel",
            onClick: () => {
              dialog?.close()
            },
          },
          {
            key: "delete",
            text: "Delete",
            onClick: async () => {
              toastLoading = Toast.show({
              	icon: "loading",
              	maskClickable: false,
              	duration: 0,
              })
              await dispatch(cartRemoveSku([item.saleSkuId]))
              toastLoading?.close()
              dialog?.close()
            },
          },
        ],
      ],
      onConfirm: () => {
        console.log()
      },
    })
    
  }
	// Are you sure you want to delete this item?
	return (
		<Container>
			{cartList.map((el) => {
				return (
					<div className="cart-item" key={el.saleSkuId}>
						{/* {el.proName} */}
						<div className="cart-item__checkout ">
							<span className={`${unavailable?'disabled':''}`}>
								{!unavailable &&<CheckOutline color="#fff" />}
							</span>
						</div>
						<div className="cart-item__img">
              {unavailable && <div className="mask">out of stock</div>}
							{el.discountStrShow && <span>{el.discountStr}</span>}
							<Img src={el.image} />
						</div>
						<div className={`cart-item__content ${unavailable?'cart-item__unavailable':''}`}>
							<div className="title">{el.proName}</div>
							<div className="option">
								<span>{el.optionFormat}</span>
							</div>
							<div className="c"></div>
							<div className="bottom">
								<div className="left">
									<div className="market-price">
										{formatPrice(el.marketPrice)}
									</div>
									<div className="sale-price">{formatPrice(el.salePrice)}</div>
								</div>
								<div className="right">
                  {
                    unavailable
                    ?
                    <div className="quantity">
                      <span>x{el.quantity}</span>
                      <DeleteOutline fontSize={18} onClick={()=>{handleRemove(el)}}/>
                    </div>
                    :
                    <Stepper
										style={{
											"--border": "1px solid #D9DBE2",
											"--border-inner": "1px solid #d9dbe2",
											"--height": "26px",
											"--input-width": "26px",
											"--border-radius": "13px",
											"--button-text-color": "#000",
											"--button-background-color": "#fff",
											"--input-background-color": "#fff",
											"--active-border": "1px solid #000",
										}}
										min={0}
										max={99}
										defaultValue={el.quantity}
										step={1}
										onChange={(value) => {
											handleChange(el, value)
										}}
									/>
                  }
									
								</div>
							</div>
						</div>
					</div>
				)
			})}
		</Container>
	)
}

export const Container = styled.div`
  border-bottom: 8px solid #f5f5f5;
	.cart-item {
		padding: 18px 12px;
		border-bottom: 1px solid #f5f5f5;
		display: flex;
		&:last-child {
			border: none;
		}
		&__checkout {
			display: flex;
			align-items: center;
			span {
				width: 18px;
				height: 18px;
				line-height: 18px;
				text-align: center;
				background: #000000;
        border: 1px solid #979797;
				border-radius: 9px;
				margin-right: 8px;
			}
      .disabled{
        background: #f0f1f6;
        border: 1px solid #d9dbe2;
      }
		}
    
		&__img {
			width: 80px;
			position: relative;
			span {
				position: absolute;
				right: 0;
				top: 0;
				padding: 2px 8px;
				background: #000000;
				font-size: 12px;
				color: #ffffff;
			}
      .mask{
        position: absolute;
        left:0;
        top:0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.50);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
      }
		}
		&__content {
			flex: 1;
			padding-left: 8px;
			display: flex;
			flex-direction: column;
			.title {
				font-size: 13px;
				font-family: Roboto, Roboto-Regular;
				color: #000000;
				line-height: 18px;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
			.option {
				margin-top: 4px;
				span {
					background: #f5f5f5;
					color: #000000;
					font-size: 12px;
					font-family: Roboto, Roboto-Regular;
					padding: 2px 4px;
				}
			}
			.c {
				flex: 1;
			}
			.bottom {
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
				.left {
					.market-price {
						font-size: 12px;
						font-family: Roboto, Roboto-Regular;
						text-decoration: line-through;
						color: #74788a;
					}
					.sale-price {
						font-size: 14px;
						font-family: Roboto, Roboto-Bold;
						font-weight: 600;
						color: #000000;
					}
				}
        .quantity{
          font-size: 16px;
          display: flex;
          align-items: center;
          span{
            color: #9e9e9e;
            margin: 4px;
          }
        }
			}
		}
    &__unavailable{
      .title{
        color: #9e9e9e;
      }
      .option{
        span{
          color: #9e9e9e;
        }
      }
      .bottom{
        .left{
          .market-price{
            display: none;
          }
          .sale-price{
            color: #9e9e9e;
          }
        }
      }
    }
	}
`

export default CartList
