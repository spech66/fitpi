// Inspired by https://github.com/vlaurin/dazzle-bootstrap-seed/blob/master/src/components/Dashboard.js
import React, { Component } from "react";
import DazzleDashboard from "react-dazzle";
import Container from "./Container";
import SmashingFrame from './frames/SmashingFrame';

import Image from "./widgets/Image";
import AlertIcon from 'mdi-react/AlertIcon';
import BikeIcon from 'mdi-react/BikeIcon';
import Motivation from "./widgets/Motivation";

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            widgets: {
                WidgetImage: {
                    type: Image,
                    title: "Image",
                    frameSettings: {
                        colour: 'background',
                    }
                },
                WidgetMotivation: {
                    type: Motivation,
                    title: "Motivation",
                    frameSettings: {
                        icon: <BikeIcon color="#fff" size={128} />,
                        colour: 'red',
                    }
                },
                WidgetMotivation2: {
                    type: Motivation,
                    title: "Motivation 2",
                    frameSettings: {
                        icon: <AlertIcon color="#fff" size={72} />,
                        colour: 'blue',
                    }
                }
            },
            layout: {
                rows: [
                    {
                        columns: [
                            {
                                className: "col-md",
                                widgets: [{ key: "WidgetImage" }]
                            },
                            {
                                className: "col-md",
                                widgets: [{ key: "WidgetMotivation" }]
                            },
                            {
                                className: "col-md",
                                widgets: [{ key: "WidgetMotivation2" }]
                            },
                        ]
                    },
                    {
                        columns: [
                            {
                                className: "col-md",
                                widgets: [{ key: "WidgetMotivation" }]
                            },
                            {
                                className: "col-md",
                                widgets: [{ key: "WidgetMotivation2" }]
                            },
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
