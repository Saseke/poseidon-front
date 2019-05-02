import React, {Component} from 'react';
import '../styles/paySuccess.css';
import $ from 'jquery';
import Footer from '../components/Footer';


class PaySuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curUser: localStorage.getItem('curUser'),
      isshow:false
    };
  }
  showdetail = () => {
    if (this.state.isshow) {
      $('#post-info').css('visibility', 'visible');
      $('#order-detail').slideUp();
      this.setState({
        isshow:false
      });
    } else {
      $('#post-info').css('visibility', 'hidden');
      $('#order-detail').slideDown();
      this.setState({
        isshow:true
      });
    }
  };

  render() {
    return (
      <div>
        <div className="background">
        <div className="pay-header">
          <div className="pay-header-container">
            <a href="/"><img src="https://s01.mifile.cn/i/logo-footer.png?v2"/></a>
            <div className="text">支付订单</div>
            <div className="user"><a href="#">{this.state.curUser}</a><span>|</span><a href="/personal/orders">我的订单</a></div>
          </div>
        </div>
        <div className="section">
          <div className="section-order">
            <div className="icon">
              <i className="iconfont icon-right">√</i>
            </div>
            <div className="order-info">
              <div>
                <h2 className="order-title">订单支付成功！请注意查收～</h2>
                <p className="order-time"></p>
                <p className="order-time">我们将尽力保障产品在72小时内快速发货</p>
                <p className="post-info" id="post-info">
                  收货信息：徐瑞智 134****8507 &nbsp;&nbsp;
                  山西&nbsp;&nbsp;晋中市&nbsp;&nbsp;榆次区&nbsp;&nbsp;乌金山镇&nbsp;&nbsp;太原理工大学 </p>
                <div className="order-detail" id="order-detail">
                  <ul>
                    <li>
                      <div className="label">订单号：</div>
                      <div className="detail-content">
                        <span className="order-num">5190319282915459</span>
                      </div>
                    </li>
                    <li>
                      <div className="label">收货信息：</div>
                      <div className="detail-content">
                        徐瑞智 134****8507&nbsp;&nbsp;
                        山西&nbsp;&nbsp;晋中市&nbsp;&nbsp;榆次区&nbsp;&nbsp;乌金山镇&nbsp;&nbsp;太原理工大学
                      </div>
                    </li>
                    <li>
                      <div className="label">商品名称：</div>
                      <div className="detail-content">
                        小米无线鼠标青春版 白色
                      </div>
                    </li>
                    <li>
                      <div className="label">发票信息：</div>
                      <div className="detail-content">
                        电子发票 个人
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <p className="total">
                  总金额：<span className="money"><em>59</em>元</span>
                </p>
                <a onClick={this.showdetail} className="show-detail">订单详情<i className="iconfont">{">"}</i></a>
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

export default PaySuccess;