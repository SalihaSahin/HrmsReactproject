import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import EmployerList from './pages/EmployerList';

function App() {
  return (
    <div className="App">
   <Container>
<EmployerList></EmployerList>
   </Container>  
   
    </div>
  );
}

export default App;
