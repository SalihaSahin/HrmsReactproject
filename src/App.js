import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from '../src/layouts/Navi'
import {Container} from "semantic-ui-react"
import Dashboard from './layouts/Dashboard';
import AddJobAdvertisement from './components/AddJobAdvertisement';
 
function App() {

  return (
    <div className="App">
   
    <Navi></Navi>
   <Container  className="main">
     <Dashboard></Dashboard>
   </Container>


    </div>
  );
}

export default App;
