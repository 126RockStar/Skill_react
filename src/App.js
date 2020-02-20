import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'
import { Container, Row, Col} from 'reactstrap'

import { Helmet } from 'react-helmet'
import Header from './layouts/layout/Header'
import PanelBoard from './layouts/layout/PanelBoard'
import store from './stores/store'
import { Provider } from 'react-redux';

// import DashBoard from './layouts/layout/dashboard/DashBoard'
// import ChartSetting from './layouts/layout/charts/ChartSetting'
import Test from './layouts/layout/dashboard/Test'
const DashBoard = React.lazy(()=>import('./layouts/layout/dashboard/DashBoard'))
const ChartSetting = React.lazy(()=>import('./layouts/layout/charts/ChartSetting'))
const HooksTutorial = React.lazy(()=>import('./layouts/layout/hookstutorial/HooksTutorial'))
const CombineFirebase = React.lazy(()=>import('./layouts/layout/combineFirebase/CombineFirebase'))
const CBMtoWeb = React.lazy(()=>import('./layouts/layout/CBMtoWeb/CBMtoWeb'))
const Recaptcha = React.lazy(()=>import('./layouts/layout/ReCaptcha/Recaptcha'))
const ModalSample = React.lazy(()=>import('./layouts/layout/Modal/ModalSample'))

const getBasename = () => {
  return '/'
}

function App() {
  return (
    <Provider store = { store }>
      <Router>
      
        <Helmet>
            <meta charSet="utf-8" />
            <title>React JS Starting</title>
        </Helmet>

        <Container fluid={true} >
          <Header />
          <Row>
            <Col xs="2" className="panelcontainer">
              <PanelBoard />
            </Col>
            <Col xs="10">
              <Switch>  
                <React.Suspense fallback={<di>...loading</di>}>
                  <Route exact path="/" component={DashBoard} />
                  <Route exact path="/chartsetting" component={ChartSetting} />
                  <Route exact path="/hookstutorial" component={HooksTutorial} />
                  <Route exact path="/combinefirebase" component={CombineFirebase} />
                  <Route exact path="/serverconnect" component={CBMtoWeb} />
                  <Route exact path='/recaptcha' component={Recaptcha} />
                  <Route exact path='/modal' component={ModalSample} />
                </React.Suspense>              
              </Switch>
              <Row>
                <Col xs="12">
                  
                </Col>
              </Row>
            </Col>
          </Row>
        </Container> 
    </Router>
  </Provider>
    
/*       
      <div className="bootstrap-wrapper"> 
        <Header />

        <div className="row">
          <div className="col-3 panelcontainer">
              <PanelBoard />
            </div>
            
            <div className="col-9">
              <Switch>
                <Route exact path="/" component={DashBoard} />
                <Route exact path="/chartsetting" component={ChartSetting} /> 
              </Switch>
              <div className="row 7">
                  <div className="col-12 a7">
                      7
                  </div>                
              </div>
            </div>
          </div>
      </div> */
    
    

    
  );
}

export default App;
