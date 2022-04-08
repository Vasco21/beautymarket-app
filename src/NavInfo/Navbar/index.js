import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavElement';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/contact' activeStyle>
			Contact Us
		</NavLink>
		<NavLink to='/findstore' activeStyle>
			Find Store
		</NavLink>
		{/* <NavLink to='/annual' activeStyle>
			Annual Report
		</NavLink>
		<NavLink to='/team' activeStyle>
			Teams
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			Blogs
		</NavLink> */}
		<NavLink to='/sign-up' activeStyle>
			Create Account
		</NavLink>
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
