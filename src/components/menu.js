import React from 'react';
import Burger  from './Burger';
import Nav from './Nav';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen(){
	this.setState({
		open: !this.state.open
	});
  }

   render() {

	return (
		<div>
          <Burger open={this.state.open} toggleOpen={this.toggleOpen}/>
          <Nav open={this.state.open} />
        </div>
	)}
};


export default Menu;