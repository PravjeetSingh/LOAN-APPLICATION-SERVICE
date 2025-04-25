import React, { useContext } from 'react';
import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
import CalendarDay from './CalendarDay';
import { CalendarContext } from '../../context/CalendarContext';
import { getMonthDays } from '../../utils/dateUtils';

const CalendarGrid = () => {
    const { repayments } = useContext(CalendarContext);
    const days = getMonthDays();

    return (
        <Box p={4}>
            <Heading size="md" mb={4}>Repayment Calendar</Heading>
            <SimpleGrid columns={7} spacing={2}>
                {days.map((day) => (
                    <CalendarDay key={day.date} day={day} repayment={repayments[day.date]} />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default CalendarGrid;