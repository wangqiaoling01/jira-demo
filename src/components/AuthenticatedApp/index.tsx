import ProjectList from "../../modules/ProjectList";
import {useAuth} from "../../context/auth-context";

const AuthenticatedApp = () => {
    const {logoutAPI} = useAuth();

    return (
          <div>
              <button onClick={logoutAPI}>登出</button>
              <ProjectList />
          </div>
    );
};

export {AuthenticatedApp};
