
export default ({
    path: "/cinema",
    component: () => import('@/views/cinema'),
    children: [
        {
            path: 'comingsoon',
            component: () => import("@/components/comingsoon"),
        },
        {
            path: "comingsoon/details/:id",
            components:{
              details  :()=>import ("@/views/cinema/index"),
              default:() => import("@/views/cinema/details")
                
            },
            props:{
                default:true
            }
        },
        {
            path: "city",
            component: () => import("@/components/city")
        },
        {
            path: "nowplaying",
            component: () => import("@/components/nowplaying")
        },{
            path:"nowplaying/details:id",
            components:{
                default:()=>import ("@/views/cinema/details")
            },
            props:{
                default:true
            }
        }
        ,
        {
            path: "search",
            component: () => import("@/components/search")
        },
{
    path:"/cinema",
    redirect:"/cinema/nowplaying"
}
    ]
})