import { useToast } from '@chakra-ui/react';

const ToastWrapper = ({ title, description, status }) => {
    const toast = useToast();

    toast({
        title,
        description,
        status,
        duration: 5000,
        isClosable: true,
    });

    return null;
};

export default ToastWrapper;
