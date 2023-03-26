import { createContext, useState } from "react";

export const UserContext = createContext();

export default UserProvider = ({ children }) => {
	const [isSignedIn, setIsSignedIn] = useState(false);

	return (
		<UserContext.Provider value={{ isSignedIn, setIsSignedIn }}>
			{children}
		</UserContext.Provider>
	);
};
