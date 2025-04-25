import React from 'react';
import { Box, Button, Heading, VStack, Center } from '@chakra-ui/react';
import { useLoanForm } from '../context/LoanFormContext';
import InputField from '../components/common/InputField';
import { useNavigate } from 'react-router-dom';

const ApplicationForm = () => {
    const { personalInfo, setPersonalInfo, nextStep } = useLoanForm();
    const navigate = useNavigate();

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo({ [name]: value }); // Update only the specific field
    };

    const handleSubmit = () => {
        nextStep();
        navigate('/loan-status');
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
                <Heading mb={6} color="teal.500">
                    Loan Application Form
                </Heading>
                <VStack spacing={4}>
                    <InputField
                        label="First Name"
                        name="firstName"
                        value={personalInfo.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name"
                    />
                    <InputField
                        label="Last Name"
                        name="lastName"
                        value={personalInfo.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter your last name"
                    />
                    <Button colorScheme="teal" onClick={handleSubmit}>
                        Next
                    </Button>
                </VStack>
            </Box>
        </Center>
    );
};

export default ApplicationForm;
