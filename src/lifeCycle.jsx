import React from 'react';
 
class Test extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = { hello : "  Rakesh..!" };
    }
 
    // componentWillMount()
    // {
    //     console.log("componentWillMount()");
    // }
 
    componentDidMount()
    {
        console.log("componentDidMount()");
    }
 
    changeState()
    {
        this.setState({ hello : " Good Morning!" });
    }
 
    render()
    {
        return (
            <div>
            <h1> Hello{ this.state.hello }</h1>
            <h2>
            <a onClick={this.changeState.bind(this)}>Click Here!</a>
            </h2>
            </div>
        );
    }
 
    shouldComponentUpdate(nextProps, nextState)
    {
        console.log("shouldComponentUpdate()");
        return true;
    }
 
    // componentWillUpdate()
    // {
    //     console.log("componentWillUpdate()");
    // }
 
    componentDidUpdate()
    {
        console.log("componentDidUpdate()");
    }
}
 
export default Test