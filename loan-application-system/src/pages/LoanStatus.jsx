import React from 'react';
import { Box, Heading, Text, Center, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useLoanForm } from '../context/LoanFormContext';
import { loanStatusSteps } from '../data/loanStatusSteps';
import DashboardSummary from '../components/LoanDashboard/DashboardSummary';
import { useLoanStatus } from '../context/LoanStatusContext';

const LoanStatus = () => {
    const { status } = useLoanStatus();
    const { financialInfo } = useLoanForm();
    const { loanAmount, interestRate, tenure } = financialInfo;
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/repayment');
    };

    return (
        <Center h="100vh">
            <Box
                p={6}
                maxW="600px"
                w="100%"
                bg="gray.100"
                boxShadow="md"
                borderRadius="2xl"
                textAlign="center"
            >
                <Heading size="lg" mb={4} color="teal.500">
                    Loan Status
                </Heading>
                <Text fontSize="lg" color="gray.700" mb={4}>
                    Current Status: {status}
                </Text>
                <Text fontSize="md" color="gray.600" mb={4}>
                    Progress: {loanStatusSteps.indexOf(status) + 1} of {loanStatusSteps.length}
                </Text>

                {/* Display DashboardSummary with loan details */}
                <DashboardSummary
                    loanAmount={loanAmount || '0'}  // Default value if empty
                    interestRate={interestRate || '0'}  // Default value if empty
                    tenure={tenure || '0'}  // Default value if empty
                />

                <Button colorScheme="teal" onClick={handleNext} mt={4}>
                    Go to Repayment
                </Button>
            </Box>
        </Center>
    );
};

export default LoanStatus;
