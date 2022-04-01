import React, { Children } from 'react';
import { useRoutes } from 'react-router-dom';

import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Menu from './components/Slider/sidebar';

import CartList from './Pages/CartList';
import CartPayment from './Pages/CartPayment';
import CartConfirmation from './Pages/CartConfirmation';

import AboutUs from './Pages/AboutUs';
import Team from './Pages/Team';
// import Camera from './Pages/camera';
import SupportAdmin from './Pages/SupportAdmin';

import AppProvider from './provider/AppProvider';

import GlobalStyle from './Styles/global';
import { AppContainer } from './Styles/styles';

function App() {
  console.info(`==> 🌎  You are in the mode ${process.env.NODE_ENV}`);
  console.info(`==> 🌎  You are in the environment ${process.env.REACT_APP_ENVIRONMENT}`);
  // const path = window.location.pathname

  const navaBar = {
    path: '/',
    element: < Menu/>,
  }
  const aboutTeam = {
    path: '/',
    element: <AboutUs />,
    _Children: [
    ],

  }
  const teamM = {
    path: '/team',
    element: <Team/>,
  }
  // const picture = {
  //   path: '/snap',
  //   element: <Camera />,
  // }

  const mainRoutes = {
    path: '/',
    element: <Home/>
  };

  const cartRoutes = {
    path: 'cart/*',
    element: <Cart />,
    children: [
      { path: '*', element: <CartList /> },
      { path: 'payment', element: <CartPayment /> },
      { path: 'confirmation', element: <CartConfirmation /> }
    ]
  };
  const navigations = useRoutes([navaBar, teamM]);
  // const TeamMeat = useRoutes([teamM])
  const aboutUs = useRoutes([aboutTeam])
  const routing = useRoutes([mainRoutes, cartRoutes]);

  return (
    <AppContainer>
      <AppProvider>
        {navigations}
        {routing}
        {aboutUs}
        {/* {TeamMeat} */}
        {/* { path.indexOf('/support') === -1 ? <Home /> : <SupportAdmin /> } */}
        <GlobalStyle />
      </AppProvider>
    </AppContainer>
  );
}

export default App;
