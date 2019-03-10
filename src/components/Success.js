import React, {Component} from 'react';
import TopBar from './TopBar';
import MiddleBar from './MiddleBar';
import Footer from './Footer';
import '../styles/addCartSuccess.css';

class Success extends Component {

  render() {

    let data = this.props.location.state;
    const {message, details} = data;
    return (
      <div>
        <TopBar/>
        <MiddleBar/>
        <div className="buy-succ-box">
          <div className="goods-content">
            <div className="goods-img">
              <img src="http://c1.mifile.cn/f/i/17/static/success.png" width="64" height="64" alt=""/>
            </div>
            <div className="goods-info">
              <h3>{message}</h3>
              <span className="name">{details}</span>
            </div>
            <div className="clear"/>
          </div>
          <div className="actions">
            <a href={'javascript:history.back(-1)'} className="btn1">返回上一级</a>
            <a href={'/cart'} className="btn2">去购物车结算</a>

          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Success;
