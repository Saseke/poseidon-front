import React, { Component } from 'react';
import '../styles/widget.css';

class Widget extends Component{
    render(){
        return(
            <div className="box">
                <ul className="box-list">
                    <li><a href='/'><i></i>选购手机</a></li>
                    <li><a href='/'><i></i>企业团购</a></li>
                    <li><a href='/'><i></i>F码通道</a></li>
                    <li><a href='/'><i></i>米粉卡</a></li>
                    <li><a href='/'><i></i>以旧换新</a></li>
                    <li><a href='/'><i></i>话费充值</a></li>
                </ul>
                <ul className="box-img">
                    <li><a href='/'><img src="https://i1.mifile.cn/a4/xmad_15381015124677_QcEGp.jpg" alt="" width="100%"
                                height="100%"/></a></li>
                    <li><a href='/'><img src="https://i1.mifile.cn/a4/xmad_15410029988871_TdzPQ.jpg" alt="" width="100%"
                                height="100%"/></a></li>
                    <li><a href='/'><img src="https://i1.mifile.cn/a4/xmad_15373422669527_eTZiJ.jpg" alt="" width="100%"
                                height="100%"/></a></li>
                </ul>
                <div className="clear"> </div>
            </div>
        );
    }
}

export default Widget;