import React, {Component} from 'react';
import MiddleBar from './MiddleBar';
import Footer from '../containers/Footer';
import TopBar from '../containers/TopBar';
import '../styles/category.css';
import {fetchPanelByCatIds, fetchPanelWithItemsByPanelId} from '../action/PanelAction';
import Carousels from '../containers/Carousels';

class Category extends Component {


  constructor(props) {
    super(props);
    this.state = {
      panels: null,
      fetching: true
    };
  }

  async componentDidMount() {
    let type = this.props.match.params.type;
    let panelsData;
    if (type === 'cat') {
      let catId1 = this.props.match.params.id1;
      let catId2 = this.props.match.params.id2;
      panelsData = await fetchPanelByCatIds(catId1, catId2, 7);
    } else if (type === 'panel') {
      let panelId = this.props.match.params.id1;
      panelsData = await fetchPanelWithItemsByPanelId(panelId);
      panelsData = [panelsData];
    }

    this.setState({
      panels: panelsData,
      fetching: false
    });
    console.log(this.state.panels);
  }


  render() {

    const {panels, fetching} = this.state;
    if (fetching) {
      return null;
    }
    return (
      <div>
        <TopBar/>
        <MiddleBar/>
        <div className="detail-carousel">
          <Carousels/>
        </div>
        <div>
          {
            panels.map((panel, index) => (
              <div key={index}>
                <div className="channel-title">
                  <h2>{panel.name}</h2>
                </div>
                <div className="items">
                  {
                    panel.itemDtoList.map((item, point) => (
                      point === 0
                        ?
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
                                <a href="">{item.name}</a>
                              </h3>
                              <p className="con-desc">{item.sellPoint}</p>
                              <p className="con-price">
                                <strong>{item.price}</strong>元起
                              </p>
                              <p className="con-link">
                                <a href="">{'了解产品 >'}</a>
                              </p>
                            </div>
                          </div>
                        </div>
                        :
                        <div className="product-item">
                          <div className="product-figure">
                            <a href={'/item/' + item.itemId}>
                              <img
                                src="https://i8.mifile.cn/b2c-mimall-media/24b7f3c26569ea91b68551f32109dcb1.jpg"
                                alt=""/>
                            </a>
                          </div>
                          <h3><a href={'/item/' + item.itemId}>{item.name}</a></h3>
                          <p className="one-desc">{item.sellPoint}</p>
                          <p className="one-price"><strong>{item.price}</strong>元起 <del>{item.price + 100}元</del></p>
                        </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Category;
