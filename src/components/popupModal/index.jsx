import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import './popup.css';

import Logo from "../../media/logo.png"

import { FormControl, InputLabel, Select, MenuItem, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { completeQuestionnaires } from "../../../src/api/endpoints";
import axios from 'axios';
import { toast } from 'react-toastify';


const PopupModal = ({ open, handleClose, modalTitle, modalContent, ind, btnLabel }) => {

    const [selectedOption, setSelectedOption] = useState();
    const [index, setIndex] = useState(ind);
    const [start, setStart] = useState('Next');
    const [isDragging, setIsDragging] = useState(false);
    let [questionaires, setQuestionnaires] = useState([])
    const [checkedItems, setCheckedItems] = useState({});

    const handleChange = (event,question) => {
        console.log("checked", event, question);
        setCheckedItems({
            ...checkedItems,
            [event.target.name]: event.target.checked,
        });
        const existingAnswerIndex = questionaires.findIndex((obj) => obj.question === question.question);
        if (existingAnswerIndex !== -1) {
            const updatedOptions = [...questionaires];
            updatedOptions[existingAnswerIndex] = {
                order: 0,
                question: question.question,
                response:  `${updatedOptions[existingAnswerIndex].response +','+ event.target.name}`,
                type: question.questionType
            };
            setQuestionnaires(updatedOptions);
        } else {
            setQuestionnaires((prevArray) => [...prevArray, {
                order: 0,
                question: question.question,
                response: event.target.name,
                type: question.questionType
            }]);
            console.log("profile", questionaires)
        }
      
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        const droppedFiles = e.dataTransfer.files;
        console.log(droppedFiles);
    };
    const handleFileInput = (e) => {
        const selectedFiles = e.target.files;
        console.log(selectedFiles);
    };

    const saveSelection = (value, question) => {
        const existingAnswerIndex = questionaires.findIndex((obj) => obj.question === question.question);
        if (existingAnswerIndex !== -1) {
            const updatedOptions = [...questionaires];
            updatedOptions[existingAnswerIndex] = {
                order: 0,
                question: question.question,
                response: value,
                type: question.questionType
            };
            setQuestionnaires(updatedOptions);
        } else {
            setQuestionnaires((prevArray) => [...prevArray, {
                order: 0,
                question: question.question,
                response: value,
                type: question.questionType
            }]);
    }
}



    const handleSelectChange = (event, question) => {
        setSelectedOption(event.target.value);
        const existingAnswerIndex = questionaires.findIndex((obj) => obj.question === question);
        if (existingAnswerIndex !== -1) {
            const updatedOptions = [...questionaires];
            updatedOptions[existingAnswerIndex] = {
                order: 0,
                question: question.question,
                response: event.target.value,
                type: question.questionType
            };
            setQuestionnaires(updatedOptions);
        } else {
            setQuestionnaires((prevArray) => [...prevArray, {
                order: 0,
                question: question.question,
                response: event.target.value,
                type: question.questionType
            }]);
            console.log("profile", questionaires)
        }
    };

    const handleClick = async () => {
        const _id = toast.loading("Logging in..", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        if (index === modalContent?.length - 1) {
            setStart("Finish");
            setIndex(null);
            const userProfile = {
                userId:"64df521d7d17ef88d6964e30",
                questionaires,
            }
            const response = await completeQuestionnaires(userProfile);
            if(response!=null && response.status ==200){
            toast.update(_id, {
                autoClose:2000,
                render: `Profile Saved Successfully`,
                type: "success",
                isLoading: false,
            });
            }else{
            toast.update(_id, {
                autoClose:2000,
                render: "Failed to save profile",
                type: "error",
                isLoading: false,
                
            });
            }

        } else {
            setIndex(index + 1)
            setStart('Next');
        }
    };

    return (
        <div style={{ width: "70%", height: "200px" }}>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={{fontFamily:"Inter"}}><img  style={{maxWidth:"40%", float:"left"}}src={Logo}/>  
                    <DialogActions style={{float:"right"}}>
                        <Button  onClick={handleClose} style={{fontFamily:"Inter"}}>
                            Save and exit
                        </Button>
                    </DialogActions> 
                </DialogTitle>
                <DialogContent>
                    {
                        index === null ? <div className="question-section">Completed</div> :
                            <div className="question-section">
                                <div>
                                    {modalContent[index]?.question}
                                </div>
                                <div>
                                    {

                                        modalContent[index]?.type === "dropdown" ? <div>
                                            <FormControl variant="outlined">
                                                <InputLabel id="dropdown-label">Select an option</InputLabel>
                                                <Select
                                                    labelId="dropdown-label"
                                                    label="Select an option"
                                                    value={selectedOption}
                                                    name={modalContent[index]?.question}
                                                    onChange={(event) => handleSelectChange(event, modalContent[index])}
                                                >
                                                    {modalContent[index]?.options.map((option) => (
                                                        <MenuItem key={option?.value} value={option?.value}>
                                                            {option?.name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </div> : modalContent[index]?.type === "input"
                                            ?
                                            <div>

                                                <FormControl variant="outlined">
                                                    {modalContent[index]?.options.map((field) => (
                                                        <TextField
                                                            key={field.value}
                                                            label={field.name}
                                                            variant="outlined"
                                                            fullWidth
                                                            // onChange={e => handleFieldChange(field.id, e.target.value)}
                                                            style={{ marginBottom: '10px' }}
                                                        />
                                                    ))}

                                                </FormControl>
                                            </div> : modalContent[index]?.type === "checkbox" ?

                                                <div>
                                                    <FormControl variant="outlined">
                                                        {modalContent[index]?.options.map((checkbox) => (
                                                            <FormControlLabel
                                                                key={checkbox.value}
                                                                control={
                                                                    <Checkbox
                                                                        checked={checkedItems[checkbox.value] || false}
                                                                        onChange={(e) => handleChange(e, modalContent[index])}
                                                                        name={checkbox.value}
                                                                    />
                                                                }
                                                                label={checkbox.name}
                                                            />
                                                        ))
                                                        }
                                                    </FormControl>
                                                </div>

                                                :
                                                modalContent[index]?.type === "select" ?
                                                    <div>
                                                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                                            <Button variant="contained" color="primary" onClick={() => saveSelection(modalContent[index]?.options[0].value, modalContent[index])}>
                                                                {modalContent[index]?.options[0].name}
                                                            </Button>
                                                            <Button variant="contained" color="secondary" onClick={() => saveSelection(modalContent[index]?.options[1].value, modalContent[index])}>
                                                                {modalContent[index]?.options[1].name}
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    : <div
                                                        className={`upload-rectangle ${isDragging ? 'dragging' : ''}`}
                                                        onDragOver={handleDragOver}
                                                        onDragLeave={handleDragLeave}
                                                        onDrop={handleDrop}

                                                    >
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={handleFileInput}
                                                            multiple

                                                        ></input>

                                                    </div>

                                    }

                                    <center><button onClick={handleClick} className="btn-create">{start}</button></center>

                                </div>
                            </div>




                    }
                </DialogContent>
               
            </Dialog>
        </div>
    );
};



export default PopupModal;