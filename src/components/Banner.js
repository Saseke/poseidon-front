import React, {Component} from 'react';
import '../styles/Banner.css';

class Banner extends Component {
  render() {
    return (
      <div className="long-img">
        <a href='/'>
          <img src="https://i1.mifile.cn/a4/xmad_15408661432025_tiVWv.jpg" width="100%" height="100%" alt=""/>
        </a>
      </div>
    );
  }
}

export default Banner;