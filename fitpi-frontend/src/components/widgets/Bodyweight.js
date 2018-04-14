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
        var startDate = new Date();
        
        if(typeof this.props.days !== 'undefined') {
            startDate.setDate(startDate.getDate() - this.props.days);
            console.log(startDate);
        }

        this.state.measurements.forEach(function(measurement) {
            var xDate = new Date(measurement.date.substr(0, 4), measurement.date.substr(4, 2), measurement.date.substr(6, 2))
            var yDat = parseFloat(measurement.weight.replace(",", "."))
            
            // TODO: Move to webservice for optimisation
            if (typeof this.props.days !== 'undefined') {
                if(xDate > startDate) {
                    newData.push({ x: xDate, y: yDat });
                }
            } else {
                newData.push({ x: xDate, y: yDat });
            }
        }, this);
        console.log(newData);

        if(typeof this.props.last !== 'undefined' && newData.length > this.props.last) {
            newData = newData.slice(-this.props.last);
            console.log(newData);
        }

        this.setState({
            chartData: newData
        });
    }

    render() {
        return (
            <div className="card-body">
                <h1>Bodyweight { typeof this.props.days !== 'undefined' ? this.props.days + ' days' : null } { typeof this.props.last !== 'undefined' ? ' last ' + this.props.last : null }</h1>
                <FlexibleWidthXYPlot
                    height={400}
                    xType="time">
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <XAxis />
                    <YAxis />
                    <LineSeries data={this.state.chartData} stroke="blue" curve={'curveMonotoneX'} />
                </FlexibleWidthXYPlot>
            </div>
        );
    }
}

export default Bodyweight;
