
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
            <span>{ghost.type} - </span>
            <span>{remainingEvidence[0]}</span>
            {remainingEvidence.length > 1 &&
                <span> - {remainingEvidence[1]}</span>}
        </div>
    )
}

export default PossibilityList