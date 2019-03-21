import React, {Component} from 'react';
import {OrderModel} from '../model/OrderModel';
import {fetchByBuyerId} from '../action/OrderAction';

class ToBePaid extends Component{
  constructor(props) {
    super(props);
    this.state = {
      orders: [OrderModel],
      fetching: true
    };
  }

  async componentDidMount() {
    const buyerId = localStorage.getItem('buyerId');
    let msg = await fetchByBuyerId(buyerId, 0);
    if (msg.code === 200) {
      this.setState({
        orders: msg.data,
        fetching: false
      });
    } else {
      alert('网络错误');
    }
  }
  render() {
    const {orders, fetching} = this.state;
    if (fetching) {
      return null;
    }
    return (
      <div>
        {
          orders.map((order) => (
            order.orderItemDtoList.map((orderItem, index) => (
              <div key={index} className="order-detail">
                <div className="order-type">
                  <p className="title">等待付款</p>
                  <div className="info">
                    <p>{order.createTime}<span className="sep">|</span> {order.buyerNick}<span className="sep"><span
                      className="sep">|</span></span> 订单号：{order.orderId}<span className="sep">|</span> 在线支付 </p>
                    <p>应付金额：<span
                      className="price">{orderItem.itemTotalPrice}</span>元
                    </p>
                  </div>
                </div>
                <div className="order-item">
                  <div className="image">
                    <div>
                      <a href="/">
                        <img src={orderItem.itemImage} width="80"
                             height="80" alt={orderItem.itemName}/>
                      </a>
                    </div>
                    <div className="name">
                      <a href="/">{orderItem.itemName}</a>
                      <p className="price"> {orderItem.itemPrice}元 × {orderItem.itemNum} </p>
                    </div>
                  </div>
                  <div className="action">
                    <a className="btn btn-small btn-primary" href="/">立即支付</a>
                    <a className="btn btn-small btn-line-gray" href="/">订单详情</a>
                  </div>
                </div>
              </div>
            ))
          ))
        }
        <div className="pages">
          <span className="numbers first"><span className="pages-iconfont">{'<'}</span></span>
          <span className="numbers current">1</span>
          <span className="numbers last"><span className="pages-iconfont">{'>'}</span></span>
        </div>
      </div>
    );
  }
}

export default ToBePaid;