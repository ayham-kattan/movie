import React, { Component } from "react";
import './Cart.css'
import Fade from 'react-reveal/Fade'
export default class Cart extends Component {
	render() {
		return (
			<div>
				<div className="filter">
					<div className="filtering">
						<h2>sort</h2>
						<button onClick={this.props.sortting}>from high</button>
					</div>
					<div className="filtering">
						<h2>filter</h2>
						<button onClick={this.props.filter}> filter up than 3 </button>
					</div>
				</div>
                    	<Fade bottom cascade>
				<div className="cart">
				
						{this.props.data.map((item) => (
							<div key={item.id} className="cart__data">
								<h3>{item.name}</h3>
								<img
									src={item.image}
									alt={item.name}
									width="300px"
									height="370px"
								/>

								<p>{item.rating}</p>
								<p>{item.type}</p>

								<button
									onClick={() => {
										this.props.addMovie(item);
									}}
								>
									add Wish list
								</button>
							</div>
						))}
					
				</div>
                </Fade>
			</div>
		);
	}
}
