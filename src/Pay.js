import React, { Component } from "react";
import './Pay.css'
import Fade  from 'react-reveal/Fade'
export default class Pay extends Component {
	render() {
		const {cartItem} = this.props;
		return (
			<div className="pay">
				<div className="pay__title">
					{cartItem.length === 0 ? (
						<div>
							<h1>
								cart is<span> empty</span>
							</h1>
						</div>
					) : (
						<div>
							<h1>
								cart have:<span> {cartItem.length} item</span>
							</h1>
						</div>
					)}
				</div>
				<Fade left cascade>
					<div>
						{cartItem.map((item) => (
							<div className="pay__data">
								<div>
									<img src={item.image} alt="" width="120px" height="120px" />
									<div>
										<h3>{item.name}</h3>
										<p>{item.type}</p>
										<p>
											{item.rating}X <span>{item.count}</span>
										</p>
										<button onClick={() => this.props.remove(item)}>
											remove
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</Fade>
				<div className="pay__result">
					<h3>Total:</h3>
					<h3>{cartItem.reduce((a, c) => a + c.rating * c.count, 0)}</h3>
					<button> procced</button>
				</div>
			</div>
		);
	}
}
