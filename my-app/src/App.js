// import logo from './logo.svg';
import './App.css';
import React from 'react';

class Affiliations extends React.Component{
  render(){
    return(
    <li> {this.props.a} </li>
    )
  }
}

class Starwars extends React.Component{
  constructor(){
    super()
    this.state={
      Name : null,
      Height : null,
      Homeworld : null,
      Species : null,
      image : null,
      affiliations : [],
      Loaded : false
    }
  }
  getChar(){
    
    const num= Math.floor(Math.random()*87 +1)
    const url= `https://akabab.github.io/starwars-api/api/id/${num}.json`
    fetch(url)
       .then(response=>response.json())
       .then(data=>{       
        this.setState({
          Name : data.name,
          Height : data.height,
          Homeworld : data.homeworld,
          Species : data.species,
          image : data.image,
          affiliations : data.affiliations,
          Loaded : true
        })
      })
    
  }
  render (){
    const affs= this.state.affiliations.map((a,i)=>{
      return <Affiliations key={i} a={a}/>
    })
    return(
     <div>
       {
        this.state.Loaded &&
        <div>
          <div className='img'> 
           <img src={this.state.image}  alt='not available'></img>
          </div>
          <h1>{this.state.Name}</h1>
          <p>Height: {this.state.Height}</p>
          <p>Homeworld: {this.state.Homeworld}</p>
          <p>Species: {this.state.Species}</p>
          <p>
            Affiliations :
            
          </p>
          <ul>
             {affs}
            </ul>
         
        </div>
       }
       
       <button 
        type='button' 
        onClick={()=>{this.getChar()}} 
        className='btn'
        >
        Generate Character
       </button>
     </div>
    )
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Starwars/>
      </header>
    </div>
  );
}

export default App;
