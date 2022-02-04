import React, {Component} from 'react';
import '../css/ValidationSample.css';

class ValidationSample extends Component{
    input = React.createRef();

    state={
        password: '',
        clicked: false,
        validate: false
    }

    handleChange = (e) =>{
        this.setState({password: e.target.value});
    }

    handleButtonClick = () => {
        this.setState({clicked: true, validate: this.state.password === "0000"});
        this.input.current.focus();
    }

    render(){
        return(
            <div>
                <input type="password" value={this.state.password} ref={this.input}
                        onChange={this.handleChange} className={this.state.clicked ? (this.state.validate ? 'success' : 'failure') : ''} />
                <button onClick={this.handleButtonClick} >Validation</button>
            </div>
        );
    }
}

export default ValidationSample;