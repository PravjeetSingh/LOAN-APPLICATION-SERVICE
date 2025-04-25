// notificationUtils.js

import { useToast } from '@chakra-ui/react';

export const showToast = ({
    title,
    description,
    status = 'info',
    duration = 5000,
    position = 'top',
}) => {
    const toast = useToast();
    toast({
        title,
        description,
        status,
        duration,
        isClosable: true,
        position,
    });
};
