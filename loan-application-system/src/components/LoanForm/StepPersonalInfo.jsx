import React from 'react';
import { Box, VStack, Heading, Text, Input, Button, Flex } from '@chakra-ui/react';
import { useLoanForm } from '../../context/LoanFormContext';  // Ensure correct path
import { useNavigate } from 'react-router-dom';

const StepPersonalInfo = () => {
    const { personalInfo, setPersonalInfo } = useLoanForm();
    const navigate = useNavigate(); // Hook for navigation

    // Check if personalInfo is not available
    if (!personalInfo) {
        return <div>Loading...</div>;  // Render loading if personalInfo is not yet available
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo({ [name]: value });
    };

    const handleNext = () => {
        navigate('/loan-status'); // Navigate to the "Status" page
    };

    return (
        <Flex
            minH="100vh"
            align="center"
            justify="center"
            bg="gray.50"
            px={4}
        >
            <Box
                p={8}
                maxW="600px"
                w="full"
                bg="teal.50"  // Light teal background for the form
                boxShadow="xl"
                borderRadius="md"
            >
                <Heading size="lg" mb={4} color="teal.600" textAlign="center">
                    Personal Information
                </Heading>
                <Text mb={6} color="gray.600" textAlign="center">
                    Please enter your personal details to proceed.
                </Text>
                <VStack spacing={5} align="stretch">
                    <div>
                        <label>First Name</label>
                        <Input
                            type="text"
                            name="firstName"
                            value={personalInfo.firstName || ''}
                            onChange={handleChange}
                            isRequired
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <Input
                            type="text"
                            name="lastName"
                            value={personalInfo.lastName || ''}
                            onChange={handleChange}
                            isRequired
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <Input
                            type="email"
                            name="email"
                            value={personalInfo.email || ''}
                            onChange={handleChange}
                            isRequired
                        />
                    </div>
                    <Button
                        colorScheme="teal"
                        size="lg"
                        width="full"
                        mt={4}
                        onClick={handleNext}  // Handle next button click
                    >
                        Next
                    </Button>
                </VStack>
            </Box>
        </Flex>
    );
};

export default StepPersonalInfo;
