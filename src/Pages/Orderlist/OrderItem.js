import React, { Component } from 'react';
import './Orderlist.scss';

class OrderItem extends Component {
  render() {
    const { itemTitle, itemPrice, imgSrc } = this.props;
    return (
      <div className="orderItemList">
        <div className="date">2021.05.21</div>
        <div className="product">
          <div>
            <img alt={itemTitle} src={imgSrc} />
          </div>
          <div className="productInfo">
            <div>
              <p>{itemTitle}</p>
            </div>
            <div>
              <p>{Number(itemPrice).toLocaleString()}원</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderItem;
