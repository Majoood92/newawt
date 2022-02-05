import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

//local imports
import { path } from '../GoalSetterInput/GoalSetterInput.js';
import { user } from '../UserLogIn/UserLogIn.js';
//import PathCard from '../PathCard/PathCard';

 
//automatical generation of learning path course list (via map method?)
//useEffect hook for state handling?
//one card per course, button for declaring course as done
//path acception or return to goal setter possible at the bottom of the page


function RecommendedPath({SetView}) {
    
    //function for keeping State - goal: keep path up-to-date
    // useEffect(() => {
    //     //some example effect here: "document.title = `You clicked ${count} times`"
    //     //for (course in path.courses)
    //         //render card with course.title
    //         //also pass course.id to each card
    //         // path.courses.map(course, course.id) => (
    //         //     Course key={course.id} course={course}

    //const CourseMap = path.map(courses => <li key={path.courses.id}>{path.courses.uri}</li>)

    //         )
    //   },) 

    //for debugging and MS 2 demo
    console.log("LearningPath:", JSON.stringify(path, null, 4));

    //logic for changing views 
    const handleUpdate = () => {
        console.log("Update Path");
        SetView(1);
    };
    const handleAccept = () => {
        console.log("Accept Path");
        SetView(3);
    };

    //mapping the path
    //currently I am using the mapping function wrong with the given type of data? 
    //arr.map(function(element, index, array){  }, this);
    // const MapPath = () => {
    //     path.courses.map(path.courses => (
    //         <PathCard 
    //         key={path.props.courses.id}
    //         props={path.props.courses.course} 
    //         /> 
    //    ))
    // };

    
    return (
        <Stack>
            <div>
                {/* put a list here which will then display a card for every course 
                current problem: card not in the middle of the screen -_- */}
                {/* {MapPath} */}
            </div>
            <div> 
                <Button onClick={handleUpdate}>
                    Update
                </Button>
            </div>

            <div>
                <Button onClick={handleAccept}>
                    Accept
                </Button>
            </div>

        </Stack>

    );
}

export default RecommendedPath;
