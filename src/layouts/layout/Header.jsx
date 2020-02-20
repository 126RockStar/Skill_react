import React, { Component } from 'react';
import SearchInput from '../../components/SearchInput';
import { MdPhone } from 'react-icons/md';
import ReactFlagsSelect from 'react-flags-select';

import 'react-flags-select/css/react-flags-select.css';
 
//OR import sass module
// import 'react-flags-select/scss/react-flags-select.scss';


class Header extends Component {
    state = {  }
    render() { 
        return (
            <div className="row navbar-wrapper fixed-top">
                
                <div className="col-2 d-flex justify-content-center align-items-center h-left-col">
                    <a className="brand-logo text-white h-left-font">
                        <image src="sfsdf" alt="logo" />
                        ReactSample
                    </a>
                </div>

                <div className="col-10">
                    <div className="row h-100 ml-auto header-color">
                        <div className="col-3 d-flex justify-content-center align-items-center">
                            <span><MdPhone size="20"/> : +050 2992 709</span>
                            
                        </div>    
                        <div className="col-3 d-flex justify-content-center align-items-center">                            
                            <ReactFlagsSelect 
                                countries={["US", "GB", "FR", "DE", "IT", "NG"]} 
                                 />
                        </div>

                        <div className="col-3 d-flex justify-content-center align-items-center">                            
                            <SearchInput />
                        </div>
                        <div className="col-3 d-flex justify-content-center align-items-center">
                            <span>other</span>
                        </div>
                    </div>
                </div>                
            </div>
           
        );
    }
}
 
export default Header;