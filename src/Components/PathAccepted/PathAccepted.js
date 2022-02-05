import { Typography , Button } from '@mui/material';
import * as React from 'react';




function PathAccepted({SetView}) {

    const handleClick = () => {
        console.log("Start Over");
        SetView();
    };
    return (
        <div>
            <Typography
                variant="h5"
                component="div"
                mb={2}
                mt={10}
            >
                Thank you for using the Learning Path Recommender!
            </Typography>

            {/*The button makes clicking through more convenient */}
            <Button onClick={handleClick}>
                Start from the beginning
            </Button>
        </div>
    );
  };

  export default PathAccepted;