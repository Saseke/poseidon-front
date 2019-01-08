import React, { Component } from 'react';
import '../styles/middlebar.css';

class MiddleBar extends Component{
    render(){
        return(
            <div className="site-middlebar">
                <a href=""><img className="logo-icon" src="https://s01.mifile.cn/i/logo-footer.png?v2"/></a>
                <div id="middle-nav">
                    <ul>
                        <li><a>小米手机</a></li>
                        <li><a>红米</a></li>
                        <li><a>电视</a></li>
                        <li><a>笔记本</a></li>
                        <li><a>空调</a></li>
                        <li><a>新品</a></li>
                        <li><a>路由器</a></li>
                        <li><a>只能硬件</a></li>
                        <li><a>服务</a></li>
                        <li><a>社区</a></li>
                    </ul>
                    <div className="search-box">
                        <input type="text" value="" id="search"/>
                        <button className="search-icon"> </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MiddleBar;