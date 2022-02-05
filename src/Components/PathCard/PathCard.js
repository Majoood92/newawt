import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { user } from '../UserLogIn/UserLogIn.js';



//This card component will be used to display the course list in the reommemdedPath component
//on course completion, an xAPI statement is sent to router: 
//[actor = user][verb (done id)][object(course id)]

//missing: router adress (Daniil)

function PathCard({props}) {

  const handleSubmit = (e) => {
    e.preventDefault()

    //submit "completed course" xAPI statement to router
    axios
    .post(`http://localhost:8000/????`, {
        actor: user,
        verb: "https://w3id.org/xapi/dod-isd/verbs/completed-assignment", //source: http://xapi.vocab.pub/describe/?url=https://w3id.org/xapi/dod-isd/verbs/completed-assignment     
        object: props.id, 
    })      
    //do I need to handle data return?
    .then(res => {
      // console.log("RES", res.data)
      // //path = res.data.learningPath;
      // //path.push({ res.bool, res.courses })
      // setPath(res.data);
      // console.log({"path:": path});
    })   
    .catch(err => console.log(err));

    //delete current card
  };

  return (
    <Card 
    sx={{ maxWidth: 800 }} 
    onSubmit={handleSubmit}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Course Title: {props.title}
        </Typography>

        <Button 
        size="small"
        type="submit"
        >
            Course Completed
        </Button>
      </CardContent>
    </Card>
  );
};

export default PathCard;