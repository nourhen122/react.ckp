import logo from './logo.svg';
import './App.css';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <>
  <Form.Label htmlFor="inputPassword5">Password</Form.Label>
  <Form.Control
    type="password"
    id="inputPassword5"
    aria-describedby="passwordHelpBlock"
  />
  <Form.Text id="passwordHelpBlock" muted>
    Your password must be 8-20 characters long, contain letters and numbers, and
    must not contain spaces, special characters, or emoji.
  </Form.Text>
</>
      
    </div>
  );
}

export default App;
