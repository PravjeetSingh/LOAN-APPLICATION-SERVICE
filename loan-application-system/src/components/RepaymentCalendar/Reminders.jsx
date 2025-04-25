// Reminders.jsx
import React, { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useCalendar } from '../../context/CalendarContext'; // Updated import
import { checkDueToday } from '../../utils/dateUtils';

const Reminders = () => {
    const { repayments } = useCalendar(); // Using the context to get repayments
    const toast = useToast();

    useEffect(() => {
        // Log repayments to check if it's populated
        console.log('Repayments:', repayments);

        if (!repayments || Object.keys(repayments).length === 0) {
            console.log('Repayments data is missing or empty');
            return; // Don't proceed if repayments data is empty or undefined
        }

        const dueToday = checkDueToday(repayments);
        if (dueToday) {
            toast({
                title: 'Repayment Due Today',
                description: `You have a payment of ₹${dueToday.amount} due today.`,
                status: 'warning',
                duration: 9000,
                isClosable: true,
                position: 'top-right'
            });
        }
    }, [repayments, toast]);

    return null;
};

export default Reminders;
