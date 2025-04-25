import React from 'react';
import { Box, Text, Button, VStack } from '@chakra-ui/react';

const PaymentTooltip = ({ repayment, date }) => {
    return (
        <Box p={2}>
            <VStack spacing={2} align="start">
                <Text fontSize="sm">Date: {date}</Text>
                <Text fontSize="sm">Amount: ₹{repayment?.amount}</Text>
                <Text fontSize="sm">Status: {repayment?.status}</Text>
                <Button size="sm" colorScheme="teal">Pay Now</Button>
            </VStack>
        </Box>
    );
};

export default PaymentTooltip;
