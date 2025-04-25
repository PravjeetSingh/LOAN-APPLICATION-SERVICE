// dateUtils.js

export const getMonthDays = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const lastDay = new Date(year, month + 1, 0);

    const days = [];
    for (let i = 1; i <= lastDay.getDate(); i++) {
        const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        days.push({ date, day: i });
    }
    return days;
};

// dateUtils.js

export const checkDueToday = (repayments) => {
    const today = new Date().toISOString().split('T')[0]; // Get the current date in 'YYYY-MM-DD' format
    if (!repayments || !repayments[today]) {
        console.error("Repayments data is invalid or empty:", repayments);
        return null; // Return null if repayments data is missing or invalid
    }
    return repayments[today]; // Return repayment data for today if found
};

export const getRepaymentStatusColor = (status) => {
    switch (status) {
        case 'Paid':
            return 'green.200';
        case 'Pending':
            return 'yellow.200';
        case 'Overdue':
            return 'red.200';
        default:
            return 'gray.100';
    }
};
