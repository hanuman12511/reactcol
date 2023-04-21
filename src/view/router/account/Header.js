import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../UserContent';
import {menubar} from '../../data/data'
const Header = () => {
	const [ currentUser, setCurrentUser ] = useContext(UserContext);
	const history = useNavigate();

	const handleLogOut = () => {
		localStorage.removeItem('user');
		setCurrentUser({});
		history('/');
	};

	return (
		<>
		<header>
		<nav>
        <div className='menu-div'>
        <ul>
          <Link to="/" className='Link'><li>Home</li></Link>
          {
            menubar.map(d=>(
            <Link to={`/${d}`} className='Link'><li>{d}</li></Link>
            ))
          }
        </ul>
        </div>
		<button type='button' onClick={handleLogOut}>
				Log out
		</button>
		</nav>
		</header>
		</>
	);
};

export default Header;