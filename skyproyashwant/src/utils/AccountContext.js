const { createContext } = require("react");

const AccountContext = createContext({
  login: false,
  setLogin: () => {},
  userData: null,
  setUserData: () => {},
});

export default AccountContext;
