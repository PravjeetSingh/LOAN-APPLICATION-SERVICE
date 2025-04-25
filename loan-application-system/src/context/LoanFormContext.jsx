import React, { createContext, useContext, useState, useCallback } from 'react';

// Create and export the context
export const LoanFormContext = createContext();

// Custom hook to use LoanFormContext
export const useLoanForm = () => useContext(LoanFormContext);

// Initial state for the loan form context
const initialState = {
    personalInfo: {
        firstName: '',
        lastName: '',
        email: '',
    },
    financialInfo: {
        income: 0,
        loanAmount: 0,
        tenure: 0,
        interestRate: 0,
    },
    documents: {
        idProof: null,
        addressProof: null,
    },
    step: 1,
};

// LoanFormProvider component
export const LoanFormProvider = ({ children }) => {
    const [formData, setFormData] = useState(initialState);

    // Update next step
    const nextStep = useCallback(() => {
        setFormData((prevData) => ({
            ...prevData,
            step: Math.min(prevData.step + 1, 4), // assuming 4 total steps
        }));
    }, []);

    // Update previous step
    const prevStep = useCallback(() => {
        setFormData((prevData) => ({
            ...prevData,
            step: Math.max(prevData.step - 1, 1),
        }));
    }, []);

    // Reset form data
    const resetForm = useCallback(() => {
        setFormData(initialState); // Resetting to the initialState
    }, []);

    // Update personal info
    const setPersonalInfo = useCallback((info) => {
        setFormData((prevData) => ({
            ...prevData,
            personalInfo: {
                ...prevData.personalInfo,
                ...info, // Only update the fields passed in `info`
            },
        }));
    }, []);

    // Update financial info
    const setFinancialInfo = useCallback((info) => {
        setFormData((prevData) => ({
            ...prevData,
            financialInfo: {
                ...prevData.financialInfo,
                ...info, // Only update the fields passed in `info`
            },
        }));
    }, []);

    // Update documents
    const setDocuments = useCallback((docs) => {
        setFormData((prevData) => ({
            ...prevData,
            documents: {
                ...prevData.documents,
                ...docs, // Only update the fields passed in `docs`
            },
        }));
    }, []);

    return (
        <LoanFormContext.Provider
            value={{
                step: formData.step,
                personalInfo: formData.personalInfo,
                setPersonalInfo,
                financialInfo: formData.financialInfo,
                setFinancialInfo,
                documents: formData.documents,
                setDocuments,
                nextStep,
                prevStep,
                resetForm,
            }}
        >
            {children}
        </LoanFormContext.Provider>
    );
};
