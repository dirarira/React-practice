import {React, Component} from "react";

class Counter extends Component{
    state = {
        count: 0,
        fixed_number: 1
    };
    render(){
        const {count, fixed_number} = this.state;

        return (
        <>
            <div>Count: {count}, fixed: {fixed_number}</div>
            <button onClick={() => {
                this.setState(prevState=> { return {count: prevState.count + 1}});
            }}>+1</button>
        </>);
    }
}

export default Counter;