interface User {
    id: string;
    name: string;
    token: string;
    email: string;
    organization: string;
    title: string;
}
interface AuthForm {
    username: string;
    password: string;
}
export type {
    User,
    AuthForm,
}
