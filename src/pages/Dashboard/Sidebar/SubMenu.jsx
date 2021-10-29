import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

export const DropdownLink = styled(Link)`
    background: #1f2431df;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover{
        color: #ff5757;
        background: #252831;
        cursor: pointer;
    }
`

const DropdownLink2 = styled(Link)`
    background: #252c3fdf;
    height: 60px;
    padding-left: 4.5rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover{
        color: #ff5757;
        background: #252831;
        cursor: pointer;
    }
`



export const SubMenu = ({ item }) => {

    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);



    const [subnav2, setSubnav2] = useState(false);
    const showSubnav2 = () => setSubnav2(!subnav2);


    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </SidebarLink>



            {
                subnav && item.subNav.map((item, index) => {
                    return (
                        <>

                            <DropdownLink to={item.path} key={index} onClick={item.subNav && showSubnav2}>
                                <div>
                                    {item.icon}
                                    <SidebarLabel>{item.title}</SidebarLabel>
                                </div>
                                <div>
                                    {item.subNav && subnav
                                        ? item.iconOpened
                                        : item.subNav
                                            ? item.iconClosed
                                            : null}
                                </div>
                            </DropdownLink>

                            <div>
                                {item.subNav &&

                                    subnav2 && item.subNav.map((submenu, index) => {
                                        return (
                                            <DropdownLink2 to={submenu.path} key={index} >
                                                {submenu.icon}
                                                <SidebarLabel>{submenu.title}</SidebarLabel>
                                            </DropdownLink2>
                                        )
                                    })

                                }
                            </div>

                        </>
                    )
                })

            }





            {/* {
                subnav && item.subNav.map((item2, index) => {
                    if (item2.subNav) {
                        return subnav2 && item2.subNav.map((submenu, index) => {
                            return (
                                <DropdownLink2 to={submenu.path} key={index} >
                                    {submenu.icon}
                                    <SidebarLabel>{submenu.title}</SidebarLabel>
                                    {console.log(submenu.title)}
                                </DropdownLink2>
                            )
                        })
                    }

                })
            } */}


            {/* {subnav && iem.subNav.map((item, index) => {

                return (
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })
            } */}

        </>
    )
}