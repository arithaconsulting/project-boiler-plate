import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/application/store";
// import {AuthContext} from './src/Infrastructure/utils/context';
import { setLogin, getLogin } from "./src/Infrastructure/utils/storageUtility";
import AuthNavigator from "./src/Infrastructure/AuthNavigator";
import SplashComponent from "./src/Infrastructure/component/SplashScreen/SplashScreen";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(false);
  const [spalshTime, setSplashTime] = useState(true);
  // const authContext = React.useMemo(
  //   () => ({
  //     signIn: () => {
  //       setIsLoading(true);
  //       setLogin(true);
  //     },
  //     signOut: () => {
  //       setUserToken(false);
  //       setIsLoading(false);
  //       setAuthToken('');
  //       setLogin(false);
  //       setAuthTokenExpiry('');
  //       setLoginID('');
  //       setCompanyId('');
  //     },
  //   }),
  //   [],
  // );
  const checkLoginStatus = React.useMemo(async () => {
    const token = await getLogin();
    if (token) {
      setUserToken(true);
    } else {
      setUserToken(false);
    }
  }, []);
  useEffect(() => {
    checkLoginStatus;
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setSplashTime(false);
    }, 2000);
  }, []);
  if (spalshTime) {
    return (
      <NavigationContainer>
        <SplashComponent />
      </NavigationContainer>
    );
  }
  return (
    <>
      <Provider store={store}>
        {/* <AuthContext.Provider value={authContext}> */}
        <NavigationContainer>
          <AuthNavigator />
          {/* {userToken ? null : <AuthNavigator />} */}
        </NavigationContainer>
        {/* </AuthContext.Provider> */}
      </Provider>
    </>
  );
};
export default App;
