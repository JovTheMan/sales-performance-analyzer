// Function to calculate the average sales for a salesperson
function calculateAverageSales(sales) {
    if (sales.length === 0) return 0; // Handle edge case for no sales data
    const totalSales = sales.reduce((acc, curr) => acc + curr, 0); // Sum of all sales
    return totalSales / sales.length; // Calculate average
}

// Function to determine the performance rating based on average sales
function determinePerformanceRating(averageSales) {
    if (averageSales > 10000) {
        return "Excellent";
    } else if (averageSales >= 7000) {
        return "Good";
    } else if (averageSales >= 4000) {
        return "Satisfactory";
    } else {
        return "Needs Improvement";
    }
}

// Function to identify the top and bottom performers based on total sales
function findTopAndBottomPerformers(salesData) {
    return salesData.reduce((result, salesperson) => {
        if (!result.topPerformer || salesperson.totalSales > result.topPerformer.totalSales) {
            result.topPerformer = salesperson; // Update top performer
        }
        if (!result.bottomPerformer || salesperson.totalSales < result.bottomPerformer.totalSales) {
            result.bottomPerformer = salesperson; // Update bottom performer
        }
        return result;
    }, { topPerformer: null, bottomPerformer: null });
}
