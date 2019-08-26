import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component.js";
import ExerciseList from "./components/exercise-list.component.js";
import EditExercise from "./components/edit-exercise.component.js";
import CreateUser from "./components/create-user.component.js";
import CreateExercise from "./components/create-exercise.component.js";

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Route path="/" exact component = {ExerciseList} />
      <Route path="/edit/:id" exact component = {EditExercise} />
      <Route path="/create" exact component = {CreateExercise} />
      <Route path="/user" exact component = {CreateUser} />
    </Router>
  );
}

export default App;
