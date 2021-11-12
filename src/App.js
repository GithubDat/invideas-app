
import React, { useState } from 'react';
import './App.css';
import Challenge from "./components/Challenge/Challenge.jsx"
import Login from './components/Login/Login';
import { Route, Switch, Redirect } from "react-router-dom"
import NewItem from './components/NewChallenge/NewItem';


// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: null,
//       isAuthenticated:false
//     }
//     this.getId = this.getId.bind(this);
//   }

//   getId (e) {
//     this.setState({
//      isAuthenticated:true,
//       id: e.target.value
//     })
//   }
//   render() {
//     console.log("ID",this.state)
//     return (

//         <div className="App">
//       <Switch>
//         <Route path="/" exact>
//           <Login getId={this.getId}  />
//           </Route>

//         {this.state.isAuthenticated ?<Route path="/home" exact >
//           <Challenge id = {this.state.id}/>
//           </Route>:<Redirect to="/"/>}
//         <Route path="/new"  exact component={NewItem}   />
//        </Switch>

//       </div>
//     )
//   }
// }

/* Converted into Functional Component */

export default function App() {

  const [ isAuthenticated, setIsAuthenticated ] = useState(null);
  const [ id, setId ] = useState()

  const getId = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setId(e.target.value);
  }

  return (

    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Login getId={getId} />
        </Route>

        {isAuthenticated ? <Route path="/home" exact >
          <Challenge id={id} />
        </Route> : <Redirect to="/" />}

        <Route path="/new" exact component={NewItem} />
      </Switch>
    </div>
  )
}
