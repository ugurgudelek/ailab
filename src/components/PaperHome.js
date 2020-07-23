import React from 'react';
import '../css/styles.css';

function Report (props) {
    return (
        <div>
            <hr/>
                <p className="w-75 inline report-p">{props.info}Lorem ipsum detur Lorem ipsum dolor sit amet. adipisicing elit. Aspernatur, modi?</p>
        </div>
    );
}
Report.defaultProps = {
    info : "Info!!",
    link : "#!"
}
export default Report;
