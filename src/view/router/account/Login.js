import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../account/AuthService';
const Login = () => {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const history = useNavigate();

	const onChangeUsername = (e) => {
		setUsername(e.target.value);
	};

	const onChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log("login  page");
		try {
			let data=await login(username, password);
			console.log(data);
			history('/admin');
		} catch (error) {
			console.error('error', error);
		}
	};

	return (
		<>
				<form onSubmit={onSubmit}>
					<label htmlFor='username'>Username</label>
					<input
						type='text'
						name='username'
						value={username}
						onChange={onChangeUsername}
					/>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						value={password}
						onChange={onChangePassword}
					/>
					<button type='submit'>Login</button>
				</form>
		</>
	);
};

export default Login;