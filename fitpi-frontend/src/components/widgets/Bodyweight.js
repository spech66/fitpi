import React, { Component } from "react";
import {FlexibleWidthXYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries} from 'react-vis';

class Bodyweight extends Component {
    state = { measurements: [], chartData: [] };

    componentDidMount() {
        fetch("/measurements")
            .then(res => res.json())
            .then(measurements => this.setState({ measurements }))
            .then(x => { this.updateData() });
    }

    updateData() {
        var newData = [];

        this.state.measurements.forEach(function(measurement) {
            var xDate = new Date(measurement.date.substr(0, 4), measurement.date.substr(4, 2), measurement.date.substr(6, 2))
            var yDat = parseFloat(measurement.weight.replace(",", "."))
            newData.push({ x: xDate, y: yDat });
        }, this);
        console.log(newData);

        this.setState({
            chartData: newData
        });
    }

    render() {
        console.log("Render");
        return (
            <div className="card-body">
                <h1>Bodyweight</h1>
                <FlexibleWidthXYPlot
                    height={400}
                    xType="time">
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <XAxis />
                    <YAxis title="Bodyweight" />
                    <LineSeries data={this.state.chartData} stroke="blue" />
                </FlexibleWidthXYPlot>
            </div>
        );
    }
}

export default Bodyweight;
