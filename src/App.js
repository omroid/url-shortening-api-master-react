import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';
import Header from './components/Header';
import Just_short_link from './components/Just_short_link';
import Footer from './components/Footer';
import Boost_row from './components/Boost_row';
import Bubles from './components/Bubles';
import Advenced from './components/Advenced';
import Serch_link from './components/Serch_link';

class App extends React.Component {
    //constructor(props) {
    //    super(props);
    //    this.state = {};
    //}
    render() {
        return (

            <div className="container-fluid">
                <Header />
                <Just_short_link />
                <div className="row lightBlueRow">
                    <div className="container">
                        <Serch_link />
                 
      
                        <Advenced/>
   
                        <Bubles/>
                    </div>

                </div>
                <Boost_row />
                <Footer />
            </div>

        );
    }
}


export default App;



