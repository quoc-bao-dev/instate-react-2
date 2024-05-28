import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Result from "./page/Result";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/result" element={<Result />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
