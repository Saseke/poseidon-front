import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import search from '../img/search.png';

import '../styles/myOrder.css';
import MyOrdersRouter from '../router/MyOrdersRouter';
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
            <small>请谨防钓鱼链接或诈骗电话，<a href='/'>了解更多&gt;</a></small>
          </h1>
          <div className="more">
            <ul className="filter-list">
              <li className="first active"><Link to='/personal/orders'>全部有效订单</Link></li>
              <li><Link to='/personal/orders/tobepaid'>待支付({orders.length})</Link></li>
              <li><Link to='/personal/orders/tobereceived'>待收货</Link></li>
              <li><Link to='/personal/orders/closed'>已关闭</Link></li>
            </ul>
            <div className="search-form">
              <input className="search-text" type="search" id="orderSearchKeywords" name="keywords"
                     autoComplete="off" placeholder="输入商品名称、商品编号、订单号"/>
              <button className="search-btn"><img src={search} alt=""/></button>
            </div>
          </div>
          <MyOrdersRouter/>
        </div>
      </div>
    );
  }
}

export default MyOrders;