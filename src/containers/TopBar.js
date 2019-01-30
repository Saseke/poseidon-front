import React, {Component} from 'react';
import '../styles/topbar.css';
import {Link} from 'react-router-dom';

class TopBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      curUser: localStorage.getItem('curUser')
    };
  }


  render() {
    const {curUser} = this.state;
    return (
      <div className="site-topbar" id="topbar">
        <div id="container">
          <ul className="list1">
            <li><a href='/'>小米商城</a><span>|</span></li>
            <li><a href='/'>MIUI</a><span>|</span></li>
            <li><a href='/'>loT</a><span>|</span></li>
            <li><a href='/'>云服务</a><span>|</span></li>
            <li><a href='/'>金融</a><span>|</span></li>
            <li><a href='/'>有品</a><span>|</span></li>
            <li><a href='/'>小爱开发平台</a><span>|</span></li>
            <li><a href='/'>政企服务</a><span>|</span></li>
            <li><a href='/'>下载app</a><span>|</span></li>
            <li><a href='/'>Select Region</a></li>
            <div className="clear"/>
          </ul>
          <ul className="list2">
            {
              curUser == null ?
                <li><Link to="/login">登录</Link><span>|</span></li> :
                <li>{curUser}<span>|</span></li>
            }
            <li><Link to="/register">注册</Link><span>|</span></li>
            <li><Link to="/login">消息通知</Link></li>
            {/*<li className='cart'><Link to="/cart">购物车</Link></li>*/}
            <li className='cart'><Link to={curUser != null ? '/cart' : '/login'}>购物车</Link></li>
            <div className="clear"/>
          </ul>
          <div className="clear"/>
        </div>
      </div>
    );
  }
}

export default TopBar;
