import React from 'react'
import Recaptcha from 'react-google-invisible-recaptcha';
 
class Example extends React.Component {
    constructor( props ) {
      super( props );
      this.state = { value: '' };
      this.onSubmit = this.onSubmit.bind( this );
      this.onResolved = this.onResolved.bind( this );
    }
    render() {
      return (
        <div>
          <input
            type="text"
            value={ this.state.value }
            onChange={ event => this.setState( { value: event.target.value } ) } />
          <button onClick={ this.onSubmit }>Submit</button>
          <Recaptcha
            ref={ ref => this.recaptcha = ref }
            sitekey="6Ld1lNMUAAAAAJvfD6i_gjWdgIkLsQW5qZxiRRSe"
            onResolved={ this.onResolved } />
        </div>
      );
    }
    onSubmit() {
      if ( '' == this.state.value ) {
        alert( 'Validation failed! Input cannot be empty.' );
        this.recaptcha.reset();
      } else {
        this.recaptcha.execute();
      }
    }
    onResolved() {
      alert( 'Recaptcha resolved with response: ' + this.recaptcha.getResponse() );
    }
  }

  export default Example;