// Inspired by https://github.com/vlaurin/dazzle-bootstrap-seed/blob/master/src/components/Dashboard.js
import React, { Component } from "react";
import DazzleDashboard from "react-dazzle";
import Container from "./Container";
import SmashingFrame from './frames/SmashingFrame';

import FormatQuoteCloseIcon from 'mdi-react/FormatQuoteCloseIcon';
import WeightKilogramIcon from 'mdi-react/WeightKilogramIcon';

import Image from "./widgets/Image";
import Motivation from "./widgets/Motivation";
import Bodyweight from "./widgets/Bodyweight";

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            widgets: {
                WidgetImage: { type: Image, title: "Image", frameSettings: { colour: 'invisible', } },
                WidgetMotivation: { type: Motivation, title: "Motivation", frameSettings: { icon: <FormatQuoteCloseIcon color="#fff" size={72} />, colour: 'blue', } },
                
                WidgetBodyweight: { type: Bodyweight, title: "Bodyweight", frameSettings: { icon: <WeightKilogramIcon color="#fff" size={128} />, colour: 'foreground', } },                
                WidgetBodyweightMonth: { type: Bodyweight, title: "Bodyweight", props: { days: 31 }, frameSettings: { icon: <WeightKilogramIcon color="#fff" size={128} />, colour: 'foreground', } },
                WidgetBodyweightLast: { type: Bodyweight, title: "Bodyweight", props: { last: 5 }, frameSettings: { icon: <WeightKilogramIcon color="#fff" size={128} />, colour: 'foreground', } },
            },
            layout: {
                rows: [
                    {
                        columns: [
                            { className: "col-md", widgets: [{ key: "WidgetImage" }] },
                            { className: "col-md", widgets: [{ key: "WidgetMotivation" }] },
                            { className: "col-md", widgets: [{ key: "WidgetMotivation" }] },
                        ]
                    },
                    {
                        columns: [
                            { className: "col-md", widgets: [{ key: "WidgetBodyweight" }] },
                            { className: "col-md", widgets: [{ key: "WidgetBodyweightMonth" }] },
                            { className: "col-md", widgets: [{ key: "WidgetBodyweightLast" }] },
                        ]
                    }
                ]
            }
        };
    }

    render() {
        return (
            <Container>
            <DazzleDashboard
                frameComponent={SmashingFrame}
                widgets={this.state.widgets}
                layout={this.state.layout}
            />
            </Container>
        );
    }
}

export default Dashboard;
