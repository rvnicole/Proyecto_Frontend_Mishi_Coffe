import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutApp from "./layout/LayoutApp";
import Home from "./view/Home";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutApp />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}