 // Global variables
 let currentPage = 0;
 const totalPages = 5;
 let isBookOpen = false;
 let autoPlayTimeout;
 let isAutoPlaying = false;

 // DOM elements
 const cover = document.getElementById('cover');
 const openBtn = document.getElementById('openBtn');
 const navControls = document.getElementById('navControls');
 const pageIndicator = document.getElementById('pageIndicator');
 const prevBtn = document.getElementById('prevBtn');
 const nextBtn = document.getElementById('nextBtn');
 const videos = [
     document.getElementById('video1'),
     document.getElementById('video2'),
     document.getElementById('video3'),
     document.getElementById('video4'),
     document.getElementById('video5')
 ];
 const pages = [
     document.getElementById('page1'),
     document.getElementById('page2'),
     document.getElementById('page3'),
     document.getElementById('page4'),
     document.getElementById('page5')
 ];
 const prevPageButtons = document.querySelectorAll('.prev-page');
 const nextPageButtons = document.querySelectorAll('.next-page');

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
        //  decor.style.top = `${Math.random() * 100}%`;
        //  decor.style.left = `${Math.random() * 100}%`;
        decor.style.zIndex=1;
         decor.style.transform = `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.5})`;
        //  document.body.appendChild(decor);//this gets on the book and not looks good hence avoiding it to add now.//uncommnent later
     }

     // Set video durations (simulated)
     videos.forEach((video, index) => {
         video.addEventListener('loadedmetadata', function() {
             // const durations = [30, 20, 10, 15, 25];
             const durations = [15, 15, 4, 51, 5];
             this.currentTime = Math.min(durations[index], this.duration - 1);
         });
     });

     // Event listeners
     openBtn.addEventListener('click', openBook);
     prevBtn.addEventListener('click', prevPage);
     nextBtn.addEventListener('click', nextPage);
     
     prevPageButtons.forEach(btn => {
         btn.addEventListener('click', prevPage);
     });
     
     nextPageButtons.forEach(btn => {
         btn.addEventListener('click', nextPage);
     });

     document.addEventListener('visibilitychange', handleVisibilityChange);
 }




 // Open the book
 function openBook() {
     isBookOpen = true;
     openBtn.classList.add('hidden');
     navControls.classList.remove('hidden');
     navControls.style.display='flex';
     cover.style.transform = 'rotateY(-160deg)';
     
     setTimeout(() => {
         goToPage(1);
     // }, 1500);//when switching to new page
     // }, 1000);//when switching to new page
     }, 1000);//when switching to new page
     // }, 5);
 }

 // Close the book
 function closeBook() {
     isBookOpen = false;
     clearTimeout(autoPlayTimeout);
     isAutoPlaying = false;
     
     // Reset all pages
     pages.forEach(page => {
         page.style.transform = 'rotateY(0deg)';
         page.classList.remove('turning');
         page.classList.remove('active');
         navControls.classList.add('hidden');
         navControls.style.display="none";

     });
     
     // Close cover
     setTimeout(() => {
         cover.style.transform = 'rotateY(0deg)';
         openBtn.classList.remove('hidden');
         navControls.classList.add('hidden');
     }, 500);//it is showing default page for more time
     // }, 5);
     
     // Reset videos
     videos.forEach(video => {
         video.pause();
         video.currentTime = 0;
     });
     
     currentPage = 0;
 }

 // Update page indicator
 function updatePageIndicator() {
     pageIndicator.textContent = `Page ${currentPage}/${totalPages}`;
 }

var candleBody=document.getElementsByClassName("candle-body")[0];

 // Go to specific page
 function goToPage(pageNum) {

    // candleBody.parentElement.parentElement.height="40px" ;
    // candleBody.parentElement.height="40px" ;
    candleBody.style.height="100px" ;
    
     if (pageNum < 1 || pageNum > totalPages) return;
     
     clearTimeout(autoPlayTimeout);
     isAutoPlaying = false;
     
     // Reset all pages to original position and z-index
     pages.forEach(page => {
         page.style.transform = 'rotateY(0deg)';
         page.classList.remove('turning');
         page.classList.remove('active');
     });
     
     // Turn all previous pages
     for (let i = 1; i < pageNum; i++) {
         pages[i-1].style.transform = 'rotateY(-180deg)';
     }
     
     // Set current page as active (higher z-index)
     if (pageNum <= totalPages) {
         pages[pageNum-1].classList.add('active');
     }
     
     currentPage = pageNum;
     updatePageIndicator();
     autoPlayCurrentPage();
 }

 // Auto-play current page
 function autoPlayCurrentPage() {
     if (!isBookOpen || currentPage < 1 || currentPage > totalPages) return;
     
     isAutoPlaying = true;
     // const durations = [30000, 20000, 10000, 15000, 25000]; // 30s, 20s, 10s, 15s, 25s

     const durations = [16000, 15000, 4000, 51000, 5000]; // 30s, 20s, 10s, 15s, 25s

     const video = videos[currentPage-1];
     
     video.play().then(() => {
         autoPlayTimeout = setTimeout(() => {
             if (currentPage < totalPages) {
                 turnPage(currentPage);
             } else {
                 // Last page - close the book after delay
                 setTimeout(() => {
                     closeBook();
                 }, 2000);
             }
         }, durations[currentPage-1]);
     }).catch(error => {
         console.error('Video play error:', error);
         // Simulate video completion if autoplay is blocked
         autoPlayTimeout = setTimeout(() => {
             if (currentPage < totalPages) {
                 turnPage(currentPage);
             } else {
                 setTimeout(() => {
                     closeBook();
                 }, 2000);
             }
         }, durations[currentPage-1]);
     });
 }

 // Turn page animation
 function turnPage(pageNum) {
     if (pageNum < 1 || pageNum >= totalPages) return;
     
     const page = pages[pageNum-1];
     page.classList.add('turning');
     
    


     // goToPage(pageNum + 1);//makes flutate a lot.


     setTimeout(() => {
         page.style.transform = 'rotateY(-180deg)';
         page.classList.remove('turning');
         goToPage(pageNum + 1);
     }, 1000);
     // }, 5);


     // setTimeout(() => {
     //     goToPage(pageNum + 1);//not let to turn the page
     // }, 5);
     

    
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
     videos[currentPage-1].pause();
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