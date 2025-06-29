// Sample data (normally this would be dynamic, perhaps from a database or API)
const data = [
    { star: 5, count: 350 },
    { star: 4, count: 150 },
    { star: 3, count: 70 },
    { star: 2, count: 30 },
    { star: 1, count: 20 },
];

// Function to calculate total ratings and average
function calculateRatings() {
    let totalRatings = 0;
    let totalStars = 0;

    data.forEach(item => {
        totalRatings += item.count;
        totalStars += item.star * item.count;
    });

    const averageRating = (totalStars / totalRatings).toFixed(1);
    updateUI(totalRatings, averageRating);
}

// Function to update UI elements dynamically
function updateUI(totalRatings, averageRating) {
    document.getElementById('total-ratings').innerText = totalRatings;

    // Update Average Rating (Stars)
    const averageStars = Math.round(averageRating);
    const starElements = document.querySelectorAll('.star-inner');
    starElements.forEach((star, index) => {
        if (index < averageStars) {
            star.style.width = '100%';
        } else {
            star.style.width = '0';
        }
    });

    // Update Specific Rating Counts and Progress Bars
    data.forEach(item => {
        document.getElementById(`specific-rating-${item.star}`).innerText = item.count;

        const progressBar = document.querySelector(`#specific-rating-${item.star}`).previousElementSibling;
        const bar = progressBar.querySelector('.bar');
        const widthPercentage = (item.count / totalRatings) * 100;
        bar.style.width = `${widthPercentage}%`;
    });
}

// Initial calculations and UI update
calculateRatings();




/*
Explanation:
HTML:

The layout includes two main sections (rating-average and rating-progress).
The stars for the average rating are displayed as empty stars in gray and filled stars in gold (using Unicode).
Specific ratings (1 to 5 stars) are shown with a progress bar reflecting the count for each rating.
CSS:

Basic styles are applied to center the dashboard on the page.
The stars and progress bars are styled. The stars are created using the before pseudo-element with Unicode values for the star symbol (★).
The progress bars are shown with a gold bar inside a gray background.
JavaScript:

We define an array data containing objects representing the star rating and count (e.g., 5 stars: 350 ratings).
The calculateRatings() function calculates the total number of ratings and average rating.
The updateUI() function dynamically updates the total number of ratings, average rating (with yellow stars), and the progress bars for each specific rating.
When the data array is updated (e.g., when new data is received or when values change), the UI will automatically reflect the updated totals and progress bars.
Notes:
The progress bars are dynamically updated based on the number of ratings per star and the total number of ratings.
The average rating is dynamically displayed as a number and also represented by the filled yellow stars.
This setup provides a simple, interactive review scorecard, and it's flexible enough to be extended with a backend or API to fetch real-time data!
*/