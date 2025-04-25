import React, { useContext } from 'react';
import { HStack, Box, Text, Circle } from '@chakra-ui/react';
import { LoanFormContext } from '../../context/LoanFormContext';

const steps = ['Personal Info', 'Financial Details', 'Document Upload'];

const StepIndicator = () => {
    const { step } = useContext(LoanFormContext);
    return (
        <HStack spacing={4} mb={6} justify="center">
            {steps.map((label, index) => (
                <Box key={label} textAlign="center">
                    <Circle size="40px" bg={step === index ? 'teal.400' : 'gray.300'} color="white">
                        {index + 1}
                    </Circle>
                    <Text mt={2} fontSize="sm">{label}</Text>
                </Box>
            ))}
        </HStack>
    );
};

export default StepIndicator;
