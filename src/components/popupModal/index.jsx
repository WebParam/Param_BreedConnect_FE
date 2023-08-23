import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const PopupModal = ({ open, handleClose, modalTitle, modalContent, ind, btnLabel }) => {
    console.log("questions on modal", modalContent, ind, btnLabel)
    
    const [selectedOption, setSelectedOption] = useState();
    const [index, setIndex] = useState(ind);
    const [start, setStart] = useState('Next');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleClick = () => {
        console.log("track",index , modalContent.length - 1)
        if (index === modalContent?.length) {
            setStart("Finish")
            setIndex(null);
            
        } else {
            setIndex(index + 1)
            setStart('Next');
        }
    };

  return (
    <div style={{width:"70%", height:"200px"}}>
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
                            <p>Selected option: {selectedOption}</p>
                            <center><button onClick={handleClick} className="btn-create">{start}</button></center> 
                        </div>
                    </div>
                    // ? 
                    // <div>
                    //     Completed
                    // </div>
                    // :
                    // ""
                    


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