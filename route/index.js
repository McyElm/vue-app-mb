/**
 * Created by Administrator on 2018/6/27.
 */
// Start up
var routes = [
    {
        path: '/',
        component:Index ,
        children: [
            { path: '/',redirect:'home', component: Home},
            { path: 'home', component: Home},
            { path: 'add', component: Add},

            { path: 'eid', component: Eid},
            { path: 'replace', component: Replace},
            { path: 'recovery', component: Recovery},
            { path: 'parameter', component: Parameter},
            { path: 'local', component: Local},
            { path: 'fault', component: Fault},
            { path: 'data', component: Data,
                children:[
                    { path: 'data_charts', component: Data_charts}
                ]
            },
            { path: 'sidebar', component: Sidebar

            }

        ]
    },
    {
        path: '/signin',
        component:Signin
    },
    { path: '/password', component: Password

    },
    { path: '/system', component: System},
];
Vue.use(Vonic.app, {
    routes:routes,
    store:store,
    defaultRouterUrl:'/'
})