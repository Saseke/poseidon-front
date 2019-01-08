import React, {Component} from 'react';
import '../styles/footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="site-footer">
                    <div className="site-footer-container">
                        <div className="footer-service">
                            <ul className="list-service">
                                <li><a href="">预约维修服务</a></li>
                                <li><a href="">7天无理由退货</a></li>
                                <li><a href="">15天免费换货</a></li>
                                <li><a href="">满150元包邮</a></li>
                                <li><a href="">520余家售后网点</a></li>
                                <div className="clear"></div>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <dl>
                                <dt>帮助中心</dt>
                                <dd><a href="">账户管理</a></dd>
                                <dd><a href="">购物指南</a></dd>
                                <dd><a href="">订单操作</a></dd>
                            </dl>
                            <dl>
                                <dt>服务支持</dt>
                                <dd><a href="">售后政策</a></dd>
                                <dd><a href="">自助服务</a></dd>
                                <dd><a href="">相关下载</a></dd>
                            </dl>
                            <dl>
                                <dt>线下门店</dt>
                                <dd><a href="">小米之家</a></dd>
                                <dd><a href="">服务网店</a></dd>
                                <dd><a href="">授权体验店</a></dd>
                            </dl>
                            <dl>
                                <dt>关于小米</dt>
                                <dd><a href="">了解小米</a></dd>
                                <dd><a href="">加入小米</a></dd>
                                <dd><a href="">投资者关系</a></dd>
                            </dl>
                            <dl>
                                <dt>关注我们</dt>
                                <dd><a href="">新浪微博</a></dd>
                                <dd><a href="">官方微信</a></dd>
                                <dd><a href="">联系我们</a></dd>
                            </dl>
                            <dl>
                                <dt>特色服务</dt>
                                <dd><a href="">F码通道</a></dd>
                                <dd><a href="">礼物码</a></dd>
                                <dd><a href="">防伪查询</a></dd>
                            </dl>
                            <div className="col-contact">
                                <p className="footer-phone">400-100-5678</p>
                                <p> 周一至周日 8:00-18:00</p>
                                <p>（仅收市话费）</p>
                                <a href=""> 联系客服</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-info">
                    <div className="info-container">
                        <div><img src="https://s01.mifile.cn/i/logo-footer.png?v2" alt=""/></div>
                        <div className="info-text">
                            <p className="sites">
                                <a href="">小米商城</a><span className="sep">|</span><a href="">MIUI</a><span
                                className="sep">|</span><a href="">米家</a><span className="sep">|</span><a
                                href="">米聊</a><span className="sep">|</span><a href="">多看</a><span
                                className="sep">|</span><a
                                href="">游戏</a><span className="sep">|</span><a href="">路由器</a><span
                                className="sep">|</span><a
                                href="">米粉卡</a><span className="sep">|</span><a href="">政企服务</a><span
                                className="sep">|</span><a href="">小米天猫店</a><span className="sep">|</span><a
                                href="">隐私政策</a><span className="sep">|</span><a href="">问题反馈</a><span
                                className="sep">|</span><a href="">廉正举报</a><span className="sep">|</span><a href="">Select
                                Region</a>
                            </p>
                            <p>© mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2017]1530-131号</p>
                            <p>（京）网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京) -非经营性-2014-0090 营业执照 医疗器械公告</p>
                            <p>违法和不良信息举报电话：185-0130-1238，本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</p>
                        </div>
                        <div className="info-links">
                            <a href=""><img src="http://i1.mifile.cn/f/i/17/site/truste.png" alt=""/></a>
                            <a href=""><img src="http://s01.mifile.cn/i/v-logo-2.png" alt=""/></a>
                            <a href=""><img src="http://s01.mifile.cn/i/v-logo-1.png" alt=""/></a>
                            <a href=""><img src="http://s01.mifile.cn/i/v-logo-3.png" alt=""/></a>
                            <a href=""><img
                                src="http://i8.mifile.cn/b2c-mimall-media/ba10428a4f9495ac310fd0b5e0cf8370.png" alt=""/></a>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="slogan">探索黑科技，小米为发烧而生</div>
                </div>
            </div>
        )
    }
}

export default Footer;

