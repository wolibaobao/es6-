import nav from '../components/nav'
import home from '../components/home'
import gw from '../components/gw'
import sp from '../components/sp'
import w from '../components/w'


export const routes = [{
        path: '/nav',
        name: 'nav',
        component: nav,
        children: [{
                path: '/home',
                name: 'home',
                component: home
            },
            {
                path: '/gw',
                name: 'gw',
                component: gw
            },
            {
                path: '/sp',
                name: 'sp',
                component: sp
            },
            {
                path: '/w',
                name: 'w',
                component: w
            }
        ]
    }, {
        path: "*",
        redirect: '/home'
    }

]