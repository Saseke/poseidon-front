import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import TopBar from '../components/TopBar';
import MiddleBar from '../components/MiddleBar';
import Footer from '../components/Footer';
import '../styles/personal.css';
import PersonalRouter from '../router/PersonalRouter';

class Personal extends Component {
  render() {
    return (
      <div>
    {/*    <TopBar/>
        <MiddleBar/>*/}
        <div className="main-page">

          <div className="breadcrumbs">
            <a href="/">首页</a>
            <span> {'>'} </span>
            <span>个人中心</span>
          </div>

          <div className="user-main">
            <div className="left-box">
              <div className="nav">
                <div className="nav-box">
                  <h3 className="title"><strong>订单中心</strong></h3>
                  <ul className="nav-list">
                    <li><Link to='/personal/orders'>我的订单</Link></li>
                    <li><a href="/">意外保</a></li>
                    <li><a href="/">团购订单</a></li>
                    <li><a href="/">评价晒单</a></li>
                    <li><a href="/">话费充值订单</a></li>
                    <li><a href="/">以旧换新订单</a></li>
                  </ul>
                </div>

                <div className="nav-box">
                  <h3 className="title"><strong>个人中心</strong></h3>
                  <ul className="nav-list">
                    <li><Link to='/personal'>我的个人中心</Link></li>
                    <li><a href="/">消息通知</a></li>
                    <li><a href="/">购买资格</a></li>
                    <li><a href="/">现金账户</a></li>
                    <li><a href="/">小米礼品卡</a></li>
                    <li><a href="/">现金券</a></li>
                    <li><a href="/">喜欢的商品</a></li>
                    <li><a href="/">优惠券</a></li>
                    <li><a href="/">收货地址</a></li>
                  </ul>
                </div>

                <div className="nav-box">
                  <h3 className="title"><strong>售后服务</strong></h3>
                  <ul className="nav-list">
                    <li><a href="/">服务记录</a></li>
                    <li><a href="/">申请服务</a></li>
                    <li><a href="/">领取快递报销</a></li>
                  </ul>
                </div>

                <div className="nav-box">
                  <h3 className="title"><strong>账户管理</strong></h3>
                  <ul className="nav-list">
                    <li><a href="/">个人信息</a></li>
                    <li><a href="/">修改密码</a></li>
                    <li><a href="/">社区VIP认证</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="right-box">
              <PersonalRouter/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Personal;
