import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';


import '../public/themes/Global.css';
import BrambangLayout from './Main/Layout';
import Beranda from './Components/Beranda/Index';
import Franchise from './Components/Franchise/Screens/Index';
// import Gerobak from './Components/Gerobak/Screens/Index';
import MasterGerobak from './Components/MGerobak/Screens/Index';
// import DataKoki from './Components/Koki/Screens/Index';
// import DataTraining from './Components/Training/Screens/Index';
// import MasterMenu from './Components/Menu/Screens/Index';
import Login from "./Components/Otentikasi/Screens/Index";

const GetChildren = props => props.children;
let isAuthenticated = sessionStorage.getItem("isAuthenticated");
console.log(sessionStorage.getItem("currentToken"));
if(!sessionStorage.getItem("currentToken") || sessionStorage.getItem("currentToken") === null) {
  isAuthenticated = false;
}
if (isAuthenticated) {
const BrambangApp = () => (
    <BrowserRouter>
        <GetChildren>
            <BrambangLayout>
                <Route exact path="/" component={Beranda} />
                <Route exact path="/master-gerobak" component={MasterGerobak} />
                <Route exact path="/franchise" component={Franchise} />
                {/* <Route exact path="/franchise" component={Franchise} />
                <Route exact path="/gerobak" component={Gerobak} />
                <Route exact path="/koki" component={DataKoki} />
                <Route exact path="/training" component={DataTraining} />
                <Route exact path="/master-menu" component={MasterMenu} /> */}
            </BrambangLayout>
        </GetChildren>
    </BrowserRouter>
);

render( <BrambangApp /> , document.getElementById('brambang-root'));
} else {
  const BrambangApp = () => (
      <BrowserRouter>
          <Route exact path="/" component={Login} />
      </BrowserRouter>
  );

  render( <BrambangApp /> , document.getElementById('brambang-root'));
 }

