import { Home, Top, Register, Bag, Bottom, FootWare, Hat, OuterWare, Recruitment, Sale, ShopAll, Login } from "../Page"

const privateRouter = [
    {
        path: '/',
        element: Home

    },
    {
        path: '/all/:allId',
        element: ShopAll

    }
    ,
    {
        path: '/top',
        element: Top

    }
    ,
    {
        path: '/bottom',
        element: Bottom

    },
    {
        path: '/outerwear',
        element: OuterWare

    }
    ,
    {
        path: '/footwear',
        element: FootWare

    }
    ,
    {
        path: '/hat',
        element: Hat

    }
    ,
    {
        path: '/bags',
        element: Bag

    }
    ,
    {
        path: '/sale',
        element: Sale

    }

    ,
    {
        path: '/recruitment',
        element: Recruitment

    },
    {
        path: '/login',
        element: Login

    },
    {
        path: '/register',
        element: Register

    }


]
export { privateRouter }