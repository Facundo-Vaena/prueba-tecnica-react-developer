import './App.css';
import 'antd/dist/antd.css';
import Movies from './components/Movies';
import Series from './components/Series';
import Home from './components/Home';

import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route path='/movies' component={Movies} />
        <Route path='/series' component={Series} />
      </BrowserRouter>

    </div>
  )
    ;
}

export default App;