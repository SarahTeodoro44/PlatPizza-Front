import React from "react";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SideBarData = [
    {
        title: 'Início',
        path: '/dashboard/inicio',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'Pedidos',
        path: '/dashboard/inicio',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                id: "1",
                title: 'Cozinheiro',
                path: '/dashboard/inicio',
                icon: <IoIcons.IoIosPaper />,
                iconClosed: <RiIcons.RiArrowDownSFill />,
                iconOpened: <RiIcons.RiArrowUpSFill />,
                subNav: [
                    {
                        title: 'Cadastrar',
                        path: '/dashboard/inicio',
                        icon: <AiIcons.AiFillHome />,
                        iconClosed: <RiIcons.RiArrowDownSFill />,
                        iconOpened: <RiIcons.RiArrowUpSFill />,
                    },

                    {
                        title: 'Gerenciar',
                        path: '/dashboard/inicio',
                        icon: <AiIcons.AiFillHome />,
                        iconClosed: <RiIcons.RiArrowDownSFill />,
                        iconOpened: <RiIcons.RiArrowUpSFill />,
                    }
                ]
            },
            {
                title: 'Atendente',
                path: '/dashboard/inicio',
                icon: <AiIcons.AiFillHome />,
                iconClosed: <RiIcons.RiArrowDownSFill />,
                iconOpened: <RiIcons.RiArrowUpSFill />,
                subNav: [
                    {
                        title: 'Para realizar',
                        path: '/dashboard/inicio',
                        icon: <AiIcons.AiFillHome />,
                        iconClosed: <RiIcons.RiArrowDownSFill />,
                        iconOpened: <RiIcons.RiArrowUpSFill />,
                    },
                    {
                        title: 'Realizados',
                        path: '/dashboard/inicio',
                        icon: <AiIcons.AiFillHome />,
                        iconClosed: <RiIcons.RiArrowDownSFill />,
                        iconOpened: <RiIcons.RiArrowUpSFill />,
                    }
                ]
            }
        ]
    },
    {
        title: 'Usuários',
        path: '/dashboard/inicio',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Cadastrar',
                path: '/dashboard/usuarios/cadastrar',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Gerenciar',
                path: '/dashboard/usuarios/gerenciar',
                icon: <AiIcons.AiFillHome />,
            }
        ]
    },
    {
        title: 'Estoque',
        path: '/dashboard/inicio',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Pizzas',
                path: '/dashboard/inicio',
                icon: <IoIcons.IoIosPaper />,
                iconClosed: <RiIcons.RiArrowDownSFill />,
                iconOpened: <RiIcons.RiArrowUpSFill />,
                subNav: [
                    {
                        title: 'Cadastrarr',
                        path: '/dashboard/inicio',
                        icon: <IoIcons.IoIosPaper />,
                        test: 'alou cadastrar'
                    },
                    {
                        title: 'Gerenciar',
                        path: '/dashboard/inicio',
                        icon: <IoIcons.IoIosPaper />,
                        test: 'alou gerenciar'
                    },
                ]
            },
            {
                title: 'Bebidas',
                path: '/dashboard/inicio',
                icon: <AiIcons.AiFillHome />,
                iconClosed: <RiIcons.RiArrowDownSFill />,
                iconOpened: <RiIcons.RiArrowUpSFill />,
                subNav: [
                    {
                        title: 'Cadastrarr',
                        path: '/dashboard/inicio',
                        icon: <IoIcons.IoIosPaper />,
                        test: 'alou cadastrar'
                    },
                    {
                        title: 'Gerenciar',
                        path: '/dashboard/inicio',
                        icon: <IoIcons.IoIosPaper />,
                        test: 'alou gerenciar'
                    },
                ]
            },
            {
                title: 'Ingredientes',
                path: '/dashboard/inicio',
                icon: <AiIcons.AiFillHome />,
                iconClosed: <RiIcons.RiArrowDownSFill />,
                iconOpened: <RiIcons.RiArrowUpSFill />,
                subNav: [
                    {
                        title: 'Cadastrarr',
                        path: '/dashboard/inicio',
                        icon: <IoIcons.IoIosPaper />,
                        test: 'alou cadastrar'
                    },
                    {
                        title: 'Gerenciar',
                        path: '/dashboard/inicio',
                        icon: <IoIcons.IoIosPaper />,
                        test: 'alou gerenciar'
                    },
                ]
            },
        ]
    }

]