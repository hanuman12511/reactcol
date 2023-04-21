import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../screen/Home';
import Login from './account/Login';
import Dashboard from '../screen/Dashboard';


export default function  Router1 () {
	return (
		<Routes>
			<Route path='/' element={<Login/>} />
			<Route path='/home' element={<Home/>} /> 
			<Route path='/admin' element={<Dashboard/>} /> 
		</Routes>
	);
};

