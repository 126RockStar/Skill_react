import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import Page from '../../../components/Page';

//hooks components
import Counter from './widget/Counter'
import Info from './widget/Info'
import ContextSample from './widget/ContextSample';
import ReducerCounter from './widget/ReducerCounter';
import ReducerInfo from './widget/ReducerInfo';
import UseMemoAverage from './widget/UseMemoAverage';

class HooksTutorial extends Component {
    state = {  }
    render() { 
        return (
            <Page
                className="HooksTutorial mt-5 pt-5"
                title="HooksTutorial"
                breadcrumbs={[{ name: 'HooksTutorial', active: true }]}
            >               
                <Counter></Counter>
                <br />
                <Info></Info>
                <br />
                <ContextSample />
                <br />
                <ReducerCounter />
                <br />
                <ReducerInfo />
                <br />
                <UseMemoAverage />
            </Page> 
                
          );
    }
}
 
export default HooksTutorial;