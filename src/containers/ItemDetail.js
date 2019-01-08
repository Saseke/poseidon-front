import React, {Component} from 'react';
import '../styles/category.css';
import Carousels from '../containers/Carousels';

class ItemDetail extends Component {
  render() {
    return (
      <div className="type-main">
        <div className="detail-carousel">
          <Carousels/>
        </div>
        <div className="channel-title">
          <h2>明星产品</h2>
        </div>
        <div className="channel-product">
          <div className="product-cell">
            <div className="figure">
              <a href="">
                <img
                  src="https://i8.mifile.cn/b2c-mimall-media/b8133772061204a88bc334001cd69b57.jpg?w=1708&h=868"
                  alt=""/>
              </a>
            </div>
            <div className="content">
              <h3 className="con-title">
                <a href="">小米8 青春版</a>
              </h3>
              <p className="con-desc">潮流镜面渐变色，2400万自拍旗舰</p>
              <p className="con-price">
                <strong>1399</strong>元起
              </p>
              <p className="con-link">
                <a href="">了解产品 ></a>
              </p>
            </div>
            <div className="channel-line"/>

            <div className="product-two">
              <div className="product-figure">
                <a href="">
                  <img
                    src="https://i8.mifile.cn/b2c-mimall-media/0741bc542844bf3dd4b51a794b559bc9.jpg?w=1212&h=716"
                    alt=""/>
                </a>
                <h3><a href="">小米8 SE</a></h3>
                <p className="one-desc">三星 AMOLED 全面屏</p>
                <p className="one-price"><strong>1799</strong>元起 <del>1999元</del></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDetail;