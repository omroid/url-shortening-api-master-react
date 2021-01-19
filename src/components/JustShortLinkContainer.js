
import React from 'react';
import illustration from '../images/illustration-working.svg';

class Just_short_link extends React.Component {
    //constructor(props) {
    //    super(props);
    //    this.state = {};
    //}
    render() {
        return (
   
          
                <div className="row justShortLinkRow">
                    <div className="col-sm-6 justShortLinkCol">
                        <h1>
                            More than just shorter links
                </h1>
                        <p>
                            Build your brand's recognition and get detailed insights
                            on how your links are performing.
                </p>
                        <button type="button" className="btn elipsBtn getStartedBtn widthBtn">Get Started</button>

                    </div>
                    <div className="col-sm-6">
                        <img src={illustration} className="justShortLinkImg" alt="illustration" />
                    </div>
                </div>
  
       
        );
    }
}


export default Just_short_link;
