import React, { useContext } from 'react';
import { Box, VStack, Heading, Text, Button, Center } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import FileUploader from '../common/FileUploader';
import { LoanFormContext } from '../../context/LoanFormContext';

const StepDocumentUpload = () => {
    const { formData, setFormData } = useContext(LoanFormContext);
    const navigate = useNavigate(); // Hook to navigate to different routes

    const handleFileChange = (name, file) => {
        setFormData({ ...formData, [name]: file });
    };

    const handleNext = () => {
        // You can add validation or checks before navigating
        navigate('/application'); // Change this route to the next page you want to navigate to
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
                    Document Upload
                </Heading>
                <Text mb={6} color="gray.600">
                    Please upload the necessary documents to proceed.
                </Text>

                <VStack spacing={5} align="stretch">
                    <FileUploader
                        label="Upload Aadhar Card"
                        name="aadhar"
                        onChange={handleFileChange}
                    />
                    <FileUploader
                        label="Upload PAN Card"
                        name="pan"
                        onChange={handleFileChange}
                    />

                    <Button
                        colorScheme="teal"
                        size="lg"
                        alignSelf="flex-end"
                        mt={4}
                        onClick={handleNext}  // Call the handleNext function on button click
                    >
                        Next
                    </Button>
                </VStack>
            </Box>
        </Center>
    );
};

export default StepDocumentUpload;
