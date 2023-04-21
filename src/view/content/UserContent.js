import React, { useState, useEffect, createContext } from 'react';
import { isAuthenticated } from '../router/account/AuthService';

import Home from '../screen/Home';
const UserContext = createContext();
export const UserProvider = ({ children }) => {
	const [ currentUser, setCurrentUser ] = useState(undefined);
	useEffect(() => {
		const checkLoggedIn = async () => {
			let cuser = isAuthenticated();
			if (cuser === null) {
				localStorage.setItem('user', '');
				cuser = '';
			}
			setCurrentUser(cuser);
		};
		checkLoggedIn();
	}, []);

	return (
		<UserContext.Provider value={[currentUser, setCurrentUser]}>
			{ currentUser ? children : <Home />}
		</UserContext.Provider>
	);
};


export default UserContext;