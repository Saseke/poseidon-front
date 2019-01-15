import React, {Component} from 'react';
import '../styles/middlebar.css';

class MiddleBar extends Component {
  render() {
    return (
      <div>
        <div className="site-middlebar">
          <a href="/"><img className="logo-icon" src="https://s01.mifile.cn/i/logo-footer.png?v2" alt=''/></a>
          <div id="middle-nav">
            <ul id='list3'>
              <li className="item-list"><a>小米手机</a></li>
              <li className="item-list"><a>红米</a></li>
              <li className="item-list"><a>电视</a></li>
              <li className="item-list"><a>笔记本</a></li>
              <li className="item-list"><a>空调</a></li>
              <li className="item-list"><a>新品</a></li>
              <li className="item-list"><a>路由器</a></li>
              <li className="item-list"><a>只能硬件</a></li>
              <li><a>服务</a></li>
              <li><a>社区</a></li>
            </ul>
            <div className="search-box">
              <input type="text" value="" id="search"/>
              <button className="search-icon">
              </button>
            </div>
          </div>
        </div>
        <div id="middle-nav-list">
          <div className="list-container">
            {/*最多6条数据*/}
            <ul className="main-list">
              <li>
                <div className="new"> 新品</div>
                {/*如果不是新品*/}
                {/*<div className='not-new></div>'*/}
                <a href="#">
                  <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mix3-320.png" alt="小米MIX 3" width="160"
                       height="110"/>
                </a>
                <p className="name">小米MIX3</p>
                <p className="price">3299元起</p>
              </li>
              <div className="column-line"></div>

              <li>
                {/*<div className="new"> 新品</div>*/}
                {/*如果不是新品*/}
                <div className='not-new'></div>
                <a href="#">
                  <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mix3-320.png" alt="小米MIX" width="160" height="110"/>
                </a>
                <p className="name">小米MIX3</p>
                <p className="price">3299元起</p>
              </li>
              <div className="column-line"></div>

              <li>
                {/*<div className="new"> 新品</div>*/}
                {/*如果不是新品*/}
                <div className='not-new'></div>
                <a href="#">
                  <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mix3-320.png" alt="小米MIX" width="160" height="110"/>
                </a>
                <p className="name">小米MIX3</p>
                <p className="price">3299元起</p>
              </li>
              <div className="column-line"></div>

              <li>
                {/*<div className="new"> 新品</div>*/}
                {/*如果不是新品*/}
                <div className='not-new'></div>
                <a href="#">
                  <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mix3-320.png" alt="小米MIX" width="160" height="110"/>
                </a>
                <p className="name">小米MIX3</p>
                <p className="price">3299元起</p>
              </li>
              <div className="column-line"></div>


            </ul>

          </div>
        </div>
      </div>
    );
  }
}

export default MiddleBar;
