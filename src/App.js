import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <Form.Control type="text" placeholder="Evidence 1" readOnly />
        </div>
        <div className="col-2">
          <Form.Control type="text" placeholder="Evidence 2" readOnly />
        </div>
        <div className="col-2">
          <Form.Control type="text" placeholder="Evidence 3" readOnly />
        </div>
        <div className="col-6">
          <Form.Control type="text" placeholder="Ghost type" readOnly />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-4">
              <Button variant="outline-primary" data="emf">Emf level 5</Button>
            </div>
            <div className="col-4">
              <Button variant="outline-primary" data="finger">Fingerprints</Button>
            </div>
            <div className="col-4">
              <Button variant="outline-primary" data="orb">Ghost orbs</Button>
            </div>
            <div className="col-4">
              <Button variant="outline-primary" data="box">Spirit box</Button>
            </div>
            <div className="col-4">
              <Button variant="outline-primary" data="writing">Ghost writing</Button>
            </div>
            <div className="col-4">
              <Button variant="outline-primary" data="temps">Freezing temperatures</Button>
            </div>
            <div className="col-4"></div>
            <div className="col-4">
              <Button variant="outline-primary" data="dots">D.O.T.S projector</Button>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
        <div className="col-6">
          <Form.Control className="possibilities" type="text" placeholder="Ghost possibilities" readOnly />
        </div>
      </div>
    </div>
  );
}

export default App;
