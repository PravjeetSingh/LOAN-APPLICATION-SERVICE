import { Box, Text, Badge } from '@chakra-ui/react';

const DocumentStatusCard = ({ documentName, status }) => {
    const colorScheme = status === 'Verified' ? 'green' : 'yellow';

    return (
        <Box p={4} borderWidth="1px" borderRadius="md">
            <Text fontWeight="bold">{documentName}</Text>
            <Badge colorScheme={colorScheme}>{status}</Badge>
        </Box>
    );
};

export default DocumentStatusCard;
