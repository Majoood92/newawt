import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import axios from 'axios';


import { user } from '../UserLogIn/UserLogIn.js';

/*ToDo
-improve target job input field (mit for-Schleife oder map
*/

/* Input form for the goal setter 
Includes:
* input field to set target job
* the date picker (end date)
* the 'submit' process
  */

/* options for the dropdown menu 'target job options - keeping an alternative array version because the uri's might come in handy*/
const TargetJobOptions = [
    // {id:0, name: 'Web Developer', uri:'http://data.europa.eu/esco/occupation/c40a2919-48a9-40ea-b506-1f34f693496d'},
    // {id:1, name: 'Web Content Manager', uri:'http://data.europa.eu/esco/occupation/a74f6c51-37e5-423e-aa5b-044e98663027'},
    // {id:2, name: 'Software Developer', uri:'http://data.europa.eu/esco/occupation/f2b15a0e-e65a-438a-affb-29b9d50b77d1'},
    // {id:3, name: 'SEO Optimization Expert', uri:'http://data.europa.eu/esco/occupation/092fdeeb-a76f-4ed2-b248-90fd6eaaffef'}
    // {id:4, name: 'User Interface Designer', uri:'http://data.europa.eu/esco/occupation/092fdeeb-a76f-4ed2-b248-90fd6eaaffef'}
    // {id:5, name: 'Software Analyst', uri:'http://data.europa.eu/esco/occupation/04ba4d6c-957d-417f-bf63-5b9e015a9f86'}
    'Web Developer', 'Web Content Manager', 'Software Developer', 'SEO Optimization Expert', 'User Interface Designer', 'Software Analyst'
];

/*initalizing empty path*/
let path = {};

/* function: definition of goal setter logic and appearance */
function GoalSetterInput({SetView}) {

    /*sets the base value for the path */
    //const [path, setPath] = useState();

    /*sets the base value for the Date picker*/ 
    const [endDate, setDate] = useState(null); 

    /*sets the base value for the target Occupation picker */
    const [form, setForm] = useState({ targetOccupation: "" });

    /*handles form changes */
    const handleChange = (e) => {
        console.log(e);
        setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
    };

    /*passes form data to router via axios, gets path in return*/
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form.targetOccupation)
        console.log(endDate)
        
        //submit form + user to router
        axios
        .post(`http://localhost:8000/goal/set`, {
            user,
            goalOccupation: form.targetOccupation,
            targetFinishDate: endDate
        })      
        //save result (learning path) to variable "path"
        .then(res => {
          console.log("RES", res.data)
          path = res.data.learningPath;
          //path.push({ res.bool, res.courses })
          //setPath(res.data);
          console.log({"path:": path});
          console.log({"type:": typeof(path)});
        })   
        .catch(err => console.log(err));

        //set next view in app.js
        //either error message (view 4) or path output (view 2)
        if (path[0] === undefined){
        SetView(4);
        }
        else if(path[0] === false) {
        SetView(4);
        } else
        {SetView(2)}; 
      };


return (
    <Stack 
    component ="form"
    onSubmit={handleSubmit}
    alignItems="center"
    spacing = {2}>

        {/* Input field for setting the target job - options are hardcoded */}
        <FormControl>
            <InputLabel id="targetOccupation">Target Occupation</InputLabel>
            <Select
                required
                label="Target Occupation"
                onChange={handleChange}
                id="targetOccupation"
                name="targetOccupation"
                defaultValue=""
                sx={{width:300}}
                >
                    <MenuItem value={TargetJobOptions[0]}>{TargetJobOptions[0]}</MenuItem>
                    <MenuItem value={TargetJobOptions[1]}>{TargetJobOptions[1]}</MenuItem>
                    <MenuItem value={TargetJobOptions[2]}>{TargetJobOptions[2]}</MenuItem>
                    <MenuItem value={TargetJobOptions[3]}>{TargetJobOptions[3]}</MenuItem>
                    <MenuItem value={TargetJobOptions[4]}>{TargetJobOptions[4]}</MenuItem>
                    <MenuItem value={TargetJobOptions[5]}>{TargetJobOptions[5]}</MenuItem>
            </Select>
        </FormControl>
        


        {/* Datepicker for chosing the end date
        source: https://mui.com/components/date-picker/#BasicDatePicker.js 
        */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                inputFormat="dd/MM/yyyy"
                label="Chose an end date"
                name="selecedDate"
                required
                value={endDate}
                onChange={(selectedDate) => { setDate(selectedDate); console.log(endDate)}}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>

        {/* Submit Button */}
        <Box>
            <Button type="submit">
                Generate Path!
            </Button>
        </Box>
 </Stack>
 
    );
};

export default GoalSetterInput;
export {path};
