import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

// Step Pages
import StepPersonalInfo from "./components/LoanForm/StepPersonalInfo";
import StepFinancialDetails from "./components/LoanForm/StepFinancialDetails";
import StepDocumentUpload from "./components/LoanForm/StepDocumentUpload";

// Other Pages
import ApplicationForm from "./pages/ApplicationForm";
import LoanStatus from "./pages/LoanStatus";
import RepaymentSchedule from "./pages/RepaymentSchedule";

// Providers
import { LoanFormProvider } from "./context/LoanFormContext";  // Ensure correct import
import { LoanStatusProvider } from "./context/LoanStatusContext";
import { CalendarProvider } from "./context/CalendarContext";

// Global Components
import ToastWrapper from "./components/common/ToastWrapper";

// Import DashboardSummary
import DashboardSummary from "./components/LoanDashboard/DashboardSummary";

const App = () => {
  return (
    <ChakraProvider>
      <LoanFormProvider>  {/* Ensure LoanFormProvider is wrapping everything */}
        <LoanStatusProvider>
          <CalendarProvider>
            <Router>
              <ToastWrapper />

              <Routes>
                {/* Step-wise Form Flow */}
                <Route path="/step-personal-info" element={<StepPersonalInfo />} />
                <Route path="/step-financial-details" element={<StepFinancialDetails />} />
                <Route path="/step-document-upload" element={<StepDocumentUpload />} />

                {/* ApplicationForm inserted here */}
                <Route path="/application" element={<ApplicationForm />} />

                {/* Final Stages */}
                <Route path="/loan-status" element={<LoanStatus />} />
                <Route path="/repayment" element={<RepaymentSchedule />} />

                {/* Default Redirect */}
                <Route path="/" element={<StepPersonalInfo />} />
              </Routes>
            </Router>
          </CalendarProvider>
        </LoanStatusProvider>
      </LoanFormProvider>
    </ChakraProvider>
  );
};

export default App;
