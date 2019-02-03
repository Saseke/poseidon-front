import React, {Component} from 'react';
import TopBar from '../components/TopBar';
import MiddleBar from '../components/MiddleBar';
import Footer from '../components/Footer';
import '../styles/myCenter.css';

class MyCenter extends Component{
  render() {
    return(
      <div>
        <TopBar/>
        <MiddleBar/>
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
                    <li><a href="/">我的订单</a></li>
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
              <div className="right-content">
                <div className="content-box">
                  <div className="portal-main">
                    <div className="user-card">
                      <img className="avatar" src="https://account.xiaomi.com/static/img/passport/photo.jpg" width="150" height="150" alt=""/>
                        <div className="box1">
                          <h2 className="username">2187728043</h2>
                          <p className="tip">下午好～</p>
                          <a className="link" href="/">修改个人信息{'>'}</a>
                        </div>
                    </div>

                    <div className="user-actions">
                      <ul className="action-list">
                        <li>账户安全：<span className="level">普通</span></li>
                        <li>绑定手机：<span className="tel">134********07</span></li>
                        <li>绑定邮箱：<span className="tel"> </span><a className="btn" href="/">绑定</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="portal-sub">
                    <ul className="info-list">
                      <li>
                        <h3>待支付的订单：<span className="num">0</span></h3>
                        <a href="/">查看待支付订单<i className="iconfont"> {'>'} </i></a>
                        <img src="http://s01.mifile.cn/i/user/portal-icon-1.png" alt=""/>
                      </li>
                      <li>
                        <h3>待收货的订单：<span className="num">0</span></h3>
                        <a href="/">查看待收货订单<i className="iconfont"> {'>'} </i></a>
                        <img src="http://s01.mifile.cn/i/user/portal-icon-2.png" alt=""/>
                      </li>
                      <li>
                        <h3>待评价商品数：<span className="num">0</span></h3>
                        <img src="http://s01.mifile.cn/i/user/portal-icon-3.png" alt=""/>
                          <a href="/">查看待评价商品<i className="iconfont"> {'>'} </i></a>
                      </li>
                      <li>
                        <h3>喜欢的商品：<span className="num">0</span></h3>
                        <a href="/">查看喜欢的商品<i className="iconfont"> {'>'} </i></a>
                        <img src="http://s01.mifile.cn/i/user/portal-icon-4.png" alt=""/>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default MyCenter;
