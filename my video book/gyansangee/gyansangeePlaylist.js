// Global variables
let currentPage = 0;
let totalPages = 0;
let isBookOpen = false;
let autoPlayTimeout;
let isAutoPlaying = false;

// Video playlist - simply add more YouTube embed URLs to expand the book
const videoPlaylist = [
    // 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0', // Video 1
    // 'https://www.youtube.com/embed/9bZkp7q19f0?autoplay=0', // Video 2
    // 'https://www.youtube.com/embed/kJQP7kiw5Fk?autoplay=0', // Video 3
    // 'https://www.youtube.com/embed/RgKAFK5djSk?autoplay=0', // Video 4
    // 'https://www.youtube.com/embed/JGwWNGJdvx8?autoplay=0', // Video 5
    // 'https://www.youtube.com/embed/OPf0YbXqDm0?autoplay=0', // Video 6
    // 'https://www.youtube.com/embed/kOkQ4T5WO9E?autoplay=0', // Video 7
    // 'https://www.youtube.com/embed/2Vv-BfVoq4g?autoplay=0', // Video 8
    // 'https://www.youtube.com/embed/JGwWNGJdvx8?autoplay=0', // Video 9
    // 'https://www.youtube.com/embed/RgKAFK5djSk?autoplay=0'  // Video 10
    
    'https://www.youtube.com/embed/Kj7GQtkSKEA?si=gJl8G9D33VBstzCf?autoplay=0', // Video 1
    'https://www.youtube.com/embed/sURTQXxrynQ?si=vZNS-Js38XEq-jej?autoplay=0', // Video 2
    'https://www.youtube.com/embed/rUNCAacEalg?si=p8_MX8dA6RmZN4Fu?autoplay=0', // Video 3
    'https://www.youtube.com/embed/me4k9eqj2do?si=TJrcL1Z8codqIH6F?autoplay=0', // Video 4
    'https://www.youtube.com/embed/j3_Xr5aeu0Q?si=80cyyYAJRTLNN7Ag?autoplay=0', // Video 5
    'https://www.youtube.com/embed/FceicupMmsE?si=aY---qW_07XHAjHp?autoplay=0', // Video 6
    'https://www.youtube.com/embed/ANEokonLIPg?si=E8TPfY-I-VzpUprK?autoplay=0', // Video 7
    'https://www.youtube.com/embed/fgsOUXFjceE?si=J7IiIfrIB7bSFkTV?autoplay=0', // Video 8
    'https://www.youtube.com/embed/GWRy-lb4goA?si=yo15DAH3E9Byj5BC?autoplay=0', // Video 9
    'https://www.youtube.com/embed/6BAFwhP0Wkw?si=PXf8HNp7eWF0EQ8j?autoplay=0'  // Video 10
];

// Video durations in milliseconds (should match playlist order)
const videoDurations = [
    // 212000, // 3:32 for video 1
    // 254000, // 4:14 for video 2
    // 292000, // 4:52 for video 3
    // 221000, // 3:41 for video 4
    // 231000, // 3:51 for video 5
    // 183000, // 3:03 for video 6
    // 196000, // 3:16 for video 7
    // 208000, // 3:28 for video 8
    // 231000, // 3:51 for video 9
    // 221000  // 3:41 for video 10

    10000, // 3:32 for video 1
    9000, // 4:14 for video 2
    12000, // 4:52 for video 3
    11000, // 3:41 for video 4
    15000, // 3:51 for video 5
    11000, // 3:03 for video 6
    18000, // 3:16 for video 7
    23000, // 3:28 for video 8
    12000, // 3:51 for video 9
    25000,  // 3:41 for video 10
    21000,  // 3:41 for video 10
    26000,  // 3:41 for video 10
    56000,  // 3:41 for video 10
    25000,  // 3:41 for video 10
];

// DOM elements
const cover = document.getElementById('cover');
const openBtn = document.getElementById('openBtn');
const navControls = document.getElementById('navControls');
const pageIndicator = document.getElementById('pageIndicator');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pagesContainer = document.getElementById('pagesContainer');

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

    // Create pages based on playlist
    createPagesFromPlaylist();

    // Event listeners
    openBtn.addEventListener('click', openBook);
    prevBtn.addEventListener('click', prevPage);
    nextBtn.addEventListener('click', nextPage);

    document.addEventListener('visibilitychange', handleVisibilityChange);
}

// Create pages dynamically based on the playlist
function createPagesFromPlaylist() {
    // Clear existing pages
    pagesContainer.innerHTML = '';
    
    // Set total pages based on playlist length
    totalPages = videoPlaylist.length;
    
    // Create a page for each video in the playlist
    videoPlaylist.forEach((videoUrl, index) => {
        const page = document.createElement('div');
        page.className = 'page';
        page.id = `page${index + 1}`;
        
        const videoContainer = document.createElement('div');
        videoContainer.className = 'video-container';
        
        const iframe = document.createElement('iframe');
        iframe.id = `video${index + 1}`;
        iframe.className = 'video';
        iframe.src = videoUrl;
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        
        videoContainer.appendChild(iframe);
        page.appendChild(videoContainer);
        pagesContainer.appendChild(page);
    });
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
            // Replace autoplay=1 with autoplay=0 to pause
            iframe.src = iframe.src.replace('autoplay=1', 'autoplay=0');
        }
    });
    
    // Close cover
    setTimeout(() => {
        cover.style.transform = 'rotateY(0deg)';
        openBtn.classList.remove('hidden');
        navControls.classList.add('hidden');
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
    
    // Set video to autoplay
    iframe.src = iframe.src.replace('autoplay=0', 'autoplay=1');
    
    // Get duration for this video (default to 30 seconds if not specified)
    const duration = videoDurations[currentPage - 1] || 30000;
    
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
        // Replace autoplay=1 with autoplay=0 to pause
        iframe.src = iframe.src.replace('autoplay=1', 'autoplay=0');
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
How to Add More Videos:
Simply add a new YouTube embed URL to the videoPlaylist array:

javascript
const videoPlaylist = [
    'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0', // Video 1
    'https://www.youtube.com/embed/9bZkp7q19f0?autoplay=0', // Video 2
    // Add more videos here...
    'https://www.youtube.com/embed/NEW_VIDEO_ID?autoplay=0' // New video
];
Add a corresponding duration (in milliseconds) to the videoDurations array:

javascript
const videoDurations = [
    212000, // Video 1 duration
    254000, // Video 2 duration
    // Add more durations here...
    180000  // New video duration (3 minutes)
];
The code will automatically create the appropriate number of pages and handle all the navigation for you.
*/