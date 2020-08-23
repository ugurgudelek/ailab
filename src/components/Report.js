import React from 'react';
import '../css/styles.css';

function Report (props) {
    return (
        <div>
            <hr/>
                <p className="w-75 inline report-p">{props.info}</p>
        </div>
    );
}
Report.defaultProps = {
    info : "Default",
}
export default Report;
