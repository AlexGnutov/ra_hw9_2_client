import {Outlet} from "react-router-dom";
import HeaderBar from "./elements/header-bar";

function Main() {
    return (
        <div className={'main-container'}>
            <HeaderBar/>
            <Outlet/>
        </div>
    )
}

export default Main;
