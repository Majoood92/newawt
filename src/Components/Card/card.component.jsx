import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CourseCard() {
  const [completed, setCompleted] = useState(false);

  const completeHandler = () => {
    setCompleted(!completed);
  };

  return (
    <div>
      <Card
        sx={{ maxWidth: 1000 }}
        //sx={{  width: ['50%', '700%', '150%'], }}
        style={{ background: completed ? "#43DA03" : "" }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Course Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Course details and description. about the course,
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={(e) => completeHandler(e.target.value)}>
            Done
          </Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
