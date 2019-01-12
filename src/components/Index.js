import React, {Component} from 'react';
import MiddleBar from '../containers/MiddleBar';
import Carousels from '../containers/Carousels';
import Widget from '../containers/Widget';
import Banner from '../containers/Banner';
import TopBar from '../containers/TopBar';
import Footer from '../containers/Footer';
import '../styles/contain.css';
import '../styles/indexContent.css';
import {fetchCategory, fetchPanelByRemark} from '../action/CategoryAction';
import {Link} from 'react-router-dom';
import '../styles/panel.css';

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: {},
      panels: {},
      fetching: true
    };
  }

  async componentDidMount() {
    const categoriesData = await fetchCategory(20);
    const panelsData = await fetchPanelByRemark('index');
    this.setState({
      categories: categoriesData,
      panels: panelsData,
      fetching: false
    });
  }

  render() {
    const {categories, panels, fetching} = this.state;
    if (fetching) {
      return (
        <div>

        </div>
      );
    }
    return (
      <div>
        <TopBar/>
        <MiddleBar/>
        <div id="main">
          <div id="main-img">
            <div className="site-left">
              <ul className="site-left-menu">

                {
                  categories.map((categoriesArr, index) => (
                    <li key={index}>
                      <Link to={`/cat/${categoriesArr[1].itemCatId}`}>
                        <p>
                          {categoriesArr.map((category, j) => (
                            <span key={j}>{category.name + ' '}</span>
                          ))}
                        </p>
                        <i className="menu-icon">{'>'}</i>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            <Carousels/>
          </div>
        </div>
        <Widget/>
        {
          panels.map((panel, index) => (
            <div key={index} className="home-main">
              <div className="home-main-container">
                <div className="item" id="item">
                  <div className="home-hd">
                    <h2>{panel.name}</h2>
                    <div className="more-item">
                      <Link to="/type">查看全部</Link>
                    </div>
                  </div>
                  <div className="item-main-list">
                    <div className="item-first">
                      <Link to="/detail">
                        <img src="https://i1.mifile.cn/a4/xmad_15407792204208_jtrJc.jpg" width="100%"
                             height="100%" alt=""/>
                      </Link>
                    </div>
                    <div className="item-second">
                      <ul>
                        {
                          panel.itemDtoList.map((item, j) => (
                            <li key={j}>
                              {
                                item.remark === '新品' ? <div className="flag-new">新品</div> : null
                              }
                              <img src={item.image} width="160px" height="160px" alt=""/>
                              <h3><a>{item.name} 4GB+64GB</a></h3>
                              <p className="item-desc">{item.sellPoint}</p>
                              <p className="item-price">
                                <span className="item-num">{item.price}</span>元
                              </p>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <Banner/>
            </div>
          ))
        }
        <Footer/>
      </div>
    );
  }
}

export default Index;