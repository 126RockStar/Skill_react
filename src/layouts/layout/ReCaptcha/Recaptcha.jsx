import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import Page from '../../../components/Page';

import ImageUpload from './Example/ImageUpload';

// import { loadReCaptcha } from 'react-recaptcha-google'
import { loadReCaptcha } from 'react-recaptcha-v3'
// import { ReCaptcha } from 'react-recaptcha-google'

import HookGoogleRecaptchaThree from './Example/HookGoogleRecaptchaThree'

class Recaptcha extends Component {
    state = {  }    
    // componentDidMount() {
    //     // loadReCaptcha();
    //     loadReCaptcha('6Ldjf9EUAAAAAGAKV-tHsCQz6z5yZNrbAyPUuvTM');
    // }

    // onhandleRecaptcha = () =>{
    //     console.log('sdfasdfadf');
    // }
    render() { 
        return (
            
            <Page
                className="Google Recaptcha mt-5 pt-5"
                title="How to use react-recaptcha-google?"
                breadcrumbs={[{ name: 'Google Recaptcha', active: true }]}
            >               
                {/* <ExampleComponent/> */}
                {/* <HookGoogleRecaptcha /> */}
                <HookGoogleRecaptchaThree />
                <br/>
                <ImageUpload />      
            </Page>           
          );
    }
}
 
export default Recaptcha;