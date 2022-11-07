import React from "react";


class PureComponent extends React.PureComponent {

    
    constructor(props) {
        super(props);
        this.state = {
            firstCount: 0
        }
    }

    updateFirstCount = () => {
        this.setState({firstCount: this.state.firstCount+1});
    }

    render() {
        return (
            <div>
                <h3>This is an example of pure component where it updates by comparing previous primitive props values but not any other non-primitive values</h3>

                <ul>
                    <li>If you click on first button only the first count will increase "because it repesents inner functionality"</li>
                    <li>If you click on the second button nothing happens because we are trying to pass handler to the pure component so it will not change</li>
                </ul>

                <h3>firstCount: {this.state.firstCount}</h3>
                <h3>secondCount: {this.props.handleFirstCount}</h3>

                <div style={{textAlign:"center"}}>
                      <button className="btn btn-success" onClick={this.updateFirstCount} style={{textAlign:"center",height:"30px",borderRadius:"10px",backgroundColor:"black",color:"white",cursor:"pointer"}}>First button</button>
                </div>
              

            </div>
        );
    }
}

export default PureComponent;