import ShortLinksContainer from '../components/ShortLinksContainer';
import React from 'react';
import loadingImg from '../images/loading.gif';
import { connect } from 'react-redux';
import { setTxtSearch } from '../redux'
import { fetchURL } from '../redux/fatchShortUrl/fatchShortUrlAction'
// import store from '../redux/store';

class SearchLinkContainer extends React.Component {

    // allStorage() {
    //     //localStorage.clear();

    //     if (JSON.parse(localStorage.getItem("data")) != null) {  
    //          return (JSON.parse(localStorage.getItem("data")));
    //         }
        
    //     return [];
    // }
 
    render() {
        return (
            <div>
                <div className="row serchLinkDiv">
                    <div className="col-sm-10 serchLinkTxtDiv"> 
                    <input className="form-control" type="text" placeholder="shorten a link here" onChange={(e) => this.props.setTxtSearch(e.target.value)} value={this.props.txtSearch} disabled={this.props.fatchUrlResult.loading} />
                        <p>{this.props.fatchUrlResult.error}</p>
                    </div>
                        <div className="col-sm-2 serchLinkBtnDiv">
                            <button type="button" className="btn" onClick={()=>this.props.fatchShortUrl(this.props.txtSearch)} disabled={this.props.fatchUrlResult.loading}>Shorten It!</button>
                        </div>
                    <div className="col-sm-12 loadingDiv">
                        <img src={loadingImg} className="loadingImg" style={{ visibility: this.props.fatchUrlResult.loading === true ? 'visible' : 'hidden'  }}  />
                    </div>
                </div>
               
                {
                    this.props.fatchUrlResult.url.map((item, index) => {
                        return (
                            <ShortLinksContainer serched_link={item.result.original_link} result_Link={item.result.full_short_link} />
                        )
                    })
                
                }
                </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        txtSearch: state.SearchLink.txtSearch,
        fatchUrlResult:state.fatchShortUrl
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      setTxtSearch: (value) => dispatch(setTxtSearch(value)),
      fatchShortUrl:(url)=>dispatch(fetchURL(url))

    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchLinkContainer)

