import React, {Component} from 'react';
import '../styles/checkOrder.css';

class VerifyOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curUser: localStorage.getItem('curUser'),
    };
  }

  render() {

    const {curUser} = this.state;
    const {verifyCarts, totalPrice} = this.props.location.state;
    console.log(verifyCarts);
    console.log(totalPrice);
    return (
      <div className="order-header">
        <div className="header-container">
          <a href="/"><img src="https://s01.mifile.cn/i/logo-footer.png?v2" alt=''/></a>
          <div className="text">确认订单</div>
          <div className="operation"><a href="/">{curUser}</a><span>|</span><a href="/">我的订单</a></div>
        </div>
        <div className="page-main">
          <div className="post-tips">
            <h4>春节期间发货公告</h4>
            1. 我们将尽力保障手机品类72小时内快速发货，电视、空调品类49个城市不打烊（2月2日-8日，详见电视频道公示）；<br/>
            2. 腊月二十八至正月初四（2月2日-8日）期间订单将于正月初七（2月11日）前完成发货；<br/>
            3. 电信米粉卡大年三十至正月初九（2月4日-13日）暂停发货，期间订单将于正月初十（2月14日）陆续发出。
          </div>
          <div className="checkout-box">
            <div className="section">
              <div className="section-address">
                <div className="section-header">
                  <h3 className="title">收货地址</h3>
                </div>
                <div className="address-body">
                  <div className="address-item">
                    <p className="iconfont">+</p>
                    添加新地址
                  </div>
                </div>
              </div>
              <div className="section-goods">
                <div className="section-header">
                  <h3 className="title">商品及优惠券</h3>
                  <div className="more">
                    <a href={'/cart'}>返回购物车 {'>'}</a>
                  </div>
                </div>

                <div className="goods-body">
                  <ul className="good-list">
                    {
                      verifyCarts.map((verifyCart, index) => (
                        <div key={index}>
                          <li className="col-img">
                            <img src={verifyCart.itemImage} alt=""/>
                          </li>
                          <li className="col-name">
                            <a href="/">{verifyCart.itemSellPoint}</a>
                          </li>
                          <li className="col-price"> {verifyCart.price}x {verifyCart.quantity}</li>
                          <li className="col-total">{verifyCart.price * verifyCart.quantity}</li>
                        </div>
                      ))
                    }
                    {/*                    <li className="col-img">
                      <img src="https://i1.mifile.cn/a1/pms_1537324004.08544830!30x30.jpg" alt=""/>
                    </li>
                    <li className="col-name">
                      <a href="/">小米8 青春 全网通版 6GB内存 梦幻蓝 64GB</a>
                    </li>
                    <li className="col-price"> 1499元 x 1</li>
                    <li className="col-total">1499元</li>*/}
                  </ul>
                </div>


              </div>
              <div className="section-options">
                <div className="section-header">
                  <h3 className="title">配送方式</h3>
                  <div className="shipment">包邮</div>
                </div>
              </div>
              <div className="section-invoice">
                <div className="section-header">
                  <h3 className="title">发票</h3>
                  <div className="invoice-result">
                    <span>电子发票</span>
                    <span>个人</span>
                    <span>商品明细</span>
                    <a href="/">修改{'>'}</a>
                  </div>
                </div>
              </div>
              <div className="section-count">
                <div className="money-box">
                  <ul>
                    <li>
                      <label>商品件数：</label>
                      <span className="val">1件</span>
                    </li>
                    <li>
                      <label>商品总价：</label>
                      <span className="val">1499元</span>
                    </li>
                    <li>
                      <label>运费：</label>
                      <span className="val">0元</span>
                    </li>
                    <li className="total-price">
                      <label>应付总额：</label>
                      <span className="val"><em>1499</em>元</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="section-bar">
                <div className="fr">
                  <a href="/" className="btn">去结算</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VerifyOrder;
