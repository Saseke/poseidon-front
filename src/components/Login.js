import React, {Component} from 'react';
import '../styles/login.css';
import {fetchToken} from '../action/LoginAction';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handelChange = name => event => {
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  async handleSubmit(e) {
    e.preventDefault();
    const flag = await fetchToken(this.state);
    if (flag) {
      alert('登录成功');
    } else {
      alert('登录失败,请重试');
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <div className="header">
          <a href="#" className="logo"> </a>
        </div>

        <div className="contain">
          <a className="banner" id="banner"> </a>
          <div className="login">
            <div className="login-mode" id="login-mode">
              <a id="account-login" className="color">
                账号登录
              </a>
              <span className="line">
              </span>
              <a id="qr-login">
                扫码登录
              </a>
            </div>
            <div id="list">
              <div id='account-area'>
                {/*<form id="form1">*/}
                <input type="text" placeholder="邮箱/手机号码/小米ID" id="username" onChange={this.handelChange('username')}/>
                <input type="password" placeholder="密码" id="password" onChange={this.handelChange('password')}/>
                <div className="err_tip" style={{display: 'none'}}>
                  <div>
                    <em className="icon_error">
                    </em>
                    <span className="error-con">用户名不正确</span>
                  </div>
                </div>
                <div className="err_tip" style={{display: 'none'}}>
                  <div>
                    <em className="icon_error">
                    </em>
                    <span className="error-con">密码不正确</span>
                  </div>
                </div>
                <button onClick={this.handleSubmit.bind(this)} className="login-btn">登录</button>
                <div className="others">
                  <span className="ChangeLoginType">手机短信登录/注册</span>
                  <div className="RegisterAndForget">
                    <a href="#">立即注册</a>
                    <a>|</a>
                    <a href="#">忘记密码?</a>
                  </div>
                </div>
                <div className="otherLoginType">
                  <legend align="center" className="other-txt">其他方式登录</legend>
                </div>
                {/*</form>*/}
                {/*<form className="hide" id="form2">*/}
                {/*/!*<div class="areacode">+86</div>*!/*/}
                {/*<input type="text" placeholder="手机号码" id="telNum" style="padding-left:20%"/>*/}
                {/*<input type="text" placeholder="短信验证码" id="identifying"/>*/}
                {/*<button className="login-btn">立即登录/注册</button>*/}
                {/*<div className="others">*/}
                {/*<span className="ChangeLoginType">用户名密码登录</span>*/}
                {/*</div>*/}
                {/*<div className="otherLoginType">*/}
                {/*<legend align="center" className="other-txt">其他方式登录</legend>*/}
                {/*</div>*/}
                {/*</form>*/}
              </div>
              {/*<div id="qr-area" className='hide'>使用小米商城APP扫一扫小米手机可打开「设置」{'>'}「小米帐号」扫码登录</div>*/}
            </div>
          </div>
        </div>

        <div className="footer">
          <p className="sub-nav">
            <ul className="lang-select-list">
              <li><a href="#">简体</a><span>|</span></li>
              <li><a href="#">繁体</a><span>|</span></li>
              <li><a href="#">English</a><span>|</span></li>
              <li><a href="#">FAQ</a><span>|</span></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </p>
          <p className="copyright">
            Xiaomi Inc., All rights reserved - Beijing ICP - 10046444 -
            <a href="#">
              <span>
                <img
                  src={'https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png'}
                  alt=''/></span>Beijing Public Security ICP-11010802020134</a> - Beijing ICP licence No. - 110507
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
