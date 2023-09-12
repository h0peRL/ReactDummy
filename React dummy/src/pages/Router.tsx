import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout"
import Landingpage from "./Landingpage";
import Login from "./Login";
import Termine from "./Termine";
import TerminBuchen from "./TerminBuchen";
import PageNotFound from "./PageNotFound";

function Router(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Landingpage />} />
                    <Route path='login' element={<Login />} />
                    <Route path='termine'>
                        <Route index element={<Termine />} />
                        <Route path='buchen' element={<TerminBuchen />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;