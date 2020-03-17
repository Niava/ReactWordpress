import React, {Component} from 'react';
import { render } from 'react-dom'; // importing render from ReactDOM
import { BrowserRouter, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';

import Header from './Header';
import Footer from './Footer';


class App extends Component {
    render(){
        return(
            <div id="page-inner">
                <Header />
                <div className="leah"></div>
                <div id="content">
                    <div className="leah"></div>
                    <Switch>
                        <Route exact path={nexusSettings.path} component={Posts} />
                        <Route exact path={nexusSettings.path + 'posts/:slug'} component={Post} />
                        <Route exact path={nexusSettings.path + 'products'} component={Products} />
                        <Route exact path={nexusSettings.path + 'products/:product'} component={Product} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
};


// React Router
const routes = (
    <Router>
        <Route path="/" component={App} />
    </Router>
);


ReactDOM.render(
    {routes}, document.querySelector('#app')
);