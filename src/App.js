import './App.css';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'
import FirstPage from './Components/FirstPage.jsx'
import Hire from './Components/Hire.jsx'

function App() {
  return (
    <Router>
        
      <div className="App">
      </div>
      <Route path="/" exact component={FirstPage} />
      <Route path="/second" component={Hire} />
    </Router>
  );
}

export default App;
