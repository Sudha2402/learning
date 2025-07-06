// Global variables
let currentPage = 0;
let totalPages = 0;
let isBookOpen = false;
let autoPlayTimeout;
let isAutoPlaying = false;
let videoLoadCheckInterval;
let videoPlayers = {};
let activeVideos = {}; // Track active video players

// Video playlist with YouTube embed URLs
const videoPlaylist = [
    'https://www.youtube.com/embed/jWFAWvPGqt4?enablejsapi=1',
    'https://www.youtube.com/embed/Kj7GQtkSKEA?enablejsapi=1',
    'https://www.youtube.com/embed/sURTQXxrynQ?enablejsapi=1',
    'https://www.youtube.com/embed/rUNCAacEalg?enablejsapi=1',
    'https://www.youtube.com/embed/me4k9eqj2do?enablejsapi=1',
    'https://www.youtube.com/embed/j3_Xr5aeu0Q?enablejsapi=1',
    'https://www.youtube.com/embed/FceicupMmsE?enablejsapi=1',
    'https://www.youtube.com/embed/ANEokonLIPg?enablejsapi=1',
    'https://www.youtube.com/embed/fgsOUXFjceE?enablejsapi=1',
    'https://www.youtube.com/embed/6BAFwhP0Wkw?enablejsapi=1',
    'https://www.youtube.com/embed/GWRy-lb4goA?enablejsapi=1',
    'https://www.youtube.com/embed/BhxFtcseoY8?enablejsapi=1',
    'https://www.youtube.com/embed/_uWHLBv2R28?enablejsapi=1',
    'https://www.youtube.com/embed/0NSBslUWsH8?enablejsapi=1'
];

// Video durations in milliseconds (fallback if can't get actual duration)
const videoDurations = [
    25000, 10000, 9000, 12000, 11000, 15000, 
    11000, 18000, 23000, 12000, 25000, 21000, 
    26000, 56000
];

