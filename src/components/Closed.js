import React, {Component} from 'react';

class Closed extends Component{
  render() {
    return(
      <div>
        <p className="empty">当前没有已关闭订单。</p>
      </div>
    );
  }
}

export default Closed;