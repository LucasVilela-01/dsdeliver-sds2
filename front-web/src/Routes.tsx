import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Orders from "./Orders";

function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter> /* Através dessa tag que são gerenciadas as rotas da aplicação. Chamado de componente filho o conteúdo colocado entre as tags,
chamado de children no React, podendo ter um ou mais elementos */
/* Tag Switch também vem do React Router Dom, e dentro delas que declaramos as rotas, é como se fosse o SwitchCase do Java ou JS, dando match com 
alguma rota(path) e renderizar somente aquele componente, ou seja, nunca vai renderiza duas rotas ao mesmo tempo, desde que elas estejam no mesmo nivel,
como por exemplo, as rotas acima, estão no mesmo nível e decide renderizar o Orders ou o Home, a forma como qual escolher depende do que está na URL*/
// A classe path="/orders", quer dizer que quando o usuário digitar o /orders na url, será renderizado o componente Orders
    )
}

export default Routes;