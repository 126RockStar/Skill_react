import React, { useState, useEffect, useRef  } from 'react'
import Recaptcha from 'react-google-invisible-recaptcha';
import moment from 'moment';

const HookGoogleRecaptchaThree = () => {

    const [ value, setValue ] = useState('aaa')

    let recaptcha = useRef(null)

    const onSubmit = () => {
        if ( '' == value ) {
            alert( 'Validation failed! Input cannot be empty.' );
            recaptcha.reset();
          } else {
            recaptcha.execute();
          }
            
          console.log(moment().startOf('hour').fromNow())
    }   
    
    const onResolved = () => {
        alert( 'Recaptcha resolved with response: ' + this.recaptcha.getResponse() );
    }

    return(      
        <div>

            <button onClick={ onSubmit }>Submit</button>
            <Recaptcha
                ref={ref => recaptcha = ref}
                sitekey="6Ld1lNMUAAAAAJvfD6i_gjWdgIkLsQW5qZxiRRSe"
                onResolved={ onResolved } />
        </div>       
    )

}

export default HookGoogleRecaptchaThree;