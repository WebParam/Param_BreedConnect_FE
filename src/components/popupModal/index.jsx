import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import './popup.css';
import { FormControl, InputLabel, Select, MenuItem, TextField, Checkbox, FormControlLabel } from '@mui/material';

const PopupModal = ({ open, handleClose, modalTitle, modalContent, ind, btnLabel }) => {
    console.log("questions on modal", modalContent, ind, btnLabel)

    const [selectedOption, setSelectedOption] = useState();
    const [index, setIndex] = useState(ind);
    const [start, setStart] = useState('Next');
    const [isDragging, setIsDragging] = useState(false);

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
        // Handle the dropped files, e.g., upload or process them
        console.log(droppedFiles);
    };
    const handleFileInput = (e) => {
        const selectedFiles = e.target.files;
        // Handle the selected files, e.g., upload or process them
        console.log(selectedFiles);
      };
    


    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleClick = () => {
        console.log("track", index, modalContent.length - 1)
        if (index === modalContent?.length - 1) {
            setStart("Finish")
            setIndex(null);

        } else {
            setIndex(index + 1)
            setStart('Next');
        }
    };

    return (
        <div style={{ width: "70%", height: "200px" }}>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{modalTitle}</DialogTitle>
                <DialogContent>
                    {
                        index === null ? <div className="question-section">Completed</div> :
                            <div className="question-section">
                                <div>
                                    {modalContent[index]?.description}
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
                                                    onChange={handleSelectChange}
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
                                                    {modalContent[index]?.options.map((field, i) => (
                                                        <TextField
                                                            key={field.i}
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
                                                        {modalContent[index]?.options.map((checkbox, i) => (
                                                            <FormControlLabel
                                                                key={checkbox.id}
                                                                control={
                                                                    <Checkbox
                                                                        //checked={checkedItems[checkbox.id] || false}
                                                                        //onChange={handleChange}
                                                                        name={checkbox.id}
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
                                                            <Button variant="contained" color="primary">
                                                                {modalContent[index]?.options[0].name}
                                                            </Button>
                                                            <Button variant="contained" color="secondary">
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
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default PopupModal;