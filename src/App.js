import './App.css';
import {Routes, Route, HashRouter} from "react-router-dom";
import ListPage from "./main/pages/list-page";
import CreatePage from "./main/pages/create-page";
import EditPage from "./main/pages/edit-page";
import PostDetailedPage from "./main/pages/post-detailed-page";
import Main from "./main/main";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Main/>} >
                    <Route path="/" element={<ListPage/>}/>
                    <Route path="/posts/new" element={<CreatePage/>}/>
                    <Route path="/posts/:id" element={<PostDetailedPage/>}/>
                    <Route path="/posts/edit/:id" element={<EditPage/>}/>
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
