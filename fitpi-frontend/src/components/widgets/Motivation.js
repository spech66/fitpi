import React, { Component } from "react";

class Motivation extends Component {
    state = { motivations: []};

    componentDidMount() {
      fetch('/motivations')
        .then(res => res.json())
        .then(motivations => this.setState({ motivations }));
    }

    render() {
        return(
            <div className="card-body">
                <h1>Motivations</h1>
                {/*{this.state.motivations.map(motivation =>
                    <div>{motivation.text} <em>{motivation.source}</em> {motivation.image}</div>
                )}*/}
                <div>{this.state.motivations.text}<br /><em>{this.state.motivations.source}</em></div>
            </div>
        );
    }
}

export default Motivation;
