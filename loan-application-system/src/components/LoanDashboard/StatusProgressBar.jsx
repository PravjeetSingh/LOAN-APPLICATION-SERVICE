import { Box, Progress, Text } from '@chakra-ui/react';

const StatusProgressBar = ({ status }) => {
    const statusMap = {
        Submitted: 33,
        'Under Review': 66,
        Approved: 100,
    };

    return (
        <Box>
            <Text mb={2}>Application Status: {status}</Text>
            <Progress value={statusMap[status]} colorScheme="green" />
        </Box>
    );
};

export default StatusProgressBar;
