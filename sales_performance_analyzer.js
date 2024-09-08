// Function to calculate the average sales for a salesperson
function calculateAverageSales(sales) {
    if (sales.length === 0) return 0; // Handle edge case for no sales data
    const totalSales = sales.reduce((acc, curr) => acc + curr, 0); // Sum of all sales
    return totalSales / sales.length; // Calculate average
}

