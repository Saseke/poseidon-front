import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../styles/cart.css';
import Footer from '../containers/Footer';

class Cart extends Component {

  render() {
    return (
     <div>
       <div className="cart-header">
         <div className="header-container">
           <a href=""><img src="https://s01.mifile.cn/i/logo-footer.png?v2"/></a>
           <div className="text">我的购物车</div>
           <div className="operation"><Link to="/login">登录</Link><span>|</span><a href="#">注册</a></div>
         </div>
       </div>
       {/*未登录*/}
      {/*<div class="cart-empty">
           <h2>您的购物车还是空的!</h2>
           <p class="login-desc">登录后将显示您之前加入的商品</p>
           <a class="btn-login" href="#">立即登录</a>
           <a class="btn-shopping" href="#">马上去购物</a>
       </div>*/}
       {/*登录空*/}
      {/* <div class="cart-empty">
              <h2>您的购物车还是空的!</h2>
              <a class="btn-login" href="#">马上去购物</a>
          </div>*/}
       {/*登录不空*/}
       <div className="cart-box">
         <div className="cart-goods-list">
           <div className="list-head">
             <div className="col-check">
               <input type="checkbox" className="checkbox" id="selectAll"/>
               <span className="selectall">全选</span>
             </div>
             <div className="col-img"></div>
             <div className="col-name">商品名称</div>
             <div className="col-price">单价</div>
             <div className="col-num">数量</div>
             <div className="col-total">小计</div>
             <div className="col-action">操作</div>
           </div>
           <div id="list-body">
             <div className="item-box">
               <div className="col-check">
                 <input type="checkbox" className="itemcheck"/>
               </div>
               <div className="col-img">
                 <a href="#">
                   <img src="https://i1.mifile.cn/a1/pms_1529842946.21137927!80x80.jpg" alt=""/>
                 </a>
               </div>
               <div className="col-name">
                 <a href="#">小米平板4 8英寸WIFI版 3GB内存 黑色 32GB</a>
               </div>
               <div className="col-price"> 1099元</div>
               <div className="col-num">
                 <div className="change-goods-num">
                   <button value="-">-</button>
                   <input type="text" className="num" value="1"/>
                     <button value="+">+</button>
                 </div>
               </div>
               <div className="col-total"> 1099元</div>
               <div className="col-action">
                 <p className="delete">×</p>
               </div>
             </div>
           </div>
         </div>
         <div className="cart-bar">
           <div className="section-left">
             <a href="#" className="back-shopping">继续购物</a>
             <span className="cart-total">共<i id="cartTotalNum">1</i> 件商品，已选择 <i id="selTotalNum">1</i> 件</span>
           </div>
           <div className="section-right">
             <div className="total-price">合计：
               <em id="cartTotalPrice">1099</em>
               元
               <a href="#" className="btn-primary" id="goCheckout">去结算</a>
             </div>
           </div>
         </div>
       </div>

       <h2 className="recommend-title">
         <span>为您推荐</span>
       </h2>
       <div className="recommend">
         <ul>
           <li className="recommend-list">
             <dl>
               <dt>
                 <a href="#">
                   <img src="https://i1.mifile.cn/a1/pms_1543975478.91979978!140x140.jpg" alt=""/>
                 </a>
               </dt>
               <dd className="recommend-name">
                 <a href="#"> 小米米家智能插座WiFi版 </a>
               </dd>
               <dd className="recommend-price">49元</dd>
               <dd className="recommend-tips">665人好评</dd>
               <dd className="addToCar"><a href="#">加入购物车</a></dd>
             </dl>
           </li>
         </ul>
       </div>
       <Footer/>
     </div>
    );
  }
}

export default Cart;
