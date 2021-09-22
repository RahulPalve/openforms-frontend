import AddForm from "./views/AddForm"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
function App() {
  const [head, SetHead] = useState(["Title", "Description of Form"]);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <h1>
              Welcome to Homepage
      </h1>
          </Route>
          <AddForm />
          <Route path="/new_form" exact>

          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
