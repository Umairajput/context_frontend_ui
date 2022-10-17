import React from "react";
import Chart from 'react-apexcharts'
import BasicSwitches from '../Component/switch'
class ApexChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                name: 'series1',
                data: [31, 40, 28, 51, 42, 109, 100]
            }, {
                name: 'series2',
                data: [11, 32, 45, 32, 34, 52, 41]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'area'
                },
                grid: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
            },


        };
    }



    render() {
        return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="area" width='100%' height={180} />
                <div className="chart_graph">
                    <div className="chart_graph_text">
                        <span className="weekly">Wee</span><br /><span className="weekly">kly</span>
                        <div className="weeks_data">
                            <div className="this_week">This week
                                <p className="week_percentage">+72.0%</p>
                            </div>
                            <div className="last_week">Last week
                                <p className="week_percentage">-60.0%</p>
                            </div>
                        </div>
                        <div className="button_div">
                            <div><BasicSwitches /></div>
                            <div className="Show_chart_form">Show In Chart Form</div>
                        </div>
                    </div>
                    <div className="inner_graph_container">
                        <div className="activity_div">
                            <span className="activity_head">Activity</span>
                            <h3 className="activity_h">14H</h3>
                            <span className="activity">15m</span>
                        </div>
                        <div className="spans_div">
                            <button className="sky_blue"></button>
                            <button className="blue"></button>
                            <button className="orange"></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ApexChart