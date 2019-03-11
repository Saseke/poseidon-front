import React, {Component} from 'react';
import '../styles/middlebar.css';
import {fetchNavCategoriesWithItems} from '../action/CategoryAction';
import $ from 'jquery';
import {ItemCartModel} from '../model/ItemCatModel';
import {ItemModel} from '../model/ItemModel';
import search from '../img/search.png';

class MiddleBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesDto: ItemCartModel,
      items: [ItemModel],
      fetching: true
    };
  }

  async componentDidMount() {
    const categoryDtoData = await fetchNavCategoriesWithItems(10, 6);
    this.setState({
      categoriesDto: categoryDtoData,
      fetching: false
    });

    const List = $('#middle-nav-list');

    $('#list3>.item-list').hover(function () {
      List.css('display', 'block');
    }, function () {
      List.css('display', 'none');
      List.hover(function () {
        List.css('display', 'block');
      }, function () {
        List.css('display', 'none');
      });
    });

    $('#search').focus(function () {
      $('#serch-item').css('display', 'block');
      $('#search').css({
        'color': '#333333',
        'outline': 'none',
        'border': '1px darkorange solid'
      });
      $('#serch-icon').css('border-color', 'darkorange');
    });

    $('#search').blur(function () {
      setTimeout(function () {
        $('#serch-item').css('display', 'none');
        $('#search').css('border-color', '#c9c9c9');
        $('#serch-icon').css('border-color', '#c9c9c9');
      }, 500);

    });


  }


  handleChange = (index) => (event) => {
    const {categoriesDto} = this.state;
    let items = categoriesDto[index].items;
    this.setState({
      items
    });
  };


  render() {
    const {categoriesDto, items, fetching} = this.state;
    if (fetching) {
      return null;
    }
    return (
      <div style={{backgroundColor: '#fafafa'}}>
        <div className="site-middlebar">
          <a href="/"><img className="logo-icon" src="https://s01.mifile.cn/i/logo-footer.png?v2" alt=''/></a>
          <div id="middle-nav">
            <ul id='list3'>
              {
                categoriesDto.map((categoryData, index) => (
                  <li onMouseEnter={this.handleChange(index)} key={index} className="item-list">
                    <a href='/'>{categoryData.name}</a></li>
                ))
              }
            </ul>
            <div className="search-box">
              <input type="text" defaultValue="" id="search"/>
              <div className="serch-item" id="serch-item">
                <a href="/"><p className="name">小米6X</p><p className="count">还剩6件</p></a>
                <a href="/"><p className="name">小米6X</p><p className="count">还剩6件</p></a>
                <a href="/"><p className="name">小米6X</p><p className="count">还剩6件</p></a>
                <a href="/"><p className="name">小米6X</p><p className="count">还剩6件</p></a>
                <a href="/"><p className="name">小米6X</p><p className="count">还剩6件</p></a>
                <a href="/"><p className="name">小米6X</p><p className="count">还剩6件</p></a>
                <a href="/"><p className="name">小米6X</p><p className="count">还剩6件</p></a>
                <a href="/"><p className="name">小米6X</p><p className="count">还剩6件</p></a>
              </div>
              <button className="serch-icon" id='serch-icon'>
                <img src={search} alt=""/>
              </button>
            </div>
          </div>
        </div>


        <div id="middle-nav-list">
          <div className="list-container">
            {/*最多6条数据*/}
            <ul className="main-list">

              {
                items.map((item, index) => (
                  <div key={index} className="itemBox">
                    <li>
                      <div className="new"> 新品</div>
                      {/*如果不是新品*/}
                      {/*<div className='not-new></div>'*/}
                      <a href={`/item/${item.itemId}`}>
                        <img src={item.image} alt={item.name} width="160"
                             height="110"/>
                      </a>
                      <p className="name">{item.name}</p>
                      <p className="price">{item.price}</p>
                    </li>
                  </div>
                ))
              }
            </ul>

          </div>
        </div>
      </div>
    );
  }
}

export default MiddleBar;
