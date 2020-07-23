import React from 'react';
import '../css/styles.css';

function Report (props) {
    return (
        <div>
            <hr/>
                <p className="w-75 inline report-p">{props.info}Lorem ipsum detur Lorem ipsum dol sit amet. adipisicing elit. Aspernatur, modi?</p>
                <a  className="text-dark w-25 inline-read-more non-under" href={props.link}> <i class="fas fa-caret-right"></i> Read More.</a>
        </div>
    );
}
Report.defaultProps = {
    info : "Info!!",
    link : "#!"
}
export default Report;