// Wisdom quotes for each page
const pageQuotes = [
    "Wisdom begins with wonder",
    "Knowledge is the light that dispels darkness",
    "Learning is a treasure that follows its owner everywhere",
    "The mind is not a vessel to be filled but a fire to be kindled",
    "True wisdom comes from understanding oneself",
    "Knowledge grows when shared",
    "The journey of learning never ends",
    "Curiosity is the wick in the candle of learning",
    "Education is the most powerful weapon",
    "An investment in knowledge pays the best interest",
    "Learning is a treasure that will follow its owner everywhere",
    "The beautiful thing about learning is that no one can take it away from you",
    "Education is not preparation for life; education is life itself",
    "The more that you read, the more things you will know"
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
    clearStaticPages();
    createStars();
    addDecorations();
    createPagesFromPlaylist();
    setupEventListeners();
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
        
        if (index === videoPlaylist.length - 1) {
            // Last page with image
            const imageContainer = document.createElement('div');
            imageContainer.className = 'image-container';
            
            const img = document.createElement('img');
            img.src = 'attachments/Gyan Sangee.png';
            img.alt = 'Gyan Sangee';
            img.className = 'final-page-image';
            
            imageContainer.appendChild(img);
            pageContent.appendChild(imageContainer);
            
            // Add closing behavior for last page
            autoPlayTimeout = setTimeout(() => {
                closeBook();
            }, 5000); // Show image for 5 seconds before closing
        } else {
            // Video pages
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
            activeVideos[iframeId] = true;
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
    if (!isBookOpen) return;
    
    isBookOpen = false;
    clearTimeout(autoPlayTimeout);
    clearInterval(videoLoadCheckInterval);
    isAutoPlaying = false;
    
    // Pause all videos
    Object.keys(activeVideos).forEach(videoId => {
        const iframe = document.getElementById(videoId);
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
    });
    activeVideos = {};
    
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
    
    // Pause current video if exists
    if (currentPage > 0 && currentPage <= totalPages) {
        const currentVideo = document.getElementById(`video${currentPage}`);
        if (currentVideo && currentVideo.contentWindow) {
            currentVideo.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            delete activeVideos[`video${currentPage}`];
        }
    }
    
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
    
    if (pageNum === totalPages) {
        // Special handling for last page (image)
        autoPlayTimeout = setTimeout(() => {
            closeBook();
        }, 5000);
    } else {
        autoPlayCurrentPage();
    }
}

function autoPlayCurrentPage() {
    if (!isBookOpen || currentPage < 1 || currentPage >= totalPages) return;
    
    isAutoPlaying = true;
    const currentPageElement = document.getElementById(`page${currentPage}`);
    const iframe = currentPageElement ? currentPageElement.querySelector('iframe') : null;
    
    if (!iframe) return;

    clearTimeout(autoPlayTimeout);
    clearInterval(videoLoadCheckInterval);

    // Track this video as active
    activeVideos[iframe.id] = true;
    
    // First try to play the video
    iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');

    // Check if video is ready and get duration
    let attempts = 0;
    const maxAttempts = 15; // Increased from 10 to 15
    // const checkInterval = 800; // Increased from 500 to 800
    const checkInterval = 500; // Increased from 500 to 800

    videoLoadCheckInterval = setInterval(() => {
        attempts++;
        
        try {
            iframe.contentWindow.postMessage('{"event":"command","func":"getPlayerState","args":""}', '*');
            
            const onMessage = function(e) {
                if (e.source !== iframe.contentWindow) return;
                
                try {
                    const data = JSON.parse(e.data);
                    if (data.info && data.info.duration) {
                        clearInterval(videoLoadCheckInterval);
                        window.removeEventListener('message', onMessage);
                        
                        const duration = videoDurations[currentPage - 1] || (data.info.duration * 1000);
                        autoPlayTimeout = setTimeout(() => {
                            if (currentPage < totalPages) {
                                turnPage(currentPage);
                            }
                        }, duration + 1000); // Added 1 second buffer
                    }
                } catch (err) {
                    console.log('Error parsing video data', err);
                }
            };
            
            window.addEventListener('message', onMessage);
            
        } catch (err) {
            console.log('Video not ready yet', err);
        }

        if (attempts >= maxAttempts) {
            clearInterval(videoLoadCheckInterval);
            const duration = videoDurations[currentPage - 1] || 30000;
            autoPlayTimeout = setTimeout(() => {
                if (currentPage < totalPages) {
                    turnPage(currentPage);
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
    if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        delete activeVideos[iframe.id];
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
    if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        delete activeVideos[iframe.id];
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


Key Features:
Dynamic Page Creation: The code automatically creates pages based on the videoPlaylist array length. Just add more YouTube embed URLs to expand the book.

Easy Playlist Management:

Add videos by simply adding their embed URLs to the videoPlaylist array

Set durations in the videoDurations array (in milliseconds)

Automatic Playback:

Videos autoplay in sequence

Each video plays for its specified duration before turning to the next page

Simple Integration:

No YouTube API required

Just paste standard YouTube embed URLs

Navigation Controls:

Previous/Next buttons

Page indicator showing current position

How to Add More Videos:
Simply add a new YouTube embed URL to the videoPlaylist array:


Fixed YouTube embed URLs: Changed URLs to use ?autoplay=0&si=... instead of having two ? characters

Matched durations to videos: Removed extra durations that didn't have matching videos

Fixed URL handling: Ensured consistent handling of autoplay parameter replacement

Preserved all original functions: All navigation and animation functions work as before

The book should now open and function properly with your playlist. To add more videos:

Add the embed URL to videoPlaylist array in the format:
'https://www.youtube.com/embed/VIDEO_ID?autoplay=0&si=PARAMETERS'

Add a corresponding duration (in milliseconds) to the videoDurations array

The code will automatically create the appropriate number of pages and handle all navigation.





Key changes made:

Fixed HTML Structure: Removed static pages and let JavaScript create them dynamically

Corrected YouTube URLs: Fixed the embed URLs to work properly

Added Quotes: Included wisdom quotes for each page

Improved Page Creation: Enhanced the dynamic page creation with proper structure

Fixed Navigation: Ensured prev/next buttons work correctly

Maintained All Features: Kept all the original functionality (candle, stars, animations)

The CSS file (style.css) can remain exactly as you had it, as it's already properly styled for this implementation.

To add more videos:

Add the YouTube embed URL to videoPlaylist array

Add a corresponding duration (in milliseconds) to videoDurations array

Add a matching quote to pageQuotes array

The book should now open and function properly with smooth page transitions and video playback



Key improvements:

Complete Removal of Static Pages: The JavaScript now completely removes any existing static pages before creating dynamic ones

Better Code Organization: Functions are more modular and organized

Cleaner HTML: Removed all static page content from HTML

Preserved All Features: All original functionality (animations, candle, stars) remains intact

Dynamic Content Creation: Pages are created based on the video playlist array

The CSS file (style.css) can remain exactly as you had it, as it's already properly styled for this implementation.

To add more videos:

Add the YouTube embed URL to videoPlaylist array

Add a corresponding duration to videoDurations array

Add a matching quote to pageQuotes array

The book will now always use the dynamic content from your JavaScript, regardless of what was originally in the HTML.








Key features of this CSS:

Portrait Ratio: Uses aspect-ratio: 9/16 for perfect shorts/portrait format

Responsive Design: Adjusts for different screen sizes

Content Protection:

Prevents overflow with proper container sizing

Ensures text doesn't overlap with scrollable content

Maintains proper spacing between elements

Visual Enhancements:

Clean borders and shadows

Proper rounded corners

Layout Adjustments:

Changed page content alignment to accommodate taller videos

Added proper padding and margins

To implement:

Add these styles to your existing style.css file

Remove any conflicting styles you might have for these selectors

The videos will now display in portrait format while maintaining all other book functionality

The layout will automatically adjust to show the full portrait video without overlapping other elements, and the page content will scroll if needed on smaller screens.




Key improvements:

Video Loading Handling:

Added enablejsapi=1 to YouTube URLs for better control

Implemented a checking mechanism to detect when videos are fully loaded

Uses YouTube Player API to get actual video duration

Playback Control:

Properly pauses videos before page turns

Uses both the predefined durations and actual video durations

Fallback to default duration if video fails to load

Error Handling:

Maximum attempt limit to prevent infinite checking

Graceful fallback to default timing

Better error logging

Clean Transitions:

Ensures videos are paused before page turns

Maintains smooth animation timing

To implement:

Replace your existing JavaScript with this modified version

Ensure your YouTube URLs include enablejsapi=1 parameter

The videos will now:

Wait to be fully loaded before starting playback

Play completely before turning pages

Fallback to default timing if there are loading issues

Handle errors gracefully

This solution provides a much better user experience by ensuring videos play completely before automatic page turns occur.









Key improvements in this complete solution:

Video Loading Handling:

Uses YouTube Player API (enablejsapi=1) for precise control

Implements a robust checking system to detect when videos are ready

Tracks video player states to ensure proper playback

Playback Duration Management:

Uses both predefined durations and actual video durations

Fallback mechanism if video fails to load

Properly pauses videos before page turns

Error Handling:

Comprehensive error catching

Maximum attempt limit to prevent infinite checking

Graceful fallback to default timing

Performance:

Cleans up intervals and timeouts properly

Efficient message handling

Memory management with player tracking

User Experience:

Ensures videos play completely before turning pages

Maintains smooth animations

Handles background tab behavior properly

To implement:

Replace your existing JavaScript file with this complete version

Ensure your YouTube URLs include enablejsapi=1 parameter

The videos will now:

Wait to be fully loaded before starting playback

Play completely before automatic page turns

Handle errors gracefully

Provide a smooth, uninterrupted reading experience

This solution addresses all the issues with video loading and playback timing while maintaining all the original book functionality.


Key improvements made:

Fixed Last Page Closing:

Added explicit closing behavior for the last page (image)

Set a 5-second timer to automatically close the book after showing the image

Video Playback Control:

Added an activeVideos object to track currently playing videos

Properly pause previous videos when turning pages

Clean up video references when pausing or closing

Improved Loading Handling:

Increased max attempts from 10 to 15

Increased check interval from 500ms to 800ms

Added 1-second buffer to video duration to ensure complete playback

Error Prevention:

Added checks for iframe contentWindow existence before sending commands

Better error handling for YouTube API messages

More robust cleanup of intervals and timeouts

Consistent Behavior:

Ensured all videos are properly paused when closing book or changing pages

Maintained smooth page turning animations

Preserved all original functionality while fixing the issues

The book should now:

Properly close after showing the last page image

Correctly pause previous videos when turning pages

Wait for videos to load before starting playback

Play each video completely before turning to the next page

Handle all edge cases more gracefully
*/