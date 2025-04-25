import React, { useContext } from 'react';
import { LoanFormContext } from '../../context/LoanFormContext';
import { Button, Input, Stack, Box, Heading, Text, Center } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const StepFinancialDetails = () => {
    const { financialInfo, setFinancialInfo } = useContext(LoanFormContext); // Access the financialInfo from context
    const { income, loanAmount, tenure, interestRate } = financialInfo; // Destructure values from context

    const navigate = useNavigate(); // Initialize the navigate function

    const handleNext = () => {
        // Update the context with the entered data
        setFinancialInfo({
            ...financialInfo, // Keep other values intact
            income, // Update the income
            loanAmount, // Update the loanAmount
            tenure, // Update the tenure
            interestRate, // Update the interestRate
        });

        // Navigate to the next step
        navigate('/step-document-upload'); // Update with the correct route as needed
    };

    return (
        <Center h="100vh"> {/* Centering the content vertically and horizontally */}
            <Box
                p={6}
                maxW="600px"
                w="100%"  // This ensures the box takes full width inside its container
                bg="gray.100"
                boxShadow="md"
                borderRadius="2xl"
            >
                <Heading size="lg" mb={4} color="teal.500">
                    Financial Details
                </Heading>
                <Text mb={6} color="gray.600">
                    Please provide your financial details to proceed with the loan application.
                </Text>

                <Stack spacing={4}>
                    <Input
                        placeholder="Income (₹)"
                        value={income}
                        onChange={(e) => setFinancialInfo({ ...financialInfo, income: e.target.value })}
                    />
                    <Input
                        placeholder="Loan Amount (₹)"
                        value={loanAmount}
                        onChange={(e) => setFinancialInfo({ ...financialInfo, loanAmount: e.target.value })}
                    />
                    <Input
                        placeholder="Tenure (months)"
                        value={tenure}
                        onChange={(e) => setFinancialInfo({ ...financialInfo, tenure: e.target.value })}
                    />
                    <Input
                        placeholder="Interest Rate (%)"
                        value={interestRate}
                        onChange={(e) => setFinancialInfo({ ...financialInfo, interestRate: e.target.value })}
                    />
                    <Button
                        colorScheme="teal"
                        size="lg"
                        alignSelf="flex-end"
                        mt={4}
                        onClick={handleNext}  // Call handleNext on button click
                    >
                        Next
                    </Button>
                </Stack>
            </Box>
        </Center>
    );
};

export default StepFinancialDetails;
