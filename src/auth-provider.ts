import {apiUrl} from "./dicts";
import {User} from './interface/TypeUser';

const localStorageKey = '__auth_provider_token__';

const getToken = () => window.localStorage.getItem(localStorageKey);

const handleUserResponse = ({user}: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || '');
  return user;
}

const Login = (data: {username: string; password: string;}) => {
    return fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(async (res)=> {
        if (res.ok) {
            return handleUserResponse(await res.json())
        } else {
            return Promise.reject(data)
        }
    });
}

const Register = (data: any) => {
    return fetch(`${apiUrl}/resgister`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(async (res)=> {
        if (res.ok) {
            return handleUserResponse(await res.json())
        }
    });
}

const Logout = async () => window.localStorage.removeItem(localStorageKey);

export {
    getToken,
    Login,
    Register,
    Logout,
}
