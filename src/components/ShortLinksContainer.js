import React from 'react';


class Short_links extends React.Component {
    constructor(props) {
        super(props);
      
    }

    copy(e) {
        navigator.clipboard.writeText(this.props.result_Link);
        e.target.innerHTML = "copied";
        e.target.style.backgroundColor = "blue";
    }


    render(e) {
        return (
            <div className="shortLinksDiv">
                <div className="row shortLinksRow">
                    <div className="col-sm-6">
                        <p>{this.props.serched_link}</p>
                        </div>
                    <div className="col-sm-3 shortLinksResultLinkDiv">
                      <p><a href={this.props.result_Link}>{this.props.result_Link}</a></p>  
                        </div>
                    <div className="col-sm-3 shortLinksBtnDiv">
                    
                        <div><button type="button" className="btn cyanColored" onClick={(e)=>this.copy(e)}>copy</button></div>
                        <div><button type="button" className="btn redColored btnMargin" onClick={()=>this.props.removeSearchResult(this.props.index)}>remove</button></div>
                      
                     </div>
                </div>
            </div>

       
        );
    }
}


export default Short_links;
