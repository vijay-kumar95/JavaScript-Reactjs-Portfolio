import React ,{Component} from "react";


const JokeComponent = ({jokeref : {setup , punchline} }) => <p style = { {margin :20 }}>{setup} <em>{punchline}</em></p>
	


class Joke extends Component {
     state = { joke:{}, Jokes:[]};

	 componentDidMount(){
		fetch("https://official-joke-api.appspot.com/random_joke")
		.then(response =>response.json())
		.then(json => this.setState({joke: json}))
		.catch((error) => {
			return alert(error.message)
		})
	 }

    tenMoreJokes = () =>{
		fetch("https://official-joke-api.appspot.com/random_ten")
		.then(response =>response.json())
		.then(json => this.setState({Jokes:json}))
		.catch((error) => {
			return alert(error.message)
		})
	}
	render (){
		return (
			<div>
			   <h2>Highlighted Joke</h2>
			   <JokeComponent jokeref={this.state.joke}/>
			   <hr />
               <h3>Want ten more jokes?</h3>
			   <button onClick={this.tenMoreJokes}> click me</button>
			   {
				   this.state.Jokes.map((Joke)=>{
					  return <JokeComponent key={Joke.id} jokeref={Joke} />
				   })
			   }
			</div>
		)
	}
}

export default Joke;