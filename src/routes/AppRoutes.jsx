import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home"
import OrderPizza from "../pages/OrderPizza";
import SuccessOrder from "../pages/SuccessOrder";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "../layout/Layout";
function AppRoutes() {
    return (
            <BrowserRouter>
               <Routes>
                <Route element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/OrderPizza" element={<OrderPizza/>}/>
                <Route path="/SuccessOrder" element={<SuccessOrder/>}/>
                <Route path="*" element={<NotFoundPage/>}/>

                </Route>
               </Routes>
            </BrowserRouter>
    )
}

export default AppRoutes