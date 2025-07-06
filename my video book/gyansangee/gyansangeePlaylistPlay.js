// Global variables
let currentPage = 0;
let totalPages = 0;
let isBookOpen = false;
let autoPlayTimeout;
let isAutoPlaying = false;
let videoLoadCheckInterval;
let videoPlayers = {};

// Video playlist with YouTube embed URLs
const videoPlaylist = [
    // 'https://www.youtube.com/embed/Kj7GQtkSKEA?enablejsapi=1',
    // 'https://www.youtube.com/embed/sURTQXxrynQ?enablejsapi=1',
    // 'https://www.youtube.com/embed/rUNCAacEalg?enablejsapi=1',
    // 'https://www.youtube.com/embed/me4k9eqj2do?enablejsapi=1',
    // 'https://www.youtube.com/embed/j3_Xr5aeu0Q?enablejsapi=1'


    'https://www.youtube.com/embed/jWFAWvPGqt4?enablejsapi=1', // Video 1
    'https://www.youtube.com/embed/Kj7GQtkSKEA?enablejsapi=1', // Video 1
    'https://www.youtube.com/embed/sURTQXxrynQ?enablejsapi=1', // Video 2
    'https://www.youtube.com/embed/rUNCAacEalg?enablejsapi=1', // Video 3
    'https://www.youtube.com/embed/me4k9eqj2do?enablejsapi=1', // Video 4
    'https://www.youtube.com/embed/j3_Xr5aeu0Q?enablejsapi=1', // Video 5
    'https://www.youtube.com/embed/FceicupMmsE?enablejsapi=1', // Video 6
    'https://www.youtube.com/embed/ANEokonLIPg?enablejsapi=1', // Video 7
    'https://www.youtube.com/embed/fgsOUXFjceE?enablejsapi=1', // Video 8
    'https://www.youtube.com/embed/6BAFwhP0Wkw?enablejsapi=1',  // Video 10
    'https://www.youtube.com/embed/GWRy-lb4goA?enablejsapi=1', // Video 9
    'https://www.youtube.com/embed/BhxFtcseoY8?enablejsapi=1', // Video 9
    'https://www.youtube.com/embed/_uWHLBv2R28?enablejsapi=1', // Video 9
    'https://www.youtube.com/embed/0NSBslUWsH8?enablejsapi=1', // Video 9
    // 'attachments/Shanaya.mp4', // Video 9
    // 'attachments/Greatest Of Great Intro.mp4', // Video 9
    // 'attachments/Gyan Sangee.png', // Video 9
    

];

// Video durations in milliseconds (fallback if can't get actual duration)
const videoDurations = [
   25000,
    10000, 
    9000, 
    12000, 
    11000, 
    15000, 
    11000, 
    18000, 
    23000, 
    12000,
    25000,
    21000, 
    26000,
    56000 ,
    // 5000 
    1000 
    
];


// Wisdom quotes for each page
const pageQuotes = [
    "Wisdom begins with wonder",
    "Knowledge is the light that dispels darkness",
    "Learning is a treasure that follows its owner everywhere",
    "The mind is not a vessel to be filled but a fire to be kindled",
    "True wisdom comes from understanding oneself"
];

// DOM elements
const cover = document.getElementById('cover');
const openBtn = document.getElementById('openBtn');
const navControls = document.getElementById('navControls');
const pageIndicator = document.getElementById('pageIndicator');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pagesContainer = document.getElementById('pages');

// Initialize the book
function initBook() {
    // Remove any existing static pages
    clearStaticPages();
    
    // Create stars
    createStars();
    
    // Add premium decorations
    addDecorations();
    
    // Create pages based on playlist
    createPagesFromPlaylist();

    // Set up event listeners
    setupEventListeners();
    
    // Listen for YouTube API ready messages
    window.addEventListener('message', handleYouTubeMessages);
}

function clearStaticPages() {
    while (pagesContainer.firstChild) {
        pagesContainer.removeChild(pagesContainer.firstChild);
    }
}

