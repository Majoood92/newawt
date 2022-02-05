import * as React from 'react';
import {Typography, Button} from '@mui/material';

function PathNotAvailable({SetView}) {

    const handleClick = () => {
        console.log("Change Path Params");
        //change view to goal setter
        SetView(1);
    };
    return (
        <div>
            {/* Basic error message */}
            <Typography
                variant="h5"
                component="div"
                mb={2}
                mt={10}
            >
                :/ Error: There is no path available under the given parameters
            </Typography>

            {/* Basic tip */}
            <Typography
                variant="text"
                component="div"
                mb={2}
                mt={2}
            >
                Your timeframe may be too short. Try changing the end datum!
            </Typography>

            {/*option to return to goal setter for convenience */}
            <Button onClick={handleClick}>
                Set another goal
            </Button>
        </div>
    );
  }
  
  export default PathNotAvailable;