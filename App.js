import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/application/store";
import { AuthContext } from "./src/Infrastructure/utils/context";
import SplashComponent from "./src/Infrastructure/component/SplashScreen/SplashScreen";
import AuthNavigator from "./src/Infrastructure/navigation/AuthNavigator";
import DrawerNavigator from "./src/Infrastructure/navigation/DrawerNavigator";
const App = () => {
  const [userToken, setUserToken] = useState(false);
  const [spalshTime, setSplashTime] = useState(true);
  const authContext = React.useMemo(
    () => ({
      signIn: () => {
        setUserToken(true);
      },
      signOut: () => {
        setUserToken(false);
      },
    }),
    [],
  );

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
        <AuthContext.Provider value={authContext}>
          <NavigationContainer>
            {userToken ? <DrawerNavigator /> : <AuthNavigator />}
          </NavigationContainer>
        </AuthContext.Provider>
      </Provider>
    </>
  );
};
export default App;
