import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, Button, Input } from 'reactstrap'

import Page from '../../../components/Page';
import ServerConnect from './widgets/ServerConnect';
import UserRegister from './widgets/UserRegister'

import $ from 'jquery'; 


class CBMtoWeb extends Component {
    state = {  }
    render() { 
        return ( 
            <Page
                className="CBMtoWeb mt-5 pt-5"
                title="CBMtoWeb"
                breadcrumbs={[{ name: 'CombineFirebase', active: true }]}
            >   
                <ServerConnect />
                <UserRegister />
            </Page>
         );
    }
}
 
export default CBMtoWeb;