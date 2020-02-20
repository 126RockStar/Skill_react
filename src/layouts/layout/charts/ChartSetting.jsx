import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, Button, Input } from 'reactstrap'
import { Line, Pie, Doughnut, Bar, Radar, Polar } from 'react-chartjs-2'

import {  NumberWidget } from '../../../components/Widget';
import Page from '../../../components/Page';

import { getColor } from '../../../utils/colors';
import { randomNum } from '../../../utils/demos';

import $ from 'jquery'; 

import { onGetDataOne, onClearData1 } from '../../../stores/getdataone'
import { onGetDataTwo, onClearData2 } from '../../../stores/getdatatwo'
import { connect } from 'react-redux';

class ChartSetting extends Component {
    state = {
        dataset1: {
            label:'',
            backgroundColor: 'primary',
            borderColor: 'primary',
            borderWidth: 1,
            data: new Array().fill(null)
        },

        dataset2: {
            label:'',
            backgroundColor: 'primary',
            borderColor: 'primary',
            borderWidth: 1,
            data: new Array().fill(null)
        },     
        value1:null,
        value2:null
    }    

    handleChange1One = (e) =>{
        this.setState({
            dataset1:  {...this.state.dataset1, label:e.target.value}
        })
        // console.log(this.state.dataset1);
    }
    handleChange1Two = (e) =>{
        this.setState({
            dataset1:  {...this.state.dataset1, backgroundColor:e.target.value, borderColor:e.target.value}
        })
        // console.log(this.state.dataset1);
    }
    handleChange1Three = (e) =>{
        this.setState({
            value1: e.target.value
        })
        // console.log(this.state.value1);
    }    
    handleInputData1Submit = () =>{
        const { onGetDataOne } = this.props;
        let { data } = this.state.dataset1;
        data.push(this.state.value1)
        
        if(data.length<7){
            this.setState({
                dataset1:  {...this.state.dataset1, data:data}
            })
            // console.log(this.state.dataset1);
            onGetDataOne(this.state.dataset1);
        }
        
    }

    handleClearData1Submit = () =>{        
        this.setState(
            {
                dataset1:{...this.state.dataset1, data:[]}
            }
        )
        const { onClearData1 } = this.props;
        onClearData1();
        // console.log(this.state.dataset1);
    }

    handleChange2One = (e) =>{
        this.setState({
            dataset2:  {...this.state.dataset2, label:e.target.value}
        })
        // console.log(this.state.dataset1);
    }
    handleChange2Two = (e) =>{
        this.setState({
            dataset2:  {...this.state.dataset2, backgroundColor:e.target.value, borderColor:e.target.value}
        })
        // console.log(this.state.dataset1);
    }
    handleChange2Three = (e) =>{
        this.setState({
            value2: e.target.value
        })
        // console.log(this.state.value1);
    }    
    handleInputData2Submit = () =>{
        const { onGetDataTwo } = this.props;
        let { data } = this.state.dataset2;
        data.push(this.state.value2)
        
        if(data.length<7){
            this.setState({
                dataset2:  {...this.state.dataset2, data:data}
            })
            // console.log(this.state.dataset1);
            onGetDataTwo(this.state.dataset2);
        }
        
    }
    handleClearData2Submit = () =>{        
        this.setState(
            {
                dataset2:{...this.state.dataset2, data:[]}
            }
        )
        const { onClearData2 } = this.props;
        onClearData2();
        // console.log(this.state.dataset1);
    }


    
    render() { 

        const { one, two } = this.props;

        return (
            <Page
                className="ChartSetting mt-5 pt-5"
                title="ChartSetting"
                breadcrumbs={[{ name: 'ChartSetting', active: true }]}
            >
                <Row>
                    <Col lg={5} className="ml-auto">
                        <Card>
                            <CardHeader>Input data-1</CardHeader>
                            <CardBody>
                                <Input type="text" placeholder="label name" onChange={this.handleChange1One}/>
                                <br/>
                                <Input type="select" name="select" onChange={this.handleChange1Two}>
                                    <option>primary</option>
                                    <option>secondary</option>
                                    <option>success</option>
                                    <option>info</option>
                                    <option>warning</option>
                                    <option>danger</option>
                                </Input>
                                <br/>   
                                <Input
                                    type="number"
                                    name="number"
                                    id="exampleNumber1"
                                    placeholder="data"
                                    onChange={this.handleChange1Three}
                                    />
                                <br/>
                                <Button color="primary" onClick={this.handleInputData1Submit} disabled={!this.state.value1}>Add data</Button>
                                <br/>
                                <br/>
                                <Button color="primary" onClick={this.handleClearData1Submit} >Clear data</Button>
                            </CardBody>
                        </Card>                        
                    </Col>

                    <Col lg={5} className="mr-auto">
                    <Card>
                        <CardHeader>Input data-2</CardHeader>
                            <CardBody>
                                <Input placeholder="label name" onChange={this.handleChange2One}/>
                                <br/>
                                <Input type="select" name="select" onChange={this.handleChange2Two}>
                                    <option>primary</option>
                                    <option>secondary</option>
                                    <option>success</option>
                                    <option>info</option>
                                    <option>warning</option>
                                    <option>danger</option>
                                </Input>
                                <br/>   
                                <Input
                                    type="number"
                                    name="number"
                                    id="exampleNumber2"
                                    placeholder="data"
                                    onChange={this.handleChange2Three}
                                    />
                                <br/>
                                <Button color="primary" onClick={this.handleInputData2Submit } disabled={!this.state.value2}>Add data</Button>
                                <br/>
                                <br/>
                                <Button color="primary" onClick={this.handleClearData2Submit} >Clear data</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col lg={5} className="ml-auto">
                        <Card className="h-100">
                            <CardHeader>View data-1</CardHeader>
                            <CardBody>
                                <Input 
                                    type="select"
                                    name="selectMulti"
                                    id="value-1"
                                    multiple>
                                    {
                                        one.data.map( (d,index)=>{
                                            return <option key={index}>{d}</option>;
                                        })
                                    }
                                </Input>
                            </CardBody>
                        </Card>  
                    </Col>
                    <Col lg={5} className="mr-auto">
                        <Card className="h-100">
                            <CardHeader>View data-2</CardHeader>
                            <CardBody>
                                <Input 
                                    type="select"
                                    name="selectMulti"
                                    id="value-2"
                                    multiple>
                                    {
                                        two.data.map( (d,index)=>{
                                            return <option key={index}>{d}</option>;
                                        })
                                    }                                    
                                </Input>
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

export default connect(mapStateToProps,{
    onGetDataOne,
    onGetDataTwo,
    onClearData1,
    onClearData2
})(ChartSetting);