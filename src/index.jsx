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
                <div id="content">
                    <Switch>
                        <Route exact path={CelestialSettings.path} component={Posts} />
                        <Route exact path={CelestialSettings.path + 'posts/:slug'} component={Post} />
                        <Route exact path={CelestialSettings.path + 'products'} component={Products} />
                        <Route exact path={CelestialSettings.path + 'products/:product'} component={Product} />
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
    {routes}, document.querySelector('#page')
);