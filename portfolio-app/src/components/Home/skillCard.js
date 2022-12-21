import React from "react";

const SkillCard = (props) => { 
    return (
        <div className="flex-item">
            <div className="text-card">
                <div className="skillName">{props.skill}</div>
                { props.learnedAt !== undefined &&
                    props.learnedAt.map(element => {
                        return (
                        <div className="learnedAt">
                            {element}
                            {console.log("Printed " + element)}
                        </div>);
                    })
                }


                { props.certifications !== undefined &&
                    <div className="certification-container">
                        {
                            props.certifications.length === 1 ?
                            <div className="title">Certification</div> :
                            <div className="title">Certifications</div>
                        }
                        
                        {    
                            props.certifications.map(element => {
                                return (
                                    <div className="certification">
                                        {element}
                                    </div>
                                );
                            })
                        }
                    </div>
                }
            </div> 
        </div>
    );
}

export default SkillCard;