function createStars() {
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
}

function addDecorations() {
    for (let i = 0; i < 8; i++) {
        const decor = document.createElement('div');
        decor.classList.add('premium-decoration');
        decor.style.top = `${Math.random() * 90}%`;
        decor.style.left = `${Math.random() * 90}%`;
        decor.style.zIndex = 1;
        decor.style.transform = `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.5})`;
        document.body.appendChild(decor);
    }
}

function setupEventListeners() {
    openBtn.addEventListener('click', openBook);
    prevBtn.addEventListener('click', prevPage);
    nextBtn.addEventListener('click', nextPage);
    document.addEventListener('visibilitychange', handleVisibilityChange);
}

function createPagesFromPlaylist() {
    totalPages = videoPlaylist.length;
    
    videoPlaylist.forEach((videoUrl, index) => {
        const page = document.createElement('div');
        page.className = 'page';
        page.id = `page${index + 1}`;
        
        const pageContent = document.createElement('div');
        pageContent.className = 'page-content';
        
        // For the last page, add image instead of video
        if (index === videoPlaylist.length - 1) {
            const imageContainer = document.createElement('div');
            imageContainer.className = 'image-container';
            
            const img = document.createElement('img');
            img.src = 'attachments/Gyan Sangee.png';
            img.alt = 'Gyan Sangee';
            img.className = 'final-page-image';
            
            imageContainer.appendChild(img);
            pageContent.appendChild(imageContainer);
        } else {
            // For other pages, add video as before
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
            pageContent.appendChild(videoContainer);
        }
        
        const pageText = document.createElement('div');
        pageText.className = 'page-text';
        pageText.textContent = pageQuotes[index] || "Seek knowledge and wisdom";
        
        const pageNumber = document.createElement('div');
        pageNumber.className = 'page-number';
        pageNumber.textContent = `Page ${index + 1}`;
        
        pageContent.appendChild(pageText);
        page.appendChild(pageContent);
        page.appendChild(pageNumber);
        
        if (index > 0) {
            const prevBtn = document.createElement('button');
            prevBtn.className = 'page-nav prev-page';
            prevBtn.innerHTML = '&lt;';
            prevBtn.addEventListener('click', prevPage);
            page.appendChild(prevBtn);
        }
        
        if (index < totalPages - 1) {
            const nextBtn = document.createElement('button');
            nextBtn.className = 'page-nav next-page';
            nextBtn.innerHTML = '&gt;';
            nextBtn.addEventListener('click', nextPage);
            page.appendChild(nextBtn);
        }
        
        pagesContainer.appendChild(page);
    });
}

function handleYouTubeMessages(event) {
    try {
        const data = JSON.parse(event.data);
        if (data.event === 'onReady') {
            const iframeId = data.id;
            videoPlayers[iframeId] = true;
        }
    } catch (e) {
        // Not a YouTube API message
    }
}

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

function closeBook() {
    isBookOpen = false;
    clearTimeout(autoPlayTimeout);
    clearInterval(videoLoadCheckInterval);
    isAutoPlaying = false;
    
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.transform = 'rotateY(0deg)';
        page.classList.remove('turning');
        page.classList.remove('active');
    });
    
    setTimeout(() => {
        cover.style.transform = 'rotateY(0deg)';
        openBtn.classList.remove('hidden');
        navControls.classList.add('hidden');
    }, 500);
    
    currentPage = 0;
}

function updatePageIndicator() {
    pageIndicator.textContent = `Page ${currentPage}/${totalPages}`;
}

function goToPage(pageNum) {
    if (pageNum < 1 || pageNum > totalPages) return;
    
    clearTimeout(autoPlayTimeout);
    clearInterval(videoLoadCheckInterval);
    isAutoPlaying = false;
    
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.transform = 'rotateY(0deg)';
        page.classList.remove('turning');
        page.classList.remove('active');
    });
    
    for (let i = 1; i < pageNum; i++) {
        const prevPage = document.getElementById(`page${i}`);
        if (prevPage) {
            prevPage.style.transform = 'rotateY(-180deg)';
        }
    }
    
    const currentPageElement = document.getElementById(`page${pageNum}`);
    if (currentPageElement) {
        currentPageElement.classList.add('active');
    }
    
    currentPage = pageNum;
    updatePageIndicator();
    autoPlayCurrentPage();
}

