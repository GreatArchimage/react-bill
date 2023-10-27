import Layout from "@/pages/Layout";
import Mouth from "@/pages/Mouth";
import New from "@/pages/New";
import Year from "@/pages/Year";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: 'mouth',
                    element: <Mouth />
                },
                {
                    path: 'year',
                    element: <Year />
                }
            ]
        },
        {
            path: '/new',
            element: <New />
        }
    ]
);

export default router;