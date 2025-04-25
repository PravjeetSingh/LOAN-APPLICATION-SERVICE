import React, { createContext, useContext, useState, useEffect } from 'react';

// ✅ Export the context directly so it can be imported by other components
export const CalendarContext = createContext();

// ✅ Custom hook (optional and nice to have)
export const useCalendar = () => useContext(CalendarContext);

// ✅ CalendarProvider component
export const CalendarProvider = ({ children }) => {
    const [selectedDate, setSelectedDate] = useState(null); // for selected date
    const [repayments, setRepayments] = useState({}); // ✅ use object instead of array

    useEffect(() => {
        // Mock repayment data (you can replace this with real API call later)
        const mockRepayments = {
            '2025-04-25': { amount: 1000, status: 'Pending' },
            '2025-04-26': { amount: 1200, status: 'Paid' }
        };
        setRepayments(mockRepayments);
    }, []);

    // Function to select a date
    const selectDate = (date) => setSelectedDate(date);

    return (
        <CalendarContext.Provider value={{ selectedDate, selectDate, repayments }}>
            {children}
        </CalendarContext.Provider>
    );
};
