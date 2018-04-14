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
            <div className="card-body text-center">
                {/*{this.state.motivations.map(motivation =>
                    <div>{motivation.text} <em>{motivation.source}</em> {motivation.image}</div>
                )}*/}
                <blockquote className="blockquote mb-0">
                    <p>{this.state.motivations.text}</p>
                    {this.state.motivations.source && <footer className="blockquote-footer">
                        <small><cite title="Source Title">{this.state.motivations.source}</cite></small>
                    </footer>}
                </blockquote>
            </div>
        );
    }
}

export default Motivation;
