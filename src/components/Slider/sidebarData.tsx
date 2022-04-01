import {
    AiFillCaretDown,
    AiFillCaretUp,
    AiOutlineHistory,
    AiOutlineHome,
    AiOutlineMoneyCollect,
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
                title: 'Team',
                path: '/team',
                icon: <AiOutlineMoneyCollect />
            },
            {
                title: 'Snap',
                path: '/snap',
                icon: <AiOutlineMoneyCollect />
            },
            
        ]
    },
    {
        title: 'Order',
        path: '/cart',
        icon: <FaOpencart />
    },
    {
        title: 'History',
        path: '/history',
        icon: <AiOutlineHistory />
    },
    {
        title: 'Configurations',
        path: '/configurations',
        icon: <FaCog />
    }
];