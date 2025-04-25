import React, { createContext, useContext, useState } from 'react';

const LoanStatusContext = createContext();

export const useLoanStatus = () => useContext(LoanStatusContext);

export const LoanStatusProvider = ({ children }) => {
    const [status, setStatus] = useState('Submitted');

    const updateStatus = (newStatus) => setStatus(newStatus);

    return (
        <LoanStatusContext.Provider value={{ status, updateStatus }}>
            {children}
        </LoanStatusContext.Provider>
    );
};
