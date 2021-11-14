import {useState} from "react";
import {RegisterApp, LoginApp} from "./components";
import {Card, Divider} from "antd";
import styled from './index.less';

const UnAuthenticatedApp = () => {
    const [isRegister, setisRegister] = useState(false);

    return (
        <div className={styled.UnAuthenticatedAppContainer}>
            <Card>
                {isRegister ? <RegisterApp /> : <LoginApp />}
                <Divider />
                <a onClick={() => setisRegister(!isRegister)}>{isRegister ? '已经有账号了？直接登录' : '没有账号？注册新账号'}</a>
            </Card>

        </div>
    )
}

export {
    UnAuthenticatedApp
}
