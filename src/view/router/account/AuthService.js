

export const login = async (username, password) => {
		localStorage.setItem('user', username);
	return true;
};

export const isAuthenticated = () => {
	const user = localStorage.getItem('user');
	if (!user) {
		return {}
	}
	return user;
};