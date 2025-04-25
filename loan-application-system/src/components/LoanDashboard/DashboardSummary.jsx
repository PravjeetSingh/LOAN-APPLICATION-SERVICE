import { Box, Text, Stack } from '@chakra-ui/react';

const DashboardSummary = ({ loanAmount, interestRate, tenure }) => {
    return (
        <Box p={4} borderWidth="1px" borderRadius="md">
            <Stack spacing={2}>
                <Text>Loan Amount: ₹{loanAmount}</Text>
                <Text>Interest Rate: {interestRate}%</Text>
                <Text>Tenure: {tenure} months</Text>
            </Stack>
        </Box>
    );
};

export default DashboardSummary;
