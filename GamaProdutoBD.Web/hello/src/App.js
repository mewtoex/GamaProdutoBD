import logo from './logo.svg';
import './App.css';
import './w3.css';
import { HashRouter } from "react-router-dom";
import Rotas from './routes';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-notifications-component/dist/theme.css'
import { ReactNotifications } from 'react-notifications-component'

function App() {
  return (
    <div className="App">
      <ReactNotifications />
      
      <HashRouter>
        {Rotas()}
      </HashRouter>

    </div>

  );
}

export default App;
