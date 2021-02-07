import './App.css';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'
import FirstPage from './Components/FirstPageComponents/FirstPage.jsx'
import Hire from './Components/SecondPageComponents/Hire.jsx'

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
