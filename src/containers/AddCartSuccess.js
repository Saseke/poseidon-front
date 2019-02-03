import React, {Component} from 'react';
import TopBar from '../components/TopBar';
import MiddleBar from '../components/MiddleBar';
import Footer from '../components/Footer';
import '../styles/addCartSuccess.css';

class AddCartSuccess extends Component{
  render() {
    return (
      <div>
        <TopBar/>
        <MiddleBar/>
        <div className="buy-succ-box">
          <div className="goods-content">
            <div className="goods-img">
              <img src="http://c1.mifile.cn/f/i/17/static/success.png" width="64" height="64"/>
            </div>
            <div className="goods-info">
              <h3>已成功加入购物车！</h3>
              <span className="name">小米8 青春 全网通版 6GB内存 梦幻蓝 64GB  </span>
            </div>
            <div className="clear"></div>
          </div>
          <div className="actions">
            <a href="javascript:history.back(-1)" className="btn1">返回上一级</a>
            <a href="/cart" className="btn2">去购物车结算</a>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default AddCartSuccess;
