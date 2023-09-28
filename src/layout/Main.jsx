import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";


const Main = () => {
    return (
        <div>
            <h2>This is main</h2>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;