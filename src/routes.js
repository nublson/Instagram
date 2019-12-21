import React from "react";
import { Switch, Route } from "react-router-dom";

// Importando Páginas
import Feed from "./pages/Feed";
import New from "./pages/New";

const Routes = () => {
    return (
        // O Switch faz com que seja renderizada uma Route exclusivamente.
        // O Route renderizar algum component do usuário quando seu caminho corresponder ao path atual.
        <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/new" component={New} />
        </Switch>
    );
};

export default Routes;
