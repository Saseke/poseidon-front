import React, {Component} from 'react';

class Unreceived extends Component{
  render() {
    return (
      <div>
        <p className="empty">当前没有待收货订单。</p>
      </div>
    );
  }
}

export default Unreceived;