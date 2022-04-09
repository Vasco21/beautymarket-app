import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './sidebarData';
import Submenu from './subMenu';
import Signing from '../../NavInfo/Navbar'


const Div = styled.div`
h4{
    text-align: center;
    background-color: purple;
    color: white;
}

}
`
const Navs = styled.div`
p{
    background-color: gray;
    text-align: right;
    padding: 1.5rem;
    font-weight:550;
}
a{
    color: white;
    margin-top: 2rem;
    text-decoration: underline;
}
`
const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    background-color: rgba(0,0,29,0.22);


    @media (max-width: 350px){
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    background-color: rgba(0,0,29,0.22);
    }
`;
const SidebarNav = styled.div<{ sidebar: boolean }>`
    width: 250px;
    height: 100vh;
    background-color: white;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;

    @media (max-width: 350px){
    width: 200px;
    height: 60vh;
    background-color: rgba(0,0,29,0.22);
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    }
    @media (max-width: 850px){
        width: 200px;
        height: 60vh;
        background-color: white;
        position: fixed;
        top: 0;
        left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
        transition: 350ms;
        }
`;

const NavIcon = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    font-size: 2rem;
    margin-left: 2rem;

    @media (max-width: 350px){
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 6rem;
    font-size: 2rem;
    margin-left: 2rem;
    }
    
    @media (max-width: 850px){
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 6rem;
    font-size: 2rem;
    margin-left: 2rem;
    }
`;

const SidebarWrap = styled.div``;

const Sidebar: FC = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <Div>
        <h4 className="top">Please note: While our Salon are currently open,
         you can enjoy a safe shopping experience without leaving your space,
          when you shop online today.</h4>
        </Div>
        <Navs>
        <p>
        <a href="#">See all offers</a>
        </p>
        </Navs>
        <Signing/>
        <IconContext.Provider value={{ color: 'black' }}>
            <Nav>
                <NavIcon to="#" onClick={showSidebar}>
                    <AiOutlineMenu />
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to="#" onClick={showSidebar}>
                        <AiOutlineClose />
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                        return <Submenu item={item} key={index} />;
                    })}
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
        
        </>
    );
};

export default Sidebar;