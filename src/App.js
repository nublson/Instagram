import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";

function App() {
    return (
        /*  
        O BrowserRouter <Router> que usa a API do histórico HTML5 
        (pushState, replaceState e o evento popstate) para 
        manter sua interface do usuário sincronizada com as Routes criadas.
        */
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    );
}

export default App;
