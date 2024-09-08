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


// Function to generate a performance report for multiple salespeople
function generatePerformanceReport(salesData) {
    const report = salesData.map(salesperson => {
        const averageSales = calculateAverageSales(salesperson.sales); // Calculate average
        const performanceRating = determinePerformanceRating(averageSales); // Determine rating
        return {
            name: salesperson.name,
            averageSales: averageSales,
            performanceRating: performanceRating,
            totalSales: salesperson.sales.reduce((acc, curr) => acc + curr, 0) // Calculate total sales
        };
    });

        // Find the top and bottom performers
    const topAndBottomPerformers = findTopAndBottomPerformers(report);

    return {
        report: report,
        topPerformer: topAndBottomPerformers.topPerformer,
        bottomPerformer: topAndBottomPerformers.bottomPerformer
    };
}


// Sample data for testing the functions
const salesData = [
    { name: 'Alice', sales: [12000, 15000, 13000] },
    { name: 'Bob', sales: [7000, 6000, 7500] },
    { name: 'Charlie', sales: [3000, 4000, 3500] },
    { name: 'Diana', sales: [9000, 8500, 9200] }
];

// Generate and log the performance report
const performanceReport = generatePerformanceReport(salesData);
console.log(performanceReport);
