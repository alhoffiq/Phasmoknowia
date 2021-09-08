import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ghosts from '../src/ghosts.json';
import PossibilityList from '../src/PossibilityList.js';
import Form from 'react-bootstrap/Form';

function App() {
  const [collectedEvidence, setEvidence] = useState([]);
  let [evidenceCount, setCount] = useState(0);
  const [possibilities, setPossibilities] = useState([]);

  const objectives =
    <Form.Select className="info">
      <option style={{ display: "none" }}></option>
      <option>Find evidence of paranormal activity with an EMF Reader</option>
      <option>Capture a photo of the ghost</option>
      <option>Detect a ghost's presence with a Motion Sensor</option>
      <option>Prevent the ghost from hunting with a Crucifix</option>
      <option>Have a member of your team witness a Ghost event</option>
      <option>Cleanse the area near the ghost using Smudge Sticks</option>
      <option>Get a Ghost to walk through Salt</option>
      <option>Repel the Ghost with a Smudge Stick while it's chasing someone</option>
      <option>Get the Ghost to blow out a Candle</option>
      <option>Have a member of the team escape the Ghost during a Hunt</option>
      <option>Get an average sanity below 25%</option>
    </Form.Select>

  function reset() {
    setCount(0);
    document.getElementById("ev1").innerHTML = "Evidence 1";
    document.getElementById("ev2").innerHTML = "Evidence 2";
    document.getElementById("ev3").innerHTML = "Evidence 3";
    document.getElementById("ghost").innerHTML = "Ghost Type";
    setEvidence([]);
    setPossibilities([]);
    let elements = document.querySelectorAll(".evBtn");
    for (let i = 0; i < elements.length; i++) {
      elements[i].disabled = false;
    }
  }

  function clear() {
    const elements = document.getElementsByClassName("info");
    for (let i = 0; i < elements.length; i++) {
      elements[i].value = "";
    }
  }

  /**
   * 
   * @param {array} providedEvidence  Array of evidence found
   */
  function findGhost(providedEvidence) {
    for (let i = 0; i < ghosts.length; i++) {
      const ghost = ghosts[i];
      const isPossible = providedEvidence.every(evidence => ghost.evidence.includes(evidence));
      if (isPossible) {
        document.getElementById("ghost").innerHTML = `${ghost.type}`;
        break;
      } else {
        document.getElementById("ghost").innerHTML = "None";
      }
    }
  }

  /**
 * Returns list of possible ghosts given a list of found evidence
 * @param {array} providedEvidence Array of evidence found
 * @returns An array of possible ghost objects
 */
  function findPossibleGhosts() {
    const possibleGhosts = ghosts.filter((ghost) => {
      const isPossible = collectedEvidence.every(evidence => ghost.evidence.includes(evidence));
      return isPossible;
    });
    setPossibilities(possibleGhosts)
  }
  /**
   * 
   * @param {string} evidence String of evidence selected
   */
  function addEvidence(evidence) {
    document.getElementById(evidence).disabled = true;
    switch (evidenceCount) {
      case 0:
        collectedEvidence.push(evidence)
        findPossibleGhosts();
        document.getElementById("ev1").innerHTML = `${evidence}`;
        setCount(1);
        break;

      case 1:
        collectedEvidence.push(evidence);
        findPossibleGhosts();
        document.getElementById("ev2").innerHTML = `${evidence}`;
        setCount(2)
        break;

      case 2:
        collectedEvidence.push(evidence);
        setPossibilities([]);
        findPossibleGhosts();

        findGhost(collectedEvidence)

        document.getElementById("ev3").innerHTML = `${evidence}`;
        let elements = document.querySelectorAll(".evBtn");
        for (let i = 0; i < elements.length; i++) {
          elements[i].disabled = true;
        }

        evidenceCount++;
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
              <Button variant="outline-primary" className="resBtn" onClick={() => reset()}>Reset</Button>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ol className="possibilitiesBox">
            {possibilities.length > 1 &&
              possibilities.slice(0, possibilities.length).map(possibility => {
                console.log(possibilities)
                return (
                  <PossibilityList
                    key={possibility.type}
                    ghost={possibility}
                    evidence={collectedEvidence}
                    length={possibilities.length}
                  />
                );
              })}
            {possibilities.length === 1 &&
              <div className="attributesBox">
                <div className="strength">
                  <h4 className="attributes">Strength: </h4>
                  <p>{possibilities[0].strength}</p>
                </div>
                <div className="weakness">
                  <h4 className="attributes">Weakness: </h4>
                  <p>{possibilities[0].weakness}</p>
                </div>
              </div>
            }
            {possibilities.length === 0 && evidenceCount === 0 &&
              <div className="emptyBox">
                <h4>Possible ghosts</h4>
              </div>
            }
          </ol>
        </div>
      </div>
      <div className="row text-center infoBox">
        <div className="col-3 infoCol">
          <Form.Label>Ghost's Name</Form.Label>
          <Form.Control as="textarea" rows={1} className="info text-center"></Form.Control>
        </div>
        <div className="col-3 infoCol">
          <div className="row">
            <div className="col">
              <Form.Label>Responds to</Form.Label>
              <Form.Select className="info">
                <option style={{ display: "none" }}></option>
                <option>Everyone</option>
                <option>People alone</option>
              </Form.Select>
            </div>
          </div>
          <div className="row"><pre> </pre></div>
          <div className="row">
            <div className="col">
              <Button variant="outline-primary" id="clear" onClick={() => clear()}>Clear</Button>
            </div>
          </div>
        </div>
        <div className="col-6 infoCol">
          <Form.Label>Optional objectives</Form.Label>
          {objectives}
          {objectives}
          {objectives}
        </div>
      </div>
    </div>
  );
}

export default App;
