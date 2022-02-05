
import * as React from 'react';
import './App.css';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Typography from '@mui/material/Typography';

/* imports for local components*/
import ResponsiveAppBar  from '../AppBar/AppBar.js';
import GoalSetterInput from '../GoalSetterInput/GoalSetterInput.js';
import UserLogIn from '../UserLogIn/UserLogIn.js';
import RecommendedPath from '../RecommendedPath/RecommendedPath.js'; 
import PathAccepted from '../PathAccepted/PathAccepted';
import PathNotAvailable from '../PathNotAvailable/PathNotAvailable';



function App() {

  //potential solution for data passing problem: just do everything on top level (ha)

 //logic to switch between different views 
  const [active, setActive] = React.useState();
  //const [data, setData] = React.useState();


  const SetView = (active /*, data */) => {
    setActive(active);
    //setData(data);
  };

  const ActiveView = () => {
    switch (active) {
      case 1:
        return <GoalSetterInput SetView={SetView} />;
      case 2:
        return <RecommendedPath SetView={SetView} />;
      case 3:
        return <PathAccepted SetView={SetView} />;
      case 4:
        return <PathNotAvailable SetView={SetView} />;
      default:
        return <UserLogIn SetView={SetView} />;
    }
  };

  return (
   <div className="App">
     {/* Localization Provider: necessary for datepicker (in GoalSetterInput) */}
     <LocalizationProvider dateAdapter={AdapterDateFns}>

     {/* navigation component - imported from folder AppBar*/}
     <ResponsiveAppBar />

      {/* static header and sub header, wrapped in one mui typography element each*/}
      <Typography
      variant="h2"
      component="div"
      mb = {2}
      mt = {2}>
        Learning Path Recommender
      </Typography>

      <Typography
      variant="h4"
      component="div"
      mb = {4}
      mt = {2}>
        Your path to success!
      </Typography>

      {/*current active input - logic above*/}
       {ActiveView()}
       
      {/*For development/ debugging purposes: If you want to work on a specific component,
      comment out the Active-View Hug above and write the component you wish to work
      on, for example: <GoalSetterInput />*/}
   

    </LocalizationProvider>
   </div>
  );
}

export default App;
