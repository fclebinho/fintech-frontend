import { useKeycloak } from '@react-keycloak/web';

const Authorized = (roles: string[]): boolean => {
  const { keycloak } = useKeycloak();

  const isAutherized = (): boolean => {
    if (keycloak && roles) {
      return roles.some(r => {
        const realm = keycloak.hasRealmRole(r);
        const resource = keycloak.hasResourceRole(r);
        return realm || resource;
      });
    }
    return false;
  };

  return isAutherized();
};

export default Authorized;
