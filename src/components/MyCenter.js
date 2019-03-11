import React, {Component} from 'react';

import '../styles/mycenter.css';
import {MemberModel} from '../model/MemberModel';
import {fetchMemberByName} from '../action/MemberAction';

class MyCenter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo: MemberModel,
      curUser: localStorage.getItem('curUser'),
      fetching: true
    };
  }

  async componentDidMount() {
    const {curUser} = this.state;
    const userInfo = await fetchMemberByName(curUser);
    this.setState({
      userInfo
    });
  }

  render() {
    const {userInfo} = this.state;
    return (
      <div>
        <div className="right-content">
          <div className="content-box">
            <div className="portal-main">
              <div className="user-card">
                <img className="avatar" src="https://account.xiaomi.com/static/img/passport/photo.jpg" width="150"
                     height="150" alt=""/>
                <div className="box1">
                  {
                    userInfo.username == null ?
                      <h2 className="username">{userInfo.username}</h2>:
                      <h2 className="username">登录</h2>
                  }
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
    );
  }
}

export default MyCenter;