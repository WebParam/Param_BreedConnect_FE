
import { useEffect, useState } from "react";
import Layout from "../Partials/Layout";
import './questionnaires.css'
import questionnaires from "../../data/questionnaires.json"
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import PopupModal from '../popupModal/index';



export default function Questionnaires() {
    const [open, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [questions, setQuestions] = useState(questionnaires);
    const [index, setIndex] = useState(null);
    const [mainText, setMainText] = useState("Hi, to ensure that we create a safe community for breeders all breeders are screened and approved by Breed Connect");
    const [selectedOption, setSelectedOption] = useState()

    const [start, setStart] = useState('Start questionnaire')
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

    const handleClick = () => {
        console.log("", questions[index])
        if (index === questions.length - 1) {
            setStart("Finish")
            setIndex(null)
        } else {
            setIndex(index + 1)
            setStart('Next');

        }
    };


    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleOpen = (title, content) => {
        setModalContent(content);
        setOpen(true);
      };
    
      const handleClose = () => {
        //setIndex(0);
        setOpen(false);
      };

    return (
        <Layout childrenClasses="pt-0 pb-0">
            <div className="questionnaire-container">
                {
                    index === null ? <div className="header-section">{mainText}</div> : ''
                }
                {
                    index === null ? <div className="question-section">Please complete this questionnaire to get started</div> : ""

                }
                <div >
                    {/* <center><button onClick={handleClick} className="btn-create">{start}</button></center> */}
                    <center><Button
                        variant="contained"
                        color="primary"
                        onClick={() =>
                        handleOpen(
                            'Dynamic Modal Title',
                            <p>This is the dynamic content of the modal.</p>
                        )
                        }
                    >
                        {start}
                    </Button>
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
        </Layout>
    );
}
