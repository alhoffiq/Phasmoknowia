import './App.css';
import Button from 'react-bootstrap/Button';
import ghosts from '../src/ghosts.json';

function App() {
  let evidenceCount = 0;
  let ev1 = "";
  let ev2 = "";
  let ev3 = "";

  function reset() {
    evidenceCount = 0;
    document.getElementById("ev1").innerHTML = "Evidence 1";
    document.getElementById("ev2").innerHTML = "Evidence 2";
    document.getElementById("ev3").innerHTML = "Evidence 3";
    document.getElementById("ghost").innerHTML = "Ghost Type";
    let elements = document.querySelectorAll(".evBtn");
    for (let i = 0; i < elements.length; i++) {
      elements[i].disabled = false;
    }
  }

  function findGhost(ev1, ev2, ev3) {
    for (let i = 0; i < ghosts.length; i++) {
      const ghost = ghosts[i];
      if (ghost.evidence[0] === ev1 || ghost.evidence[1] === ev1 || ghost.evidence[2] === ev1) {
        if (ghost.evidence[0] === ev2 || ghost.evidence[1] === ev2 || ghost.evidence[2] === ev2) {
          if (ghost.evidence[0] === ev3 || ghost.evidence[1] === ev3 || ghost.evidence[2] === ev3) {
            document.getElementById("ghost").innerHTML = `${ghost.type}`;
          }
          else {
            document.getElementById("ghost").innerHTML = "None";
          }
        }
      }
    }
  }

  function addEvidence(evidence) {
    document.getElementById(evidence).disabled = true;
    switch (evidenceCount) {
      case 0:
        ev1 = evidence;
        document.getElementById("ev1").innerHTML = `${evidence}`;

        evidenceCount++
        break;

      case 1:
        ev2 = evidence;
        document.getElementById("ev2").innerHTML = `${evidence}`;

        evidenceCount++
        break;

      case 2:
        ev3 = evidence;

        findGhost(ev1, ev2, ev3)

        document.getElementById("ev3").innerHTML = `${evidence}`;
        let elements = document.querySelectorAll(".evBtn");
        for (let i = 0; i < elements.length; i++) {
          elements[i].disabled = true;
        }

        evidenceCount++
        break;
      default:
        break;
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <h4 className="evBox" id="ev1">Evidence 1</h4>
        </div>
        <div className="col-2">
          <h4 className="evBox" id="ev2">Evidence 2</h4>
        </div>
        <div className="col-2">
          <h4 className="evBox" id="ev3">Evidence 3</h4>
        </div>
        <div className="col-6">
          <h4 className="evBox" id="ghost" >Ghost Type</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-4">
              <Button variant="outline-primary" className="evBtn" id="EMF level 5" onClick={() => addEvidence("EMF level 5")}>Emf level 5</Button>
            </div>
            <div className="col-4">
              <Button variant="outline-primary" className="evBtn" id="Fingerprints" onClick={() => addEvidence("Fingerprints")}>Fingerprints</Button>
            </div>
            <div className="col-4">
              <Button variant="outline-primary" className="evBtn" id="Ghost orbs" onClick={() => addEvidence("Ghost orbs")}>Ghost orbs</Button>
            </div>
            <div className="col-4">
              <Button variant="outline-primary" className="evBtn" id="Spirit box" onClick={() => addEvidence("Spirit box")}>Spirit box</Button>
            </div>
            <div className="col-4">
              <Button variant="outline-primary" className="evBtn" id="Ghost writing" onClick={() => addEvidence("Ghost writing")}>Ghost writing</Button>
            </div>
            <div className="col-4">
              <Button variant="outline-primary" className="evBtn" id="Freezing temps" onClick={() => addEvidence("Freezing temps")}>Freezing temperatures</Button>
            </div>
            <div className="col-4"></div>
            <div className="col-4">
              <Button variant="outline-primary" className="evBtn" id="D.O.T.S projector" onClick={() => addEvidence("D.O.T.S projector")}>D.O.T.S projector</Button>
            </div>
            <div className="col-4">
              <Button variant="outline-primary" onClick={() => reset()}>Reset</Button>
            </div>
          </div>
        </div>
        <div className="col-6">
          <h4 className="evBox" id="result">Ghost possibilities</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
