import {Route,Routes} from "react-router-dom";

import './App.css';
import {Linkk} from "./components";
import {Albums, Comments, Home, Posts, Todos} from "./pages";



function App() {
    return (
        <div className="App">
            <Linkk/>
            <hr/>
            <Routes>

                <Route index element={<Home/>}/>
                <Route path="/todos" element={<Todos/>}/>
                <Route path="/albums" element={<Albums/>}/>
                <Route path="/comments" element={<Comments/>}/>
                <Route path="/posts/:id" element={<Posts/>}/>

            </Routes>

            <hr/>

        </div>
    );
}

export default App;
