


import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {useNavigate} from 'react-router-dom'
export default function Progress() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const navigate = useNavigate()
  const steps = [ '/', '/home', '/about', '/contact-me', '/projects', '/education'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    navigate(steps[activeStep + 1]);

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    navigate(steps[activeStep - 1]);

  };

  return (
    <MobileStepper
      variant="progress"
      steps={6}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 10000, flexGrow: 1 }}
      nextButton={
        <Button  onClick={handleNext} disabled={activeStep === 5}>
          <p className='sm:text-[40px]'>Next</p>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button  onClick={handleBack} disabled={activeStep === 0}  className=''>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          <p className='sm:text-[40px]'>Back</p>
        </Button>
      }
    />
  );
}