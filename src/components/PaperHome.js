import React from 'react';
import '../css/styles.css';

function Report (props) {
    return (
        <div>
            <hr/>
                <p className="w-100 inline report-p">- {props.info}</p>
        </div>
    );
}
Report.defaultProps = {
    info : "Info!!",
}
export default Report;
