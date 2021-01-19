import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';
import Header from './components/HeaderContainer';
import JustShortLinkContainer from './components/JustShortLinkContainer';
import Footer from './components/FooterContainer';
import BoostRowContainer from './components/BoostRowContainer';
import Bubles from './components/BublesContainer';
import Advenced from './components/AdvencedContainer';
import SearchLinkContainer from './components/SearchLinkContainer';
import { Provider } from 'react-redux'
import store from './redux/store'

class App extends React.Component {
    //constructor(props) {
    //    super(props);
    //    this.state = {};
    //}
    render() {
        return (
            <Provider store={store}>
            <div className="container-fluid">
                <Header />
                <JustShortLinkContainer />
                <div className="row lightBlueRow">
                    <div className="container">
                        <SearchLinkContainer />
                        <Advenced/>
                        <Bubles/>
                    </div>
                </div>
                <BoostRowContainer />
                <Footer />
            </div>
            </Provider>
        );
    }
}


export default App;



