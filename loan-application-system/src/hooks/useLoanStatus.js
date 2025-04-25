import { useContext } from 'react';
import { LoanStatusContext } from '../context/LoanStatusContext';

export const useLoanStatus = () => useContext(LoanStatusContext);
