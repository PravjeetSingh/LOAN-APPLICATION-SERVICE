// validation.js

export const validatePersonalInfo = (formData) => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
        errors.email = 'Valid email is required';
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
        errors.phone = 'Valid 10-digit phone number is required';
    return errors;
};

export const validateFinancialDetails = (formData) => {
    const errors = {};
    if (!formData.income || isNaN(formData.income))
        errors.income = 'Valid monthly income is required';
    if (!formData.employmentStatus)
        errors.employmentStatus = 'Employment status is required';
    return errors;
};

export const validateDocumentUpload = (files) => {
    const errors = {};
    if (!files.idProof) errors.idProof = 'ID Proof is required';
    if (!files.salarySlip) errors.salarySlip = 'Salary Slip is required';
    return errors;
};
