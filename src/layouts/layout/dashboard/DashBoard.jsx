import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import { Line, Pie, Doughnut, Bar, Radar, Polar, defaults  } from 'react-chartjs-2'

import {  NumberWidget } from '../../../components/Widget';
import Page from '../../../components/Page';

import { getColor } from '../../../utils/colors';
import { randomNum } from '../../../utils/demos';

import { connect } from 'react-redux';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const genLineData = (moreData = {}, moreData2 = {}, st1={}, st2={}) => {
    return {
      labels: MONTHS,
      datasets: [
        {
          label: moreData.label,
          backgroundColor: getColor(moreData.backgroundColor),
          borderColor: getColor(moreData.borderColor),
          borderWidth: 1,
          data: moreData.data,
          ...st1,
        },
        {
          label: moreData2.label,
          backgroundColor: getColor(moreData2.backgroundColor),
          borderColor: getColor(moreData2.borderColor),
          borderWidth: 1,
          data: moreData2.data,
          ...st2,
        },
      ],
      
    };
  };

defaults.global.elements.line.tension = 0;

class DashBoard extends Component {
    state = {  }

    
    render() { 
        const {one,two} = this.props;
        console.log('aaaaaaaaaaaaaaaaa',one.data);
        return (
            <Page
                className="DashboardPage mt-5 pt-5"
                title="Dashboard"
                breadcrumbs={[{ name: 'Dashboard', active: true }]}
            >

                <Row className="menu">
                    <Col lg={3}>
                        <NumberWidget
                            title="Total Profit"
                            subtitle="This month"
                            number="9.8k"
                            color="success"
                            progress={{
                                value: 75,
                                label: 'Last month',
                            }}
                        />
                    </Col>

                    <Col lg={3}>
                        <NumberWidget
                            title="Monthly Visitors"
                            subtitle="This month"
                            number="5,400"
                            color="danger"
                            progress={{
                                value: 45,
                                label: 'Last month',
                            }}
                            />
                    </Col>

                    <Col lg={3}>
                        <NumberWidget
                            title="New Users"
                            subtitle="This month"
                            number="3,400"
                            color="info"
                            progress={{
                                value: 90,
                                label: 'Last month',
                            }}
                        />
                    </Col>

                    <Col lg={3}>
                        <NumberWidget
                            title="Bounce Rate"
                            subtitle="This month"
                            number="38%"
                            color="warning"
                            progress={{
                                value: 60,
                                label: 'Last month',
                            }}
                        />
                    </Col>

                    
                </Row>
                
                <Row className="infoview">
                    <Col lg={12}>
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col lg={3}>
                                        <h2>32,451</h2>
                                    </Col>
                                    <Col lg={3}>
                                        <h2>15,236</h2>
                                    </Col>
                                    <Col lg={3}>
                                        <h2>7,688</h2>
                                    </Col>
                                    <Col lg={3}>
                                        <h2>1,553</h2>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                
                <Row className="chartone">
                    <Col lg={7} className="">
                        <Card>
                            
                            <CardBody>
                            <Row>
                                <Col >   
                                    <p><strong>Sales Statistics Overview</strong></p>
                                    <p>Lorem ipsum is placeholder text commonly used</p>
                                </Col>
                                <Col lg={3} className="mr-auto">
                                    <p>1D 5D 1M 1Y</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Total Cost</p>
                                    <p><strong>15,263 89.5</strong>% of 20,000 tal</p>
                                </Col>
                            </Row>
                            <Row>
                                <Bar data={genLineData(one,two) }  />
                            </Row>
                                
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={5} >
                        <Card>
                            <CardHeader>Radar</CardHeader>
                            <CardBody>
                                
                                <Radar data={genLineData(one,two)} height={220}/>                                
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="charttwo">
                    <Col lg={7} className="">
                        <Card>
                            <CardHeader>Line</CardHeader>
                            <CardBody>
                            <Line data={
                                //genLineData(one, two,{fi})
                                genLineData(one, two, { fill: false}, { fill: false })
                                
                            } />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={5} >
                        <Card>
                            <CardHeader>Combo Bar / Line</CardHeader>
                            <CardBody>
                                <Bar 
                                    data={genLineData(one,two, { type: 'line', fill: false }) } 
                                    height={220}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </Page>
            

        );
    }
}

const mapStateToProps = (state) => ({
    one: state.one,
    two: state.two
})
export default connect(mapStateToProps)(DashBoard);