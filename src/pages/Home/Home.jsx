import { useEffect, useState } from "react";
import io from 'socket.io-client'
import Test from "./Test";
import ApiTest from "./ApiTest";
// const socket = io.connect('http://localhost:4000')

const Home = () => {
    // const order = () => {
    //     fetch('http://localhost:4000/api/order')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }
    // const [user, setUser] = useState(null);
    // const [categories, setCategories] = useState(null);
    // const [notifications, setNotifications] = useState()

    // useEffect(() => {
    //     const getUser = () => {
    //         fetch("http://localhost:4000/api/social/success", {
    //             method: "GET",
    //             credentials: "include",
    //             headers: {
    //                 Accept: "application/json",
    //                 "Content-Type": "application/json",
    //                 "Access-Control-Allow-Credentials": true,
    //             },
    //         })
    //             .then((res) => res.json())
    //             .then((data) => setUser(data))
    //             .catch((err) => {
    //                 console.log(err);
    //             });
    //     };
    //     getUser();
    // }, []);

    // useEffect(() => {
    //     user && socket.emit('notification', user.id)
    //     socket.on('recieve_notification', (data) => {
    //         console.log(data);
    //         setNotifications(data)
    //     })
    //     fetch("http://localhost:4000/api/notification", {
    //         method: "GET",
    //         credentials: "include",
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json",
    //             "Access-Control-Allow-Credentials": true,
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then((data) => setNotifications(data))
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, [user, socket])
    return (
        <>
            <ApiTest></ApiTest>
        </>
    );
};

export default Home;