import React from 'react';
import {
    Box,
    Text,
    VStack,
    Heading,
    Center,
    Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { repaymentData } from '../data/repaymentData';
import CalendarGrid from '../components/RepaymentCalendar/CalendarGrid';
import Reminders from '../components/RepaymentCalendar/Reminders';

const RepaymentSchedule = () => {
    const navigate = useNavigate();

    const handleFinish = () => {
        navigate('/thank-you');
    };

    return (
        <>
            <Reminders /> {/* ✅ Mount once to enable toast alerts */}
            <Center py={10}>
                <Box
                    p={6}
                    maxW="800px"
                    w="100%"
                    bg="gray.100"
                    boxShadow="md"
                    borderRadius="2xl"
                    textAlign="center"
                >
                    <Heading size="lg" mb={4} color="teal.500">
                        Repayment Schedule
                    </Heading>

                    <VStack spacing={4} align="stretch" mb={6}>
                        <CalendarGrid />
                        {repaymentData.map((payment, index) => (
                            <Box key={index} p={4} bg="white" borderRadius="md" boxShadow="sm">
                                <Text fontWeight="medium">Due Date: {payment.dueDate}</Text>
                                <Text>Amount: ₹{payment.amount}</Text>
                            </Box>
                        ))}
                    </VStack>

                    <Button colorScheme="teal" onClick={handleFinish}>
                        Finish
                    </Button>
                </Box>
            </Center>
        </>
    );
};

export default RepaymentSchedule;
