// Global variables
let currentPage = 0;
let totalPages = 0;
let isBookOpen = false;
let autoPlayTimeout;
let isAutoPlaying = false;
let videoPlaylist = [];
let youtubePlaylistId = "PLRMn9rNUNDYj5XvwbD3R188HmNr8eNkQa";

// DOM elements
const cover = document.getElementById('cover');
const openBtn = document.getElementById('openBtn');
const navControls = document.getElementById('navControls');
const pageIndicator = document.getElementById('pageIndicator');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pagesContainer = document.getElementById('pagesContainer');
const setupModal = document.getElementById('setupModal');
const videoCountInput = document.getElementById('videoCountInput');
const submitVideoCountBtn = document.getElementById('submitVideoCountBtn');
const infinitePlayCheckbox = document.getElementById('infinitePlayCheckbox');

// Initialize the book
function initBook() {
    // Create stars
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = `${Math.random() * 4 + 1}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.setProperty('--duration', `${Math.random() * 4 + 2}s`);
        star.style.setProperty('--opacity', `${Math.random() * 0.8 + 0.2}`);
        star.style.animationDelay = `${Math.random() * 6}s`;
        starsContainer.appendChild(star);
    }

    // Add premium decorations
    for (let i = 0; i < 8; i++) {
        const decor = document.createElement('div');
        decor.classList.add('premium-decoration');
        decor.style.top = `${Math.random() * 90}%`;
        decor.style.left = `${Math.random() * 90}%`;
        decor.style.zIndex = 1;
        decor.style.transform = `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.5})`;
    }

    // Show setup modal first
    setupModal.classList.remove('hidden');

    // Event listeners
    openBtn.addEventListener('click', openBook);
    prevBtn.addEventListener('click', prevPage);
    nextBtn.addEventListener('click', nextPage);
    submitVideoCountBtn.addEventListener('click', setupVideoCount);

    document.addEventListener('visibilitychange', handleVisibilityChange);
}

// Setup the number of videos to play
function setupVideoCount() {
    const videoCount = parseInt(videoCountInput.value);
    const infinitePlay = infinitePlayCheckbox.checked;

    if (isNaN(videoCount) ){
        alert("Please enter a valid number");
        return;
    }

    totalPages = videoCount;
    setupModal.classList.add('hidden');

    // Create pages dynamically
    createPages(totalPages);

    // Load YouTube playlist
    loadYouTubePlaylist().then(() => {
        if (videoPlaylist.length > 0) {
            openBtn.classList.remove('hidden');
        } else {
            alert("Failed to load videos from playlist");
        }
    });
}

// Create pages dynamically
function createPages(count) {
    pagesContainer.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        const page = document.createElement('div');
        page.className = 'page';
        page.id = `page${i+1}`;
        
        const videoContainer = document.createElement('div');
        videoContainer.className = 'video-container';
        
        const iframe = document.createElement('iframe');
        iframe.id = `video${i+1}`;
        iframe.className = 'video';
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('allow', 'autoplay');
        
        videoContainer.appendChild(iframe);
        page.appendChild(videoContainer);
        pagesContainer.appendChild(page);
    }
}

// Load YouTube playlist
async function loadYouTubePlaylist() {
    try {
        // In a real implementation, you would use the YouTube API here
        // This is a mock implementation since we can't make actual API calls from frontend JS
        // due to CORS restrictions
        
        // Mock data - in reality you would fetch this from YouTube API
        videoPlaylist = [
            { videoId: 'dQw4w9WgXcQ', duration: 212 }, // Example video IDs
            { videoId: '9bZkp7q19f0', duration: 254 },
            { videoId: 'kJQP7kiw5Fk', duration: 292 },
            { videoId: 'RgKAFK5djSk', duration: 221 },
            { videoId: 'JGwWNGJdvx8', duration: 231 },
            { videoId: 'OPf0YbXqDm0', duration: 183 },
            { videoId: 'kOkQ4T5WO9E', duration: 196 },
            { videoId: '2Vv-BfVoq4g', duration: 208 },
            { videoId: 'JGwWNGJdvx8', duration: 231 },
            { videoId: 'RgKAFK5djSk', duration: 221 }
        ];
        
        // Assign video sources to pages
        const pages = document.querySelectorAll('.page');
        pages.forEach((page, index) => {
            if (index < videoPlaylist.length) {
                const videoId = videoPlaylist[index].videoId;
                const iframe = page.querySelector('iframe');
                iframe.src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=0`;
            }
        });
        
        return true;
    } catch (error) {
        console.error('Error loading playlist:', error);
        return false;
    }
}

// Open the book
function openBook() {
    isBookOpen = true;
    openBtn.classList.add('hidden');
    navControls.classList.remove('hidden');
    navControls.style.display = 'flex';
    cover.style.transform = 'rotateY(-160deg)';
    
    setTimeout(() => {
        goToPage(1);
    }, 1000);
}

