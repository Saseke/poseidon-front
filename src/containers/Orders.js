import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import search from '../img/search.png';

import '../styles/order.css';
import OrdersRouter from '../router/OrdersRouter';
import {statisticOrder} from '../action/OrderAction';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: null,
      fetching: true
    };
  }

  async componentDidMount() {
    const buyerId = localStorage.getItem('buyerId');
    const msg = await statisticOrder(buyerId);
    if (msg.code === 200) {
      this.setState({
        group: msg.data,
        fetching: false
      });
    } else {
      alert('网络错误');
    }
  }

  render() {
    const {group, fetching} = this.state;
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
              {/*              <li><Link to='/personal/orders/tobepaid'>待支付{group[0]}</Link></li>
              <li><Link to='/personal/orders/tobereceived'>待收货({group[1]})</Link></li>
              <li><Link to='/personal/orders/closed'>已关闭({group[2]})</Link></li>*/}
            </ul>
            <div className="search-form">
              <input className="search-text" type="search" id="orderSearchKeywords" name="keywords"
                     autoComplete="off" placeholder="输入商品名称、商品编号、订单号"/>
              <button className="search-btn"><img src={search} alt=""/></button>
            </div>
          </div>
          <OrdersRouter/>
        </div>
      </div>
    );
  }
}

export default Orders;