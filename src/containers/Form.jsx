import React, {Component} from 'react';
import '../styles/checkOrder.css';

import axios from 'axios';
import Mock from 'mockjs';
import moment from 'moment';

import address from '../request/address.json';
import CollectionCreateForm from './CustomizedForm';

const options = [];
Mock.mock('/address', address);

export default class UForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            address: '',
            timeRange: '',
            visible: false, //新建窗口隐藏
            dataSource: [],
            selectedRowKeys: [],
            tableRowKey: 0,
            loading: true,
        };
    }


    //渲染
    componentDidMount() {
        axios.get('/address')
            .then(function (response) {
                response.data.map(function (province) {
                    options.push({
                        value: province.name,
                        label: province.name,
                        children: province.city.map(function (city) {
                            return {
                                value: city.name,
                                label: city.name,
                                children: city.area.map(function (area) {
                                    return {
                                        value: area,
                                        label: area,
                                    }
                                })
                            }
                        }),
                    })
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //新建信息弹窗
    CreateItem = () => {
        this.setState({
            visible: true,
        });
        const form = this.form;
        form.resetFields();
    };
    //接受新建表单数据
    saveFormRef = (form) => {
        this.form = form;
    };
    //填充表格行
    handleCreate = () => {
        const {dataSource, count} = this.state;
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            console.log('Received values of form: ', values);

            values.address = values.address.join(" / ");
            values.createtime = moment().format("YYYY-MM-DD hh:mm:ss");

            form.resetFields();
            this.setState({
                visible: false,
                dataSource: [...dataSource, values],
            });
        });
    };
    //取消
    handleCancel = () => {
        this.setState({visible: false});
    };

    render() {
        const {visible} = this.state;
        return (
            <div>
                <div className="section-address" onClick={this.CreateItem}>
                    <div className="section-header">
                        <h3 className="title">收货地址</h3>
                    </div>
                    <div className="address-body">
                        <div className="address-item">
                            <p className="iconfont">+</p>
                            添加新地址
                        </div>
                    </div>
                </div>
                <CollectionCreateForm ref={this.saveFormRef} visible={visible} onCancel={this.handleCancel}
                                        onCreate={this.handleCreate} title="新建信息" okText="创建"/>
            </div>
        )
    }
}