import React, { useEffect, useState } from "react";
import { CFormInput, CForm } from '@coreui/react'
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Partidas from "../routes/Partidas";
import Tecnico from "../routes/Tecnicos";
import Torneio from "../routes/Torneios";
import Grid from "./Grid";

const search = ({ api, routes }) => {

    function busca(api, routes) {
             <Route path={" ../routes/tecnico"} element={<Tecnico/>} />
           // return (<div> <Grid api="api/Tecnico/getStart"  routes="Tecnico" />  </div>)
    }
    return (

        // Usage
        <div className="card card-body">
            <CForm action={busca()}>

                <label>Nomes:  </label>
                <CFormInput name="name" type="text" />
                <CFormInput value="Buscar" type="submit" />
            </CForm>
        </div>
        //<button onClick={busca}>Buscar</button>
    )

}; export default search;


