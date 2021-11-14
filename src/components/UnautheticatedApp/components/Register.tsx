import {useAuth} from "../../../context/auth-context";
import {Button, Form, Input} from "antd";
import {AuthForm} from "../../../interface/TypeUser";

export const RegisterApp = () => {

    const {RegisterAPI} = useAuth();

    const handleSubmit = (values: AuthForm) => RegisterAPI(values);

    return (
        <Form onFinish={handleSubmit}>
            <Form.Item name={'username'} rules={[{required: true, message: '请输入用户名'}]}>
                <Input type={'text'} placeholder={'用户名'} />
            </Form.Item>
            <Form.Item rules={[{required: true, message: '请输入密码'}]}>
                <Input type={'password'} placeholder={'密码'} />
            </Form.Item>
            <Form.Item>
                <Button htmlType={'submit'} type={'primary'}>注册</Button>
            </Form.Item>
        </Form>
    );
}
