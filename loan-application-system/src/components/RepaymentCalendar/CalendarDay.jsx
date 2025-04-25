import React from 'react';
import { Box, Text, Tooltip } from '@chakra-ui/react';
import PaymentTooltip from './PaymentTooltip';

const CalendarDay = ({ day, repayment, onSelect, isSelected }) => {
    const bgColor = repayment
        ? isSelected ? 'green.300' : 'green.100'
        : isSelected ? 'blue.200' : 'gray.50';

    return (
        <Tooltip
            label={repayment ? <PaymentTooltip repayment={repayment} date={day.date} /> : ''}
            isDisabled={!repayment}
            placement="top"
        >
            <Box
                borderWidth={1}
                borderRadius="md"
                p={2}
                textAlign="center"
                bg={bgColor}
                minH="60px"
                cursor="pointer"
                onClick={onSelect}
                _hover={{ bg: 'gray.200' }}
            >
                <Text fontWeight="bold">{day.day}</Text>
            </Box>
        </Tooltip>
    );
};

export default CalendarDay;
