import React, { Component } from "react";
import {FlexibleWidthXYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries} from 'react-vis';

class Bodyweight extends Component {
    state = { measurements: [], chartData: [], chartDataBMI: [], chartDataBMIGood1: [], chartDataBMIGood2: [] };

    componentDidMount() {
        fetch("/measurements")
            .then(res => res.json())
            .then(measurements => this.setState({ measurements }))
            .then(x => { this.updateData() });
    }

    updateData() {
        var newData = [];
        var newDataBMI = [];
        var newDataBMIGood1 = [];
        var newDataBMIGood2 = [];
        var startDate = new Date();

        if(typeof this.props.days !== 'undefined') {
            startDate.setDate(startDate.getDate() - this.props.days);
            console.log(startDate);
        }

        this.state.measurements.forEach(function(measurement) {
            var xDate = new Date(measurement.date.substr(0, 4), measurement.date.substr(4, 2), measurement.date.substr(6, 2));
            var weight = parseFloat(measurement.weight.replace(",", "."));
            var height = parseFloat(measurement.height.replace(",", ".")) / 100.0;
            var bmi = weight * 1.0 / (height * 1.0 * height);

            // TODO: Move to webservice for optimisation
            if (typeof this.props.days !== 'undefined') {
                if(xDate > startDate) {
                    newData.push({ x: xDate, y: weight });
                    newDataBMI.push({ x: xDate, y: bmi });
                    newDataBMIGood1.push({ x: xDate, y: 25 });
                    newDataBMIGood2.push({ x: xDate, y: 18.5 });
                }
            } else {
                newData.push({ x: xDate, y: weight });
                newDataBMI.push({ x: xDate, y: bmi });
                newDataBMIGood1.push({ x: xDate, y: 25 });
                newDataBMIGood2.push({ x: xDate, y: 18.5 });
            }
        }, this);

        if(typeof this.props.last !== 'undefined' && newData.length > this.props.last) {
            newData = newData.slice(-this.props.last);
            newDataBMI = newDataBMI.slice(-this.props.last);
            newDataBMIGood1 = newDataBMIGood1.slice(-this.props.last);
            newDataBMIGood2 = newDataBMIGood2.slice(-this.props.last);
        }

        this.setState({
            chartData: newData,
            chartDataBMI: newDataBMI,
            chartDataBMIGood1: newDataBMIGood1,
            chartDataBMIGood2: newDataBMIGood2
        });
    }

    render() {
        return (
            <div className="card-body">
                <h1>Bodyweight { typeof this.props.days !== 'undefined' ? this.props.days + ' days' : null } { typeof this.props.last !== 'undefined' ? ' last ' + this.props.last : null }</h1>
               
                <div style={{ position: 'relative' }}>
                    <div>
                        <FlexibleWidthXYPlot
                            height={400}
                            xType="time">
                            <XAxis tickLabelAngle={-45} />
                            <YAxis />
                            <LineSeries data={this.state.chartData} stroke="blue" curve={'curveMonotoneX'} />
                        </FlexibleWidthXYPlot>
                    </div>
                    <div style={{ position: 'absolute', top: 0, width: '100%' }}>
                        <FlexibleWidthXYPlot
                                height={400}
                                xType="time">
                                <YAxis orientation="right" title="BMI" right={20} />
                                <LineSeries data={this.state.chartDataBMI} stroke="red" curve={'curveMonotoneX'} />
                                <LineSeries data={this.state.chartDataBMIGood1} stroke="green" curve={'curveMonotoneX'} />
                                <LineSeries data={this.state.chartDataBMIGood2} stroke="green" curve={'curveMonotoneX'} />
                            </FlexibleWidthXYPlot>
                    </div>
                </div>

            </div>

        );
    }
}

export default Bodyweight;
