import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../screens/Login";
import RegisterScreen from "../screens/RegisterScreen";

const screens = {
	Login: {
		screen: Login,
	},
	Register: {
		screen: RegisterScreen,
	},
};

const LoginStack = createStackNavigator(screens);
export default createAppContainer(LoginStack);
