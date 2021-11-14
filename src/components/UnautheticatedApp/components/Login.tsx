import {FormEvent} from "react";
import {useAuth} from "../../../context/auth-context";
import {Button, Form, Input} from "antd";
import {AuthForm} from "../../../interface/TypeUser";

export const LoginApp = () => {

    const {user, LoginAPI} = useAuth();

    const handleSubmit = (values: AuthForm) => LoginAPI(values);

    return (
        <Form onFinish={handleSubmit}>
            <Form.Item name={'username'} rules={[{required: true, message: '请输入用户名'}]}>
                <Input type={'text'} placeholder={'用户名'} />
            </Form.Item>
            <Form.Item rules={[{required: true, message: '请输入密码'}]}>
                <Input type={'password'} placeholder={'密码'} />
            </Form.Item>
            <Form.Item>
                <Button htmlType={'submit'} type={'primary'}>登录</Button>
            </Form.Item>
        </Form>
    );
};

