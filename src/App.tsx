import {useAuth} from "./context/auth-context";
import {AuthenticatedApp} from "./components/AuthenticatedApp";
import {UnAuthenticatedApp} from "./components/UnautheticatedApp";
import styled from  './App.less';

function App() {
    const {user} = useAuth();

    return (
        <div className={styled.App}>
            {
                user ? <AuthenticatedApp /> : <UnAuthenticatedApp />
            }
        </div>
    );
}

export default App;
