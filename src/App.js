import "./App.css";
import React, { Component } from "react";
import movies from "./movies";
import Cart from "./Cart";
import Pay from "./Pay";
export default class App extends Component {
	state = { movies: movies, cartItem: [] };


	addMovie = (cart) => {
		const cartItem = this.state.cartItem;
		let alreadyInCart = false;
		cartItem.forEach((item) => {
			if (item.id === cart.id) {
				item.count++;
				alreadyInCart = true;
			}
		});
		if (!alreadyInCart) {
			cartItem.push({ ...cart, count: 1 });
		}
		this.setState({ cartItem });
	};

  remove=(cart)=>{
  const cartItem = this.state.cartItem;
  this.setState({cartItem:cartItem.filter(x=>x.id!==cart.id)})

  }

	//filtering
	sortting = () => {
		this.setState({
			movies: movies.sort((a, b) => (a.rating > b.rating ? -1 : 1)),
		});
	};

	filter = () => {
		this.setState({
			movies: movies.filter((a) => a.rating >= 3),
		});
	};

	render() {
		return (
			<div className="App">
				<header>
					<div className="header__logo">
						<h1>header</h1>
					</div>
					<div className="header__content">
						<h2>signin </h2>
						<h2>login</h2>
					</div>
				</header>
				<main>
					<div className="main__div__one">
						<Cart
							data={this.state.movies}
							sortting={this.sortting}
							filter={this.filter}
							addMovie={this.addMovie}
						/>
					</div>
					<div className=" main__div__two">
						<Pay remove={this.remove} cartItem={this.state.cartItem} />
					</div>
				</main>
				<footer>
					<h1>footer</h1>
				</footer>
			</div>
		);
	}
}
