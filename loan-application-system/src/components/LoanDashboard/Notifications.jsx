import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

const Notifications = ({ message }) => {
    const toast = useToast();

    useEffect(() => {
        if (message) {
            toast({
                title: 'Notification',
                description: message,
                status: 'info',
                duration: 5000,
                isClosable: true,
            });
        }
    }, [message, toast]);

    return null;
};

export default Notifications;
