import React  from "react";
import { Route, Routes } from 'react-router';
import Grid from "../componets/Grid";

const produto = () =>{

return (
<div> <Grid api="api/produto/ConsultarAllProduto"  routes="produto" lHeader={[{"label": "Nome","prop": "nome" },{"label": "Nome","prop": "nome" },
{"label": "Armazenagem","prop": "armazenagem" },{"label": "Preco de Compra","prop": "precoCompra" },{"label": "Valor do lucro","prop": "precoLucro" },
{"label": "Preco de Venda","prop": "precoVenda" },{"label": "Quantidade","prop": "quantidade" },{"label": "Status","prop": "statusProduto" },,{"label": "Unidade","prop": "unid" },
{"label": "","prop": "Editar" },
]} />  </div>)

};export default produto;