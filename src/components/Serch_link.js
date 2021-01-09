import Short_links from '../components/Short_links';
import React from 'react';
import axios from 'axios';
import loadingImg from '../images/loading.gif';


class Serch_link extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txtSerch: "",
            errorMessage:"",
            islock: false,
            data: this.allStorage()

        };
    }

    lockUI(flag) {
        let temp = this.state;
        temp.islock = flag;
        this.setState(temp);
        console.log(this.state);
    }

    validate() {

        console.log(this.state);
        let temp = this.state;
        temp.errorMessage = "";
        if ((temp.txtSerch == null) || (temp.txtSerch == undefined) || (temp.txtSerch == "")) {
            temp.errorMessage = "please add a link";
            this.setState(temp);

            return false;
        }
        this.setState(temp);

        return true;
    }

    allStorage() {
        //localStorage.clear();

        if (JSON.parse(localStorage.getItem("data")) != null) {  
             return (JSON.parse(localStorage.getItem("data")));
            }
        
        return [];
    }


    getShortLink() {
        let temp = this.state;

        if (this.validate() === false) {
            return ;
        }

        //lock ui
        this.lockUI(true);

    
        axios.get("https://api.shrtco.de/v2/shorten?url=" + this.state.txtSerch)
            .then(function (response) {
       
                if (!response.data) {
                    temp.errorMessage = response.message;
                }
                else {
                    temp.data.push(response.data);
                    localStorage.setItem("data", JSON.stringify(temp.data));
                    console.log("success");
                }
                this.setState(temp);
                this.lockUI(false);
             
            }.bind(this))
            .catch(function (error) {
                //unlock ui
                this.lockUI(false);
                temp.errorMessage = error.response.data.error;
                this.setState(temp);
                console.log(error);
            }.bind(this))
    }

    onChangeTxtSerch(e) {
        let temp = this.state;
        temp.txtSerch = e.target.value;
        this.setState(temp);

    }
    render() {
        return (
            <div>
   
          
                <div className="row serchLinkDiv">
                    <div className="col-sm-10 serchLinkTxtDiv"> <input className="form-control" type="text" placeholder="shorten a link here" onChange={(e) => this.onChangeTxtSerch(e)} value={this.state.txtSerch} disabled={this.state.islock} />
                        <p>{this.state.errorMessage}</p>
                    </div>
                    <div className="col-sm-2 serchLinkBtnDiv">     <button type="button" className="btn" onClick={this.getShortLink.bind(this)} disabled={this.state.islock}>Shorten It!</button></div>
                    <div className="col-sm-12 loadingDiv">
                        <img src={loadingImg} className="loadingImg" style={{ visibility: this.state.islock === true ? 'visible' : 'hidden'  }}  />
                    </div>
                </div>
               
                {
                    this.state.data.map((item, index) => {
                        return (

                            <Short_links serched_link={item.result.original_link} result_Link={item.result.full_short_link} />

                        )
                    })
                
                }
                    

                
               
                 
       
                </div>
       
        );
    }
}


export default Serch_link;
