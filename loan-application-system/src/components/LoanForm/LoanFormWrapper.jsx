import React, { useContext } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import StepIndicator from './StepIndicator';
import StepPersonalInfo from './StepPersonalInfo';
import StepFinancialDetails from './StepFinancialDetails';
import StepDocumentUpload from './StepDocumentUpload';
import FormNavigation from './FormNavigation';
import { LoanFormContext } from '../../context/LoanFormContext';

// Use motion.create() to create motion components
const MotionBox = motion.create('div'); // Create the motion component

const LoanFormWrapper = () => {
    const { step } = useContext(LoanFormContext);

    const renderStep = () => {
        switch (step) {
            case 0:
                return <StepPersonalInfo />;
            case 1:
                return <StepFinancialDetails />;
            case 2:
                return <StepDocumentUpload />;
            default:
                return null;
        }
    };

    return (
        <Box maxW="lg" mx="auto" p={6} bg="white" borderRadius="xl" boxShadow="lg">
            <StepIndicator />
            <AnimatePresence mode="wait">
                <MotionBox
                    key={step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <VStack spacing={6} align="stretch">
                        {renderStep()}
                        <FormNavigation />
                    </VStack>
                </MotionBox>
            </AnimatePresence>
        </Box>
    );
};

export default LoanFormWrapper;
