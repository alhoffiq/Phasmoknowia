import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

function App() {
  let evidenceCount = 0;

  function addEvidence(type) {
    console.log(type);
    console.log(evidenceCount);
    switch (evidenceCount) {
      case 0:
        evidenceCount++
        break;

      case 1:
        evidenceCount++
        break;

      case 2:
        evidenceCount++
        break;

      case 3:

        break;

      default:
        break;
    }
  }

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
          <Form.Control type="text" placeholder="Ghost type" readOnly  />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-4">
              <Button variant="outline-primary" onClick={() => addEvidence("emf")}>Emf level 5</Button>
            </div>
            <div className="col-4">
              <Button variant="outline-primary" onClick={() => addEvidence("finger")}>Fingerprints</Button>
            </div>
            <div className="col-4">
              <Button variant="outline-primary" onClick={() => addEvidence("orb")}>Ghost orbs</Button>
            </div>
            <div className="col-4">
              <Button variant="outline-primary" onClick={() => addEvidence("box")}>Spirit box</Button>
            </div>
            <div className="col-4">
              <Button variant="outline-primary" onClick={() => addEvidence("writing")}>Ghost writing</Button>
            </div>
            <div className="col-4">
              <Button variant="outline-primary" onClick={() => addEvidence("temps")}>Freezing temperatures</Button>
            </div>
            <div className="col-4"></div>
            <div className="col-4">
              <Button variant="outline-primary" onClick={() => addEvidence("dots")}>D.O.T.S projector</Button>
            </div>
            <div className="col-4">
              <Button variant="outline-primary" onClick={() => addEvidence("dots")}>Reset</Button>
            </div>
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
