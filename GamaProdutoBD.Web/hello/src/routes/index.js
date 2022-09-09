import React  from "react";
import { Route, Routes } from 'react-router';
import Home from "./home";
import Produto from "./Produto";



const Rotas = () =>{

return (<Routes>

<Route path={"/"} element={<Home/>} />
<Route path={"/produto"} element={<Produto/>} />

</Routes>) ;    


};export default Rotas;