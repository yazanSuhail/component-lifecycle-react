import React, { Component } from 'react';


class ComponentTest extends Component {

	constructor(props){
		super(props)
		this.state = { num: 5 }
		this.addNumber = this.addNumber.bind(this)
		
	}


	static getDerivedStateFromProps (props, state){
		console.log("getDrivedStateFromProps...")
		// console.log(props)
		// console.log(state)
		// return {num: 6}
		return null
	}
	componentDidMount(){
		console.log('componentDidMount..')
	}

	shouldComponentUpdate(nextProps, nextState){
		console.log('shouldComponentUpdate..')
		console.log('latestState', this.state)
		console.log('next State', nextState)
		return true
	}

	componentDidUpdate(){
		console.log("Component Did Update..")
		
	}

	addNumber(){
		let latestNumber = this.state.num
		latestNumber += 1
		this.setState({num: latestNumber})
	}
	render() {
		
        return (
           <div>
				<p>{this.props.title}</p>
				<p>{this.state.num}</p>
				<button onClick={this.addNumber} >Add number</button>
			</div>
        );
	}
}

export default ComponentTest