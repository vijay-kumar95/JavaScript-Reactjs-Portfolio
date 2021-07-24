import React,{ Component} from "react";
import Projects from "./Projects"
import SocialProfiles from "./SocialProfiles"
import profile from "../assets/profile.png";
import Title from "./Title";

class App extends Component {
	state = {setBio : false};

	toggleDisplayBio= () => {
       this.setState({setBio:!this.state.setBio})

	}
	render() {
		return (
			<div>
			<img src={profile} alt="profile" className="profile"/>
			<h1>Hello!</h1>
			    <p>I'm Vijay currently working as Programmer at Cognizant. </p>
		        <Title />
			    <p>I'm looking for MERN Stack developer kinds of work profile.</p>
                {
					this.state.setBio ? (<div>
						<p>I have arround 2+ years experiance in UI devlopment across multiple languages.</p>
						<p>I used to spend my time on coding & solving puzzles.</p> 
						<p>Apart from coding i love music especially 90s songs.</p> 
						<div><button onClick ={this.toggleDisplayBio} >Show less</button></div>
					</div>):( 
						  <div><button onClick ={this.toggleDisplayBio} >Read More</button></div>
					)
				}
				<hr/>
                <Projects/>
				<hr />
                <SocialProfiles />
		  </div>
	 )
 }
}

export default App;
