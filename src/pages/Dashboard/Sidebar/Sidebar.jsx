import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SideBarData } from './SideBarData'
import { SubMenu } from './SubMenu'
import { useAuth } from '../../../hooks/useAuth'
import Logo from '../../../assets/icons/LogoEt01.png'


const Body = styled.body`
    background: #dfdfdf;
`

export const Container = styled.div`
     width: 100vw;
    height: 100vh;
    background: ${({ sidebar }) => (sidebar ? '#000000b3' : '')}; 
    transition: 350ms;
    z-index: 10;
`

const Nav = styled.div`
    background: #15171c;
    height: 130px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 1;
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 0;
`

const NavLogo = styled(Link)`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    list-style: none;

    left: ${({ sidebar }) => (sidebar ? '250px' : '100px')};
    transition: 350ms;
    flex-grow: 1;

    @media(max-width: 480px) {      
        display: none;      
    }
`
const NavImg = styled.img`
        width: 115px;
        height: 115px;
        

        @media(max-width: 480px) {      
            width: 80px;
            height: 80px;       
        }

`

const NavH1 = styled.h1`   
        color: #fff;
        font-size: 1.7rem;

        &:hover {
            color: #ff5757;
        }

        @media(max-width: 550px) {      
            font-size: 1.2rem ;
        }
        @media(max-width: 380px) {      
            font-size: 1rem;
        }
`

const NavUser = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 2rem;

    flex-grow: 10;

    @media(max-width: 480px) {      
        display: none;      
    }
`

const NavNome = styled.h1`
    margin-left: 20px;
    font-size: 1.4rem;

    &:hover {
            color: #ff5757;
        }

    @media(max-width: 550px) {      
        font-size: 1.2rem;
        margin-left: 0;
    }
    @media(max-width: 380px) {      
        font-size: 1rem;
    }
`
const SidebarNav = styled.div`
    background: #15171c;
    width: 250px;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
    

    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll; 

    &::-webkit-scrollbar{
        display: none;
    }

    @media(min-width: 768px){
        height:100vh;
    }

    @media(max-width: 550px) {      
        width: 100vw;

        top: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
        left: 0
    }
`

const SidebarWrap = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -17px; /* Increase/Decrease this value for cross-browser compatibility */
`

const NavMobile = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;    
`

const NavLogoMobile = styled.div`
    display: none;

    @media(max-width: 480px) { 
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        list-style: none;
        margin-right: 2rem;
    }
`

const NavUserMobile = styled.div`
    
    display: none;

    @media(max-width: 480px) { 
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 2rem; 
        margin-right: 12px;
        
        .navIcon{
            font-size: 25px;
        }
    }

`

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding:20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        color: #ff5757;
        background: #252831;
        border-left: 4px solid #ff5757;
        cursor: pointer;
    }
`
const SidebarLabel = styled.span`
    margin-left: 16px;
`

const Table = styled.div`
    
    display: flex;
    color: #000;
    flex-direction: column;
    /* justify-content: center; */
    align-items: flex-start;
    background-color:#fff;
    width: 600px;
    /* height: 400px; */
    margin-left: 20%;
    margin-top: 2%;
    border-radius: 15px;


    & h1{
        font-size: 28px;
    }
`



export const Sidebar = () => {

    const [sidebar, setSideBar] = useState(false);
    const { user } = useAuth();

    const menuRef = useRef();


    useEffect(() => {
        const handler = (event) => {
            if (!menuRef.current.contains(event.target)) {
                setSideBar(false);
            }
        };

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        };
    });

    useEffect(() => {
        const sidebarData = localStorage.getItem('sidebar');

        if (sidebarData) {
            setSideBar(JSON.parse(sidebarData))
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('sidebar', JSON.stringify(sidebar))
    });

    const showSideBar = () => setSideBar(!sidebar);
    return (
        <Body>
            <Nav>
                <NavIcon to='#'>
                    <FaIcons.FaBars onClick={showSideBar} color="#ff5757" />
                </NavIcon>
                <NavLogo sidebar={sidebar} to='#'>
                    <NavImg src={Logo} />
                    <NavH1>PlatPizza</NavH1>
                </NavLogo>
                <NavUser>
                    <AiIcons.AiOutlineUser className="navIcon" color="#ff5757" font-size="40px" />
                    <NavNome>{user.nome}</NavNome>
                </NavUser>
            </Nav>

            <SidebarNav sidebar={sidebar} ref={menuRef} >
                <SidebarWrap>
                    <NavIcon to='#'>
                        <AiIcons.AiOutlineClose onClick={showSideBar} color="#ff5757" />
                    </NavIcon>
                    <NavMobile>
                        <NavLogoMobile to='#'>
                            <NavImg src={Logo} />
                            <NavH1>PlatPizza</NavH1>
                        </NavLogoMobile>
                        <NavUserMobile>
                            <AiIcons.AiOutlineUser className="navIcon" color="#ff5757" font-size="50px" />
                            <NavNome> Nome Usuario</NavNome>
                        </NavUserMobile>
                    </NavMobile>
                    {SideBarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                </SidebarWrap>
            </SidebarNav>
            <Container sidebar={sidebar}>



            </Container>
        </Body>
    )
}

