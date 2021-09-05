
const PossibilityList = function ({ ghost, evidence, length }) {
    let remainingEvidence = [];
    let height = 100/length + "%";

    console.log(height)

    for (let i = 0; i < 3; i++) {
        switch (evidence.length) {
            case 1:
                if (!ghost.evidence[i].includes(evidence[0])) {
                    remainingEvidence.push(ghost.evidence[i]);
                }
                break;
            case 2:
                if (!ghost.evidence[i].includes(evidence[0]) && !ghost.evidence[i].includes(evidence[1])) {
                    remainingEvidence.push(ghost.evidence[i]);
                }
                break;

            default:
                break;
        }
    }

    return (
        <div className="possibility" style={{height: height}}>
            <h4>{ghost.type} - </h4>
            <h5>{remainingEvidence[0]}</h5>
            {remainingEvidence.length > 1 &&
                <h5> - {remainingEvidence[1]}</h5>}
        </div>
    )
}

export default PossibilityList