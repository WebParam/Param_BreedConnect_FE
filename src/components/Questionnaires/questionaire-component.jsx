
import { useEffect, useState } from "react";
import Layout from "../Partials/Layout";
import './questionnaires.css'
import questionnaires from "../../data/questionnaires.json"
import { Button, Grid, LinearProgress, Icon } from '@mui/material';
import { AccountCircle, Email, Phone,SourceRoundedIcon } from '@mui/icons-material';
import PopupModal from '../popupModal/index';



export default function QuestionnaireComponent() {
    const [open, setOpen] = useState(false);
    const [questions, setQuestions] = useState(questionnaires);
    const [index, setIndex] = useState(null);
    const [mainText, setMainText] = useState("Hi, to ensure that we create a safe community for breeders all breeders are screened and approved by Breed Connect");


    const [start, setStart] = useState('Start questionnaire');

    const [progress, setProgress] = useState(0); // Initial progress value

  const handleButtonClick = (value) => {
    // Update the progress bar when a button is clicked
    setProgress(value);
  };
    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch(questionnaires);
                //const data = await response.json();
                setQuestions(questionnaires.sort((a, b) => a.order - b.order));
                console.log("", questions)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [questions]);

    const handleOpen = (e) => {
        e.preventDefault();
        setOpen(true);
      };
    
      const handleClose = () => {
        //setIndex(0);
        setOpen(false);
      };

    return (

            <div className="questionnaire-container">
                {
                    index === null ? 
                    // <div className="header-section">
                    //     {mainText}
                       
                    //  </div> 
                     <div>
                         <Grid container spacing={3}>
      <Grid item xs={12}>
        <center><h1>Complete Profile</h1></center>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="outlined"
          startIcon={<AccountCircle />}
          onClick={() => handleButtonClick(25)}
        >
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="outlined"
          startIcon={<Email />}
          onClick={() => handleButtonClick(50)}
        >
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="outlined"
          startIcon={<Phone />}
          onClick={() => handleButtonClick(75)}
        >
        </Button>
      </Grid>
      <Grid item xs={12}>
        <LinearProgress variant="determinate" value={progress} />
      </Grid>
    </Grid>
                     </div>
                     : ''
                }
                {
                    index === null ? <div className="question-section">Please complete this questionnaire to get started</div> : ""

                }
                <div >
                    {/* <center><button onClick={handleClick} className="btn-create">{start}</button></center> */}
                    <center>
                    <button
                    className="btn-create"
                        variant="contained"
                        color="primary"
                        onClick={(e) =>
                        handleOpen(e)
                        }
                    >
                       <span style={{fontSize: "28px", fontWeight: "700", color:"white"}} className="sherah-breadcrumb__title">START</span> 
                    </button>
                    </center>
                    <PopupModal
                        open={open}
                        handleClose={handleClose}
                        modalTitle="Breeder Questionnaire"
                        modalContent={questions}
                        ind={0}
                        btnLabel={start}
                    />
                    
                </div>
            </div>
    );
}
