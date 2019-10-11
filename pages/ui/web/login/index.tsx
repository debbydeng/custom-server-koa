import {Form, Input, Button, Icon, message} from 'antd';
import * as React from "react";
import {Axios} from "../../../services/axios";
import {User} from "../../../common/beans/user";
import {Router} from '../../../../pageRoutes/home'
class App extends React.Component<any,any> {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                Axios.post({
                    url:'/mate-basic/login',
                    data:values
                }).then(res=>{
                    if(res.code){
                        const response=res.data;
                        User.user = {
                            chineseName: response.chineseName,
                            englishName:response.englishName,
                            userName: response.username,
                            userId:response.userId,
                            currentCenterId: response.primaryCenterId,
                            currentCenterName:response.primaryCenterName,
                            centerCode: response.primaryCenterCode,
                            // C_HQ001 总部中心
                            isHQ: response.primaryCenterId === 'C_HQ001',
                            token:response.token,
                        };
                        Router.pushRoute('/home');
                    }else{
                        message.error(res.msg)
                    }
                })
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </Form.Item>

                <Form.Item
                    wrapperCol={{ span: 12, offset: 5 }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}
const Login = Form.create({})(App);


export default Login;
