import React, {Component} from 'react';

import 'antd/dist/antd.css';

import MiddleBar from '../components/MiddleBar';
import Carousels from '../components/Carousels';
import Widget from '../components/Widget';
import Banner from '../components/Banner';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import {fetchRootCategoriesWithItems} from '../action/CategoryAction';
import {fetchPanelByRemark} from '../action/PanelAction';
import '../styles/contain.css';
import '../styles/indexContent.css';
import '../styles/panel.css';

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: {},
      items: [],
      panels: {},
      fetching: true
    };
  }

  handleChange = index => event => {
    const data = this.state.categories[index];
    const LeftMenu = $('#site-left-menu-list');
    let items = [...data[0].items, ...data[1].items];
    console.log(items);
    this.setState({
      items: items
    });
    // what are you put code there
    let width = Math.ceil(items.length / 6) * 248;
    if (width <= 992) {
      LeftMenu.css({
        'width': width + 'px',
        'box-shadow': '0 0 5px rgba(0, 0, 0, 0.36)'
      });
    } else {
      LeftMenu.css({
        'width': '992px',
        'overflow': 'hidden',
        'box-shadow': ' 0 3px 10px rgba(0, 0, 0, 0.36)'
      });
    }
  };

  async componentDidMount() {
    const categoriesData = await fetchRootCategoriesWithItems(20, 12);
    const panelsData = await fetchPanelByRemark('index', 2, 8);
    this.setState({
      categories: categoriesData,
      panels: panelsData,
      fetching: false
    });


    const LeftMenu = $('#site-left-menu-list');

    $('#site-left-menu > li').hover(function () {
      LeftMenu.css('display', 'block');
    }, function () {
      LeftMenu.css('display', 'none');
      LeftMenu.hover(function () {
        LeftMenu.css('display', 'block');
      }, function () {
        LeftMenu.css('display', 'none');
      });
    });
  }


  render() {
    const {categories, panels, items, fetching} = this.state;
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
              <ul className="site-left-menu" id="site-left-menu">

                {
                  categories.map((categoriesArr, index) => (
                    <li key={index} onMouseEnter={this.handleChange(index)}>
                      <Link to={`/form/cat/${categoriesArr[0].itemCatId}/${categoriesArr[1].itemCatId}`}>
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
              <div id="site-left-menu-list">
                <ul>
                  {
                    items.map((item, index) => (
                      <li key={index}>
                        <a href={`/item/${item.itemId}`}>
                          <img className="thumb" src={item.image} alt=""/>
                          <span className="text">{item.name}</span>
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </div>
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
                      <Link to={`/form/panel/${panel.panelId}`}>查看全部</Link>
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
                              <a href={`/item/${item.itemId}`}>
                                <img src={item.image} width="160px" height="160px" alt=""/>
                                <h3>{item.name} 4GB+64GB</h3>
                                <p className="item-desc">{item.sellPoint}</p>
                                <p className="item-price">
                                  <span className="item-num">{item.price}</span>元
                                </p>
                              </a>
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