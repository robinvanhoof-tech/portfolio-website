import { Card, CardMedia, CardActions, CardContent, Typography, Button } from "@mui/material";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle as closeIcon } from "@fortawesome/free-solid-svg-icons";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


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
                    image={props.bannerImg}
                />
                <CardContent>
                    <Typography gutterBottom variant="h1" className="title">
                        {props.name}
                    </Typography>
                    {
                        props.date !== undefined && props.date !== "" &&                        
                        <Typography gutterBottom variant="h2" className="date">
                            {props.date}
                        </Typography>
                    }
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
                        props.liveLink !== undefined && props.liveLink !== "" &&
                        <Button size="small" className="link" href={props.liveLink} rel="noreferrer" target="_blank">View Project</Button>
                    }
                    {
                        props.gitLink !== undefined && props.gitLink !== "" &&
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
                            <img src={props.bannerImg} />
                        </div>

                        <div>
                            <center>
                                <h1 className="title">
                                    {props.name}
                                </h1>                                
                            </center>
                        </div>
                        
                        <div className="popup-body">
                            {props.children}

                            
                            {
                                <div className="links">
                                    <h1>Links</h1>
                                    <div>
                                        {
                                            props.gitLink !== undefined && props.gitLink !== "" &&
                                            <Button size="small" key={props.gitLink} className="link-predefined" href={props.gitLink} rel="noreferrer" target="_blank">GitHub repository</Button>
                                        }
                                        {
                                            props.liveLink !== undefined && props.liveLink !== "" &&
                                            <Button size="small" key={props.liveLink} className="link-predefined" href={props.liveLink} rel="noreferrer" target="_blank">View Project</Button>
                                        }
                                    </div>                                
                                    <div>
                                        {
                                            props.links !== undefined &&
                                            props.links.map(link => {
                                                return (
                                                    <Button size="small" variant="outlined" key={link.text} className="link" href={link.url} rel="noreferrer" target="_blank">{link.text}</Button>
                                                )
                                            })
                                        }
                                    </div>                                    
                                </div>
                            }                            
                        </div>
                        
                        
                        {
                            props.images !== undefined && props.images.length > 0 &&
                            <div>
                                <hr className="devider"/>
                                <div className="image-gallery">                            
                                    <Carousel>
                                        {
                                            props.images.map(image => {
                                                return (
                                                    <div key={image.text}>
                                                        {
                                                            image.media.includes(".mp4") &&
                                                            <video src={image.media} type="video/mp4" autoPlay={true} muted={true} loop/>
                                                        }
                                                        {
                                                            !image.media.includes(".mp4") &&
                                                            <img src={image.media} />
                                                        }
                                                        
                                                        <p className="legend">{image.text}</p>
                                                    </div>
                                                )
                                            })
                                        }                                                                                
                                    </Carousel>
                                </div>
                            </div>
                        }

                        {
                            props.coauthors !== undefined && props.coauthors.length > 0 &&
                            <div>
                                <div className="coauthors">
                                    <hr className="devider" />
                                    <h1>Co-authors</h1>
                                    {
                                        props.coauthors.map(author => {
                                            return (
                                                <div className="author" key={author.name}>
                                                    <a target="_blank" href={author.link}> {author.name}</a>
                                                    <div className="role">{author.role}</div>                                                                                                   
                                                </div>
                                            )
                                        })
                                        
                                    }
                                </div>
                            </div>
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;