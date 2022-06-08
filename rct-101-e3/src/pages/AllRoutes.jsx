import {Route,Routes} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Login from "./Login";
import Product from '../components/Products/Products';
import PrivateRoute from "../components/PrivateRoute";

function AllRoutes() {
    return (

        <div>
        <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/login" element={<Login />} />
            <Route path="/product"
            element={
                <login />
            } />
        <Route path="/prosuct/:id" element={<PrivateRoute>
            <Product />
        </PrivateRoute>}  />

        </Routes>

        </div>
    )
}
export default AllRoutes