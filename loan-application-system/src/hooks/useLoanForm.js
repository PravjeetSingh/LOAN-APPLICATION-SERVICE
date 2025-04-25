import { useContext } from 'react';
import { LoanFormContext } from '../context/LoanFormContext';

export const useLoanForm = () => useContext(LoanFormContext);
