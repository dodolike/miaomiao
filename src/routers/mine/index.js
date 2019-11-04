export default ({
    path: '/mine',
    component: () => import('@/views/mine'),
    children: [{
        path: "center",
        component: () => import('@/views/mine/center')
    },
    {
        path: 'register',
        component: () => import('@/components/register')
    },
    {
        path:"login",
        component:()=>import("@/components/login")
    },
    {
        path:"findpassword",
        component:()=>import("@/components/findpassword")
    },
    {
        path:"/mine",
        redirect:"center"
    }
    ]
})