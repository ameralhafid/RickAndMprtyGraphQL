import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "@apollo/react-hooks";
import { CharactersContainer} from './containers/CharactersContainer';
import { EpisodeContainer} from './containers/EpisodeContainer';
import {Route, BrowserRouter as Router} from "react-router-dom";
import {Switch} from "react-router";
import {CharacterDetailContainer, EpisodeDetailContainer} from "./containers/CharacterDetailContainer";
import Navbar from "./theme/Navbar";
import './style/style.css';




function App() {
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql'
});

  return (
  <React.Fragment>
    <div className="header">

<div className="text-box">
<h1 className="heading-primary">
  </h1>
  <div className="sidebar">
  <a href="/" className="btn btn-white">Home</a>
  <a href="/characters" className="btn btn-white">Characters</a>
  <a href="/episode" className="btn btn-white">Episodes</a>
  </div>
</div>
</div>

      <Router>
    <Navbar/>
      <Switch>
          <Route exact path="/episode" component={EpisodeContainer}></Route>
          <Route exact path="/characters" component={CharactersContainer}></Route>
          <Route exact path={`/character/:id`}
                 component={CharacterDetailContainer}/>

          <Route exact path={`/episode/:id`}
                 component={EpisodeDetailContainer}/>
      </Switch>
      </Router>
    <ApolloProvider client={client}>
    <main>

        <div className="footer">
            <a href="https://www.sodefa.de/" className="logo">SODEFA</a>

        </div>
   <p> Coding-Challenge Frontend</p>
      </main>
    </ApolloProvider>
    </React.Fragment>
  );

}

/*
ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>,
   document.getElementById('root'));
*/
export default App;
