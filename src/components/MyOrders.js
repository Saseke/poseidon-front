import React, {Component} from 'react';

import '../styles/myOrder.css';
import {OrderModel} from '../model/OrderModel';
import {fetchByBuyerId} from '../action/OrderAction';

class MyOrders extends Component {

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
        <div className="box-hd">
          <h1 className="title">我的订单
            <small>请谨防钓鱼链接或诈骗电话，<a>了解更多&gt;</a></small>
          </h1>
          <div className="more">
            <ul className="filter-list J_orderType">
              <li className="first active"><a>全部有效订单</a></li>
              <li><a id="unpaidTab">待支付(2)</a></li>
              <li><a id="sendTab">待收货</a></li>
              <li><a>已关闭</a></li>
            </ul>
            <div className="clear"></div>
            <div className="search-form">
              <input className="search-text" type="search" id="orderSearchKeywords" name="keywords"
                     autoComplete="off" placeholder="输入商品名称、商品编号、订单号"/>
              <button className="search-btn"><img src={''} alt=""/></button>
            </div>
          </div>
          {/* <div>
            <p class="empty">当前没有交易订单。</p>
          </div>*/}

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


          <div className="order-detail">
            <div className="order-type">
              <p className="title">等待付款</p>
              <div className="info">
                <p>2019年03月10日 09：27 <span className="sep">|</span> 王二小 <span className="sep"><span
                  className="sep">|</span></span> 订单号：123456789123 <span className="sep">|</span> 在线支付 </p>
                <p>应付金额：<span className="price">1099.00</span>元</p>
              </div>
            </div>
            <div className="order-item">
              <div className="image">
                <div>
                  <a href="/">
                    <img src="http://i1.mifile.cn/a1/pms_1490595812.95661863!80x80.png" width="80"
                         height="80" alt="小米无线鼠标 黑色"/>
                  </a>
                </div>
                <div className="name">
                  <a href="/">小米无线鼠标 黑色</a>
                  <p className="price"> 69元 × 1 </p>
                </div>
              </div>
              <div className="action">
                <a className="btn btn-small btn-primary" href="/">立即支付</a>
                <a className="btn btn-small btn-line-gray" href="/">订单详情</a>
              </div>
            </div>
          </div>

          <div className="order-detail">
            <div className="order-type">
              <p className="title">等待付款</p>
              <div className="info">
                <p>2019年03月10日 09：27 <span className="sep">|</span> 王二小 <span className="sep"><span
                  className="sep">|</span></span> 订单号：123456789123 <span className="sep">|</span> 在线支付 </p>
                <p>应付金额：<span className="price">1099.00</span>元</p>
              </div>
            </div>
            <div className="order-item">
              <div className="image">
                <div>
                  <a href="/">
                    <img src="http://i1.mifile.cn/a1/pms_1490595812.95661863!80x80.png" width="80"
                         height="80" alt="小米无线鼠标 黑色"/>
                  </a>
                </div>
                <div className="name">
                  <a href="/">小米无线鼠标 黑色</a>
                  <p className="price"> 69元 × 1 </p>
                </div>
              </div>
              <div className="action">
                <a className="btn btn-small btn-primary" href="/">立即支付</a>
                <a className="btn btn-small btn-line-gray" href="/">订单详情</a>
              </div>
            </div>
          </div>
        </div>
        <div className="pages">
          <span className="numbers first"><span className="iconfont">{'<'}</span></span>
          <span className="numbers current">1</span>
          <span className="numbers last"><span className="iconfont">{'>'}</span></span>
        </div>
      </div>
    );
  }
}

export default MyOrders;