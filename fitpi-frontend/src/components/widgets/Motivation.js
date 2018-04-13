import React, { Component } from "react";

class Motivation extends Component {
    state = { motivations: []};

    /*constructor() {
        super();
    }*/

    componentDidMount() {
      fetch('/motivations')
        .then(res => res.json())
        .then(motivations => this.setState({ motivations }));
    }

    render() {
        return(
            <div className="card-body">
                <h1>Motivations</h1>
                {this.state.motivations.map(motivation =>
                    <div>{motivation.text} <em>{motivation.source}</em> {motivation.image}</div>
                )}
            </div> 
        );  
    }
}

/*const Motivation = () => (
    <div className="card-body">
        <h1>Title</h1>
        <h2>Subtitle</h2>
    </div>
);*/

export default Motivation;
