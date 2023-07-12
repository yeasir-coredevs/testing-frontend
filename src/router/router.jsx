import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Root from "../layout/Root";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children:[
            {
                
            }
        ]
    },
]);

