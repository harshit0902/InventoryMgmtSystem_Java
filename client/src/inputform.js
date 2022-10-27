import React, { Component } from 'react'
const iquality = () =>{
if (item==="a"){
	 <aquality />
	
}else if(item==="b"){
 <bquality />
}
}
const aquality = () =>{
	<select value={quality} onChange={this.handleQualityChange}>
						<option value="q1">q1</option>
						<option value="q2">q2</option>
						<option value="q3">q3</option>
					</select>
}
const bquality = () =>{
	<select value={quality} onChange={this.handleQualityChange}>
						<option value="q4">q4</option>
						<option value="q5">q5</option>
						<option value="q6">q6</option>
					</select>
}

class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {
			item: 'a',
            qty: '5',
			quality: 'q1'
			
		}
	}
    handleQualityChange = event => {
		this.setState({
			quality: event.target.value
		})
	}
	handleQtyChange = event => {
		this.setState({
			qty: event.target.value
		})
	}

	

	handleItemChange = event => {
		this.setState({
			item: event.target.value
		})
	}

	handleSubmit = event => {
		alert(`${this.state.item} ${this.state.qty} ${this.state.quality}`)
		event.preventDefault()
	}

	render() {
		const { item,qty } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Item</label>
					<select value={item} onChange={this.handleItemChange}>
						<option value="a">a</option>
						<option value="b">b</option>
						<option value="c">c</option>
                        <option value="d">d</option>
                        <option value="e">e</option>
                        <option value="f">f</option>
                      
					</select>
				</div>
                <div>
					<label>Quantity </label>
					<input
						type="integer"
						value={qty}
						onChange={this.handleQtyChange}
					/>
				</div>
				<div>
					<label>Choose Quality</label>
                    <iquality />				
					
				</div>
                
				
				<button type="submit">Submit</button>
			</form>
		)
	}
}

export default Form