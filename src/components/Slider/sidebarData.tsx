import {
    AiFillCaretDown,
    AiFillCaretUp,
    AiOutlineHistory,
    AiOutlineHome,
    AiOutlineMoneyCollect,
    AiFillCamera,
    AiFillWechat,
    AiOutlineUser
} from 'react-icons/ai';
import { FaCog, FaOpencart } from 'react-icons/fa';
import { SidebarItem } from './sidebarItems';

export const SidebarData: SidebarItem[] = [
    {
        title: 'Menu',
        path: '/',
        icon: <AiOutlineHome />,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />,
        subnav: [
            {
                title: 'About Us',
                path: '/aboutus',
                icon: <AiOutlineUser />
            },
            {
                title: 'Chats',
                path: '/avatar',
                icon: <AiFillWechat />
            },
            {
                title: 'Team',
                path: '/team',
                icon: <AiOutlineUser />
            },
            {
                title: 'Snap',
                path: '/camera',
                icon: <AiFillCamera />
            },
            {
                title: 'Looks',
                path: '/looks',
                icon: <AiOutlineMoneyCollect/>
            },
            
        ]
    },
    {
        title: 'Order',
        path: '/cart',
        icon: <FaOpencart />,
    },
    {
        title: 'History',
        path: '/history',
        icon: <AiOutlineHistory />
    },
    {
        title: 'allProduct',
        path: '/allpro',
        icon: <FaCog />
    }
];