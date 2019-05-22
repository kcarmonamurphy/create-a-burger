import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

import Toolbar from 'components/Navigation/Toolbar/Toolbar';
import SideDrawer from 'components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

	state = {
		showSideDrawer: true
	}

	sideDrawerClosedHandler = () => {
		this.setState({showSideDrawer: false});
	}

	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	}

	render() {
		return (
			<Aux>
				<Toolbar clicked={this.sideDrawerToggleHandler} />
				<SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />

				<div>Toolbar, SideDrawer, Backup</div>
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</Aux>
		);
	}
}

export default Layout;