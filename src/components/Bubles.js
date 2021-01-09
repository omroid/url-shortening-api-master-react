import React from 'react';


class bubles extends React.Component {
    //constructor(props) {
    //    super(props);
    //    this.state = {};
    //}
    render() {
        return (
            <div className="row bublesRow">
                <div className="line visibleLine"></div>
                <div className="line firstHiddenLine"></div>
                <div className="line secoundHiddenLine"></div>
                <div className="col-sm-4 buble">
                    <div className="bubleBg">
                        <div className="bubleImg1 bubleBgImg"></div>
                        <h3>Brand Recognition</h3>
                        <p>
                            Boost your brand recognition with each click. Generic links don't
                            mean a thing. Branded links help instil confidence in your content.
                            </p>
                    </div>
                </div>


                <div className="col-sm-4 buble bubleMargin1">
                    <div className="bubleBg">
                        <div className="bubleImg2 bubleBgImg"></div>
                        <h3>Detailed Records</h3>
                        <p>
                            Gain insights into who is clicking your links. Knowing when and where
                            people engage with your content helps inform better decisions.
                            </p>
                    </div>
                </div>

                <div className="col-sm-4 buble bubleMargin2">
                    <div className="bubleBg">
                        <div className="bubleImg3 bubleBgImg" ></div>
                        <h3>Fully Customizable</h3>
                        <p>
                            Improve brand awareness and content discoverability through customizable
                            links, supercharging audience engagement.
                            </p>
                    </div>
                </div>
            </div>
        );
    }
}


export default bubles;
