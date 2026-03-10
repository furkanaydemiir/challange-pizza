import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home"
import OrderPizza from "../pages/OrderPizza";
import SuccessOrder from "../pages/SuccessOrder";
import NotFoundPage from "../pages/NotFoundPage";
function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                   <Route path="/OrderPizza" element={<OrderPizza/>}></Route>
                   <Route path="/SuccessOrder" element={<SuccessOrder/>}></Route>
                   <Route path="*" element={<NotFoundPage/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes