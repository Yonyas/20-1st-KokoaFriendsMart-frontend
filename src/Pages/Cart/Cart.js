import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Main/Components/Nav/Nav';
import FreeDeliveryBar from './Components/FreeDeliveryBar/FreeDeliveryBar';
import CheckBoxHeader from './Components/CheckBoxHeader/CheckBoxHeader';
import ProductInCart from './Components/ProductInCart/ProductInCart';
import TotalPriceBox from './Components/TotalPriceBox/TotalPriceBox';
import './Cart.scss';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartProductData: [],
      isChecked: [],
      allChecked: true,
    };
  }

  componentDidMount() {
    fetch('http://api.kokoafriendsmart.com/orders?orderType=IN_CART')
      .then(res => res.json())
      .then(cartProductData => {
        this.setState({
          cartProductData: cartProductData.data.order_list,
        });
        this.setState(previousState => ({
          isChecked: Array(previousState.cartProductData.length).fill(true),
        }));
        console.log(cartProductData);
      });
  }

  handleInputQuantity = e => {
    this.setState({ quantity: e.target.value });
  };

  plus = (index, quantity) => {
    if (quantity === 10) return;
    this.setState({
      cartProductData: this.state.cartProductData.map((productdata, i) =>
        index === i ? { ...productdata, quantity: quantity + 1 } : productdata
      ),
    });
  };

  minus = (index, quantity) => {
    if (quantity === 1) return;
    this.setState({
      cartProductData: this.state.cartProductData.map((productdata, i) =>
        i === index ? { ...productdata, quantity: quantity - 1 } : productdata
      ),
    });
  };

  deleteProduct = list => {
    this.setState({ cartProductData: [...list] });
  };

  deleteAll = emptyList => {
    this.setState({ cartProductData: [...emptyList] });
  };

  toggleCheckBox = index => {
    console.log(index);
    const isChecked = this.state.isChecked;
    isChecked[index] = !isChecked[index];
    this.setState({
      isChecked: isChecked,
    });
  };

  checkedProductTotalPrice = isChecked => {
    const checkedProductIndexArr = [];
    for (let i = 0; i < isChecked.length; i++) {
      if (isChecked[i]) {
        checkedProductIndexArr.push(i);
      }
    }
    const checkedProductPriceArr = checkedProductIndexArr.map(
      (checkindex, index) => {
        return (
          this.state.cartProductData[checkindex] &&
          this.state.cartProductData[checkindex].origin_price *
            this.state.cartProductData[checkindex].quantity
        );
      }
    );
    const checkedProductTotalPrice = checkedProductPriceArr.reduce(
      (acc, cur) => {
        return acc + cur;
      },
      0
    );
    return checkedProductTotalPrice;
  };

  checkedNum = isChecked => {
    const checkedProductIndexArr = [];
    for (let i = 0; i < isChecked.length; i++) {
      if (isChecked[i]) {
        checkedProductIndexArr.push(i);
      }
    }
    return checkedProductIndexArr.length;
  };

  //카트에서 주문하기 버튼
  onClickOderBtn = () => {
    fetch('http://api.kokoafriendsmart.com/orders', {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify({
        order_list: this.state.cartProductData.map((el, i) => el.order_id),
        // order_id_list: [3, 4],
        order_type: 'PURCHASE_CART', //카트에서 주문하기 버튼
      }),
    });
  };

  render() {
    const { cartProductData, isChecked, allChecked } = this.state;
    console.log(isChecked);
    console.log(cartProductData);

    // console.log(price);
    return (
      <div className="cart">
        <Nav />
        {/* <Banner /> */}

        <section className="cartPageOutbox">
          <section className="topBanner">
            <div className="cartDescription">
              <p className="cart">장바구니</p>
              <p>주문하실 상품 및 수량을 한번 더 확인해 주세요.</p>
            </div>
            <img
              alt="코코아프랜즈들"
              src="/images/characterImages/concon.png"
            />
          </section>
          {/* <FreeDeliveryBar /> */}

          <section className="checkBox">
            <CheckBoxHeader
              cartProductData={cartProductData}
              deleteAll={this.deleteAll}
              allChecked={allChecked}
              isChecked={isChecked}
              checkedNum={this.checkedNum}
            />
            {cartProductData.map((cartProduct, index) => {
              return (
                <ProductInCart
                  index={index}
                  key={cartProduct.order_id}
                  cartProductData={cartProductData}
                  isChecked={isChecked}
                  cartProduct={cartProduct}
                  plus={this.plus}
                  minus={this.minus}
                  handleInputQuantity={this.handleInputQuantity}
                  deleteProduct={this.deleteProduct}
                  toggleCheckBox={this.toggleCheckBox}
                />
              );
            })}
          </section>
          <TotalPriceBox
            cartProductData={cartProductData}
            isChecked={isChecked}
            checkedProductTotalPrice={this.checkedProductTotalPrice}
          />
          <button
            tupe="button"
            className="orderButton"
            onClick={this.onClickOderBtn}
          >
            <span>
              {this.checkedProductTotalPrice(isChecked).toLocaleString()}
            </span>
            원 주문하기
          </button>
        </section>
      </div>
    );
  }
}

export default Cart;
