import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import Page from '../../../components/Page';
import FunFriends from './widgets/FunFriends';

import FirebaseState from './widgets/FirebaseTest';
import FirebaseMonitor from './widgets/FirebaseMonitor';

class CombineFirebase extends Component {
    state = {  }

    render() { 
        return (
            <Page
                className="CombineFirebase mt-5 pt-5"
                title="CombineFirebase"
                breadcrumbs={[{ name: 'CombineFirebase', active: true }]}
            >   
                {/* <FunFriends /> */}
                <FirebaseState />
                {/* <FirebaseMonitor /> */}
            </Page>
          );
    }
}
 
export default CombineFirebase;