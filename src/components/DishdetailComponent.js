import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem, Button} from 'reactstrap';
import {Link} from 'react-router-dom';


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
                        <Breadcrumb>
                            <BreadcrumbItem> <Link to='/menu'> Menu </Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
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
                    <RenderComments comments={props.comments} />
                </div>
                <Button>
                    <span className="fa fa-comment fa-lg">Comment</span>
                </Button>
                </div>
                </div>
            );
        else 
            return(
                <div></div>
            );
    }

export default Dishdetail;