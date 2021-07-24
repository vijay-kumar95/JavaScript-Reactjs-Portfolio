import React, { Component } from "react";

const TITLELIST = 
	[
		"i love music",
		"i love to visit new places",
		"i like explore the new things "
	];

class Title extends Component {
	state = { titleIndex : 0};

    componentDidMount(){
		console.log("Title Component has mounted!");

		this.animatedTitle();
	}
	componentWillUnmount(){
		clearInterval(this.TitleInterval);
	}

      animatedTitle = () =>{
       this.TitleInterval = setInterval(() => {
		   const setTitleIndex = (this.state.titleIndex + 1) % TITLELIST.length;
		   this.setState({titleIndex:setTitleIndex});
	   },4000)

	}

	render(){
		const titleInstance = TITLELIST[this.state.titleIndex];
		return (
			<div>{titleInstance}</div>
		)
	}
}

export default Title;