// Close the book
function closeBook() {
    isBookOpen = false;
    clearTimeout(autoPlayTimeout);
    isAutoPlaying = false;
    
    // Reset all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.transform = 'rotateY(0deg)';
        page.classList.remove('turning');
        page.classList.remove('active');
        navControls.classList.add('hidden');
        navControls.style.display = "none";
        
        // Pause any videos
        const iframe = page.querySelector('iframe');
        if (iframe) {
            iframe.src = iframe.src.replace('&autoplay=1', '&autoplay=0');
        }
    });
    
    // Close cover
    setTimeout(() => {
        cover.style.transform = 'rotateY(0deg)';
        openBtn.classList.remove('hidden');
        navControls.classList.add('hidden');
        
        // Show setup modal again if in infinite mode
        if (infinitePlayCheckbox.checked) {
            setupModal.classList.remove('hidden');
            videoCountInput.value = '';
        }
    }, 500);
    
    currentPage = 0;
}

// Update page indicator
function updatePageIndicator() {
    pageIndicator.textContent = `Page ${currentPage}/${totalPages}`;
}

// Go to specific page
function goToPage(pageNum) {
    if (pageNum < 1 || pageNum > totalPages) return;
    
    clearTimeout(autoPlayTimeout);
    isAutoPlaying = false;
    
    // Reset all pages to original position and z-index
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.transform = 'rotateY(0deg)';
        page.classList.remove('turning');
        page.classList.remove('active');
    });
    
    // Turn all previous pages
    for (let i = 1; i < pageNum; i++) {
        const prevPage = document.getElementById(`page${i}`);
        if (prevPage) {
            prevPage.style.transform = 'rotateY(-180deg)';
        }
    }
    
    // Set current page as active (higher z-index)
    const currentPageElement = document.getElementById(`page${pageNum}`);
    if (currentPageElement) {
        currentPageElement.classList.add('active');
    }
    
    currentPage = pageNum;
    updatePageIndicator();
    autoPlayCurrentPage();
}

// Auto-play current page
function autoPlayCurrentPage() {
    if (!isBookOpen || currentPage < 1 || currentPage > totalPages) return;
    
    isAutoPlaying = true;
    const currentPageElement = document.getElementById(`page${currentPage}`);
    const iframe = currentPageElement ? currentPageElement.querySelector('iframe') : null;
    
    if (!iframe) return;
    
    // Update iframe src to autoplay
    iframe.src = iframe.src.replace('&autoplay=0', '&autoplay=1');
    
    // Get duration from our playlist data
    const videoData = videoPlaylist[currentPage - 1];
    const duration = videoData ? videoData.duration * 1000 : 30000; // default to 30s if no duration
    
    autoPlayTimeout = setTimeout(() => {
        if (currentPage < totalPages) {
            turnPage(currentPage);
        } else {
            // Last page - close the book after delay
            setTimeout(() => {
                closeBook();
            }, 2000);
        }
    }, duration);
}

// Turn page animation
function turnPage(pageNum) {
    if (pageNum < 1 || pageNum >= totalPages) return;
    
    const page = document.getElementById(`page${pageNum}`);
    if (!page) return;
    
    page.classList.add('turning');
    
    setTimeout(() => {
        page.style.transform = 'rotateY(-180deg)';
        page.classList.remove('turning');
        goToPage(pageNum + 1);
    }, 1000);
}

// Navigation functions
function prevPage() {
    if (currentPage <= 1) return;
    pauseCurrentVideo();
    goToPage(currentPage - 1);
}

function nextPage() {
    if (currentPage >= totalPages) return;
    pauseCurrentVideo();
    
    if (currentPage < totalPages) {
        turnPage(currentPage);
    }
}

// Pause current video
function pauseCurrentVideo() {
    if (currentPage < 1 || currentPage > totalPages) return;
    const currentPageElement = document.getElementById(`page${currentPage}`);
    if (!currentPageElement) return;
    
    const iframe = currentPageElement.querySelector('iframe');
    if (iframe) {
        iframe.src = iframe.src.replace('&autoplay=1', '&autoplay=0');
    }
    
    clearTimeout(autoPlayTimeout);
    isAutoPlaying = false;
}

// Handle visibility change
function handleVisibilityChange() {
    if (document.hidden) {
        pauseCurrentVideo();
    } else if (isBookOpen && isAutoPlaying) {
        autoPlayCurrentPage();
    }
}

// Initialize the book when DOM is loaded
document.addEventListener('DOMContentLoaded', initBook);


/*
Key changes made:

Removed fixed video count and added a setup modal where users can specify how many videos they want to watch

Added an option for infinite playback (asks for more videos after finishing)

Implemented dynamic page creation based on user input

Added YouTube playlist integration (note: actual YouTube API implementation would require server-side code due to API key requirements)

Made the video handling more dynamic with iframes instead of fixed video elements

Added proper video duration handling from playlist data

Improved the page navigation to work with dynamic content

Note: For a complete implementation, you would need to:

Register for a YouTube API key

Implement server-side code to fetch the playlist videos (due to CORS restrictions)

Handle the YouTube Player API properly to control playback

The current implementation uses mock data for demonstration purposes. In a production environment, you would need to replace the loadYouTubePlaylist() function with actual API calls to YouTube.

You'll also need to add corresponding HTML for the setup modal and CSS styles for the new elements.
*/ 