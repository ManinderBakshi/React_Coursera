import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';


    function RenderComments({comments})
    {
        const com = comments.map((comment) => {
            return(
                <div>
                    <p>{comment.comment}</p>
                    <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </div>
            );
        });
        if (comments!=null) 
            return(
                <div>
                    <h4>Comments: </h4>
                        {com}
                </div>
                
            );
        else
            return(
                <div></div>
            );
    }

    const Dishdetail = (props) =>{
        
        if (props.dish!=null)
            return(
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-md-5 m-1">
                    <Card>
                    <CardImg width="100%" src={props.dish.image} />
                    <CardBody>
                        <CardTitle>{props.dish.name}</CardTitle>
                        <CardText>{props.dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.dish.comments} />
                </div>
                </div>
                </div>
            );
        else 
            return(
                <div></div>
            );
    }

export default Dishdetail;