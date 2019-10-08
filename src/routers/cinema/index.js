
export default ({
    path:"/cinema",
    component:()=>import('@/views/cinema'),
    children:[
        {path:'comingsoon',
    component:()=>import("@/components/comingsoon")
    },
    {
        path:"city",
        component:()=>import("@/components/city")
    },
    {
        path:"nowplaying",
        component:()=>import("@/components/nowplaying")
    },
    {
        path:"search",
        component:()=>import("@/components/search")
    }
    ]
})