function autoPlayCurrentPage() {
    if (!isBookOpen || currentPage < 1 || currentPage > totalPages) return;
    
    isAutoPlaying = true;
    const currentPageElement = document.getElementById(`page${currentPage}`);
    const iframe = currentPageElement ? currentPageElement.querySelector('iframe') : null;
    
    if (!iframe) return;

    clearTimeout(autoPlayTimeout);
    clearInterval(videoLoadCheckInterval);

    // First try to play the video
    iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');

    // Check if video is ready and get duration
    let attempts = 0;
    const maxAttempts = 10;
    const checkInterval = 500;

    videoLoadCheckInterval = setInterval(() => {
        attempts++;
        
        try {
            // Check video state
            iframe.contentWindow.postMessage('{"event":"command","func":"getPlayerState","args":""}', '*');
            
            window.addEventListener('message', function onMessage(e) {
                if (e.source !== iframe.contentWindow) return;
                
                try {
                    const data = JSON.parse(e.data);
                    if (data.info && data.info.duration) {
                        // Video is loaded and ready
                        clearInterval(videoLoadCheckInterval);
                        window.removeEventListener('message', onMessage);
                        
                        const duration = videoDurations[currentPage - 1] || (data.info.duration * 1000);
                        autoPlayTimeout = setTimeout(() => {
                            if (currentPage < totalPages) {
                                turnPage(currentPage);
                            } else {
                                setTimeout(closeBook, 2000);
                            }
                        }, duration);
                    }
                } catch (err) {
                    console.log('Error parsing video data', err);
                }
            });
            
        } catch (err) {
            console.log('Video not ready yet', err);
        }

        if (attempts >= maxAttempts) {
            // Fallback to default duration
            clearInterval(videoLoadCheckInterval);
            const duration = videoDurations[currentPage - 1] || 30000;
            autoPlayTimeout = setTimeout(() => {
                if (currentPage < totalPages) {
                    turnPage(currentPage);
                } else {
                    setTimeout(closeBook, 2000);
                }
            }, duration);
        }
    }, checkInterval);
}

function turnPage(pageNum) {
    if (pageNum < 1 || pageNum >= totalPages) return;
    
    const page = document.getElementById(`page${pageNum}`);
    if (!page) return;
    
    const iframe = page.querySelector('iframe');
    if (iframe) {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
    
    page.classList.add('turning');
    
    setTimeout(() => {
        page.style.transform = 'rotateY(-180deg)';
        page.classList.remove('turning');
        goToPage(pageNum + 1);
    }, 1000);
}

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

function pauseCurrentVideo() {
    if (currentPage < 1 || currentPage > totalPages) return;
    const currentPageElement = document.getElementById(`page${currentPage}`);
    if (!currentPageElement) return;
    
    const iframe = currentPageElement.querySelector('iframe');
    if (iframe) {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
    
    clearTimeout(autoPlayTimeout);
    clearInterval(videoLoadCheckInterval);
    isAutoPlaying = false;
}

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
Key features of this implementation:

Last Page Special Treatment:

The last page now shows an image instead of a video

The image is centered and properly contained within the page

Responsive Image Styling:

Image will scale to fit while maintaining aspect ratio

Proper borders and shadows for visual appeal

Centered both horizontally and vertically

Consistent Layout:

Maintains the same overall page structure

Preserves all navigation functionality

Keeps the quote text below the image

Visual Enhancements:

Golden border to match the book's theme

Subtle shadow for depth

Proper spacing around the image

The image will now appear on the last page of your book, perfectly centered and sized to fit within the page boundaries while maintaining all the existing functionality of your book.
*/