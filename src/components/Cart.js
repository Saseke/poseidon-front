import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/cart.css';
import Footer from '../containers/Footer';
import {deleteCart, fetchCartByUserName, updateCart} from '../action/CartAction';
import '../styles/antd-confirm.css';
import {NETWORK_BUSY} from '../constants/Constants';
import {CartModel} from '../model/CartModel';


class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curUser: localStorage.getItem('curUser'),
      carts: [CartModel],
      count: 0,
      totalPrice: 0,
      fetching: true,
      multiChecked: false
    };
  }

  async componentDidMount() {
    const {curUser} = this.state;
    const carts = await fetchCartByUserName(curUser);
    this.setState({
      carts,
      fetching: false
    });
  }

  //处理input标签的变化
  handleChange = (operation, index) => event => {
    let carts = [...this.state.carts];
    let quantity = carts[index].quantity;
    if (operation === 'add') {
      if (++quantity > 10) {
        alert('超过最大的限制');
      } else {
        carts[index].quantity = quantity;
      }
    } else {
      if (--quantity < 0) {
        alert('数量不能小于0');
      } else {
        carts[index].quantity = quantity;
      }
    }
    this.setState({
      carts
    });
  };


  handleCheckbox = (operation, index) => (event) => {
    let totalPrice = this.state.totalPrice;
    if (operation === 'single') {
      let {count} = this.state;
      let carts = [...this.state.carts];
      carts[index].checked = !carts[index].checked;
      carts[index].checked ?
        this.setState({
          carts,
          count: count + 1,
          totalPrice: totalPrice + carts[index].price
        })
        : this.setState({
          carts,
          count: count - 1,
          totalPrice: totalPrice - carts[index].price
        });
    } else if (operation === 'multi') {
      let carts = [...this.state.carts];
      const multiChecked = !this.state.multiChecked;
      if (multiChecked) {
        let price = 0;
        carts.forEach((cart) => {
          cart.checked = true;
          price += cart.price;
        });
        this.setState({
          carts,
          count: carts.length,
          totalPrice: price,
          multiChecked
        });
      } else {
        carts.forEach((cart) => {
          cart.checked = false;
        });
        this.setState({
          carts,
          count: 0,
          totalPrice: 0,
          multiChecked
        });

      }
    }
  };


  async handleDelete(itemCartId) {
    const {curUser} = this.state;
    let carts = [...this.state.carts];
    const rep = await deleteCart(curUser, itemCartId);
    if (rep.code === 200) {
      carts.splice(carts.findIndex(cart => cart.itemCartId === itemCartId), 1);
      this.setState({
        carts
      });
    } else {
      alert(NETWORK_BUSY);
    }
  }

  async handleUpdate(itemId, quantity) {
    const {curUser} = this.state;
    const rep = await updateCart(curUser, itemId, quantity);
    if (rep.code !== 200) {
      alert(NETWORK_BUSY);
    }
  }

  render() {
    const {curUser, carts, count, totalPrice, fetching} = this.state;
    if (fetching) {
      return null;
    }
    return (
      <div>
        <div>
          <div className="cart-header">
            <div className="header-container">
              <a href="/"><img src="https://s01.mifile.cn/i/logo-footer.png?v2" alt=''/></a>
              <div className="text">我的购物车</div>
              <div className="operation">
                {curUser === null ?
                  <div>
                    <Link to="/login">登录</Link>
                    <span>|</span>
                    <a href="/">注册</a>
                  </div> :
                  <div>
                    <Link to="/">{curUser}</Link>
                    <span>|</span>
                    <Link to="/">注销</Link>
                  </div>
                }

              </div>
            </div>
          </div>
        </div>

        {
          carts.length === 0 ?
            <div className="cart-empty">
              <h2>您的购物车还是空的!</h2>
              {
                curUser == null ?
                  <span>
                    <p className="login-desc">登录后将显示您之前加入的商品</p>
                    <a className="btn-login" href="/">立即登录</a>
                  </span> :
                  null
              }
              <a className="btn-shopping" href="/">马上去购物</a>
            </div>
            :
            <div className="cart-box">
              <div className="cart-goods-list">
                <div className="list-head">
                  <div className="col-check">
                    <input type="checkbox" className="checkbox" onChange={this.handleCheckbox('multi', 0)}
                           id="selectAll"/>
                    <span className="selectall">全选</span>
                  </div>
                  <div className="col-img"/>
                  <div className="col-name">商品名称</div>
                  <div className="col-price">单价</div>
                  <div className="col-num">数量</div>
                  <div className="col-total">小计</div>
                  <div className="col-action">操作</div>
                </div>
                <div id="list-body">
                  {
                    carts.map((cart, index) => (
                      <div key={index} className="item-box">
                        <div className="col-check">
                          <input type="checkbox" className="itemcheck" checked={cart.checked}
                                 onChange={this.handleCheckbox('single', index)}/>
                        </div>
                        <div className="col-img">
                          <a href="/">
                            <img width='80px' height='80px' src={cart.itemImage} alt=""/>
                          </a>
                        </div>
                        <div className="col-name">
                          <a href="/">{cart.itemSellPoint}</a>
                        </div>
                        <div className="col-price"> {cart.price}元</div>
                        <div className="col-num">
                          <div className="change-goods-num">
                            <button value="-" onClick={this.handleChange('reduce', index)}>-</button>
                            <input type="text" className="num" id='num' onChange={this.onHandleChange}
                                   value={cart.quantity}/>
                            <button value="+" onBlurCapture={this.handleUpdate.bind(this, cart.itemId, cart.quantity)}
                                    onClick={this.handleChange('add', index)}>+
                            </button>
                          </div>
                        </div>
                        {/*需要动态变更*/}
                        <div className="col-total"> {cart.price}元</div>
                        <div className="col-action">
                          <p className="delete"
                             onClick={this.handleDelete.bind(this, cart.itemCartId, cart.quantity)}>×</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className="cart-bar">
                <div className="section-left">
                  <a href="/" className="back-shopping">继续购物</a>
                  <span className="cart-total">共<i id="cartTotalNum">{carts.length}</i> 件商品，已选择 <i
                    id="selTotalNum">{count}</i> 件</span>
                </div>
                <div className="section-right">
                  <div className="total-price">合计：
                    <em id="cartTotalPrice">{totalPrice}</em>
                    元
                    <a href="/" className="btn-primary" id="goCheckout">去结算</a>
                  </div>
                </div>
              </div>
            </div>
        }
        <h2 className="recommend-title">
          <span>为您推荐</span>
        </h2>
        <div className="recommend">
          <ul>
            <li className="recommend-list">
              <dl>
                <dt>
                  <a href="/">
                    <img src="https://i1.mifile.cn/a1/pms_1543975478.91979978!140x140.jpg" alt=""/>
                  </a>
                </dt>
                <dd className="recommend-name">
                  <a href="/"> 小米米家智能插座WiFi版 </a>
                </dd>
                <dd className="recommend-price">49元</dd>
                <dd className="recommend-tips">665人好评</dd>
                <dd className="addToCar"><a href="/">加入购物车</a></dd>
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
