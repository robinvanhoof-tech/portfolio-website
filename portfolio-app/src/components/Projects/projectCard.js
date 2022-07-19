import { Card, CardMedia, CardActions, CardContent, Typography, Button } from "@mui/material";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle as closeIcon } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = (props) => {
    const [isDetailsHidden, setDetailsHidden] = React.useState(true);

    
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

            <Card className="card">
                <CardMedia 
                    component="img"
                    alt="project image"
                    height="140"
                    image={props.img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h1" className="title">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" className="description">
                        {props.description}
                    </Typography>
                </CardContent>

                <CardActions>
                    {
                        props.children !== undefined &&
                        <Button size="small" className="button-details" onClick={() => { setDetailsHidden(false) }}>Details</Button>
                    }   
                </CardActions>
                <CardActions>             
                    {
                        props.liveLink !== undefined &&
                        <Button size="small" className="link" href={props.liveLink} rel="noreferrer" target="_blank">View Project</Button>
                    }
                    {
                        props.gitLink !== undefined &&
                        <Button size="small" className="link" href={props.gitLink} rel="noreferrer" target="_blank">GitHub repository</Button>
                    }
                </CardActions>
                
                <CardContent>
                    {
                        props.skills !== undefined &&
                        <Typography>
                            Skills used in this project:
                            <br />
                            {
                                props.skills.map(skill => {
                                    return (
                                        <span key={skill} style={{marginRight: "5px"}}>{skill + " "}</span>
                                    );
                                })
                            }
                        </Typography>
                    }
                </CardContent>                
            </Card>

            <div hidden={isDetailsHidden} className="popup" onClick={(e) => { if(e.target.className === "popup") { setDetailsHidden(true) }}} >
                <div className="wrapper">
                    <div className="close-button" onClick={() => { setDetailsHidden(true) }}><FontAwesomeIcon icon={closeIcon} /></div>
                    <div className="text-area">
                        <div className="image-area">
                            <img src={props.img} />
                        </div>
                        
                        {props.children}
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default ProjectCard;