import React, { useContext } from 'react';
import { HStack, Button } from '@chakra-ui/react';
import { LoanFormContext } from '../../context/LoanFormContext';

const FormNavigation = () => {
    const { step, setStep, handleSubmit } = useContext(LoanFormContext);

    return (
        <HStack justify="space-between" mt={6}>
            <Button onClick={() => setStep(step - 1)} isDisabled={step === 0}>Back</Button>
            {step < 2 ? (
                <Button colorScheme="teal" onClick={() => setStep(step + 1)}>Next</Button>
            ) : (
                <Button colorScheme="teal" onClick={handleSubmit}>Submit</Button>
            )}
        </HStack>
    );
};

export default FormNavigation;