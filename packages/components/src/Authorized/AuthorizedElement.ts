import isAuthorized from './Authorized';

export type currentUserRole = any[] | undefined;

const AuthorizedElement = ({ roles, children }: any) => {
    return isAuthorized(roles) && children;
}

export default AuthorizedElement;