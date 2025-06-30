// Typing Animation
const typingText = document.querySelector('.typing-text');
const phrases = ["Computer Science Student", "Web Developer", "AI Enthusiast","UI/UX Designer","Database Administrator","Data Analyst"];
let i = 0, j = 0;
let currentPhrase = [];
let isDeleting = false;

function type() {
    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);

            // alert(currentPhrase);//keep pushing one one letters in the currentPhrase like C,o,m,p,u,t,e,r, ,S,c,i,e,n,c,e, ,S,t,u,d,e,n,t
            j++;
            typingText.textContent = currentPhrase.join('');//The join() method is super useful for anyone coding in JavaScript. It helps you change a list of things into a single line of text. Here's what to remember: join() makes a string from an array by putting a separator, like a comma, between each part.
        }

        if (isDeleting && j >= 0) {
            currentPhrase.pop();
            j--;
            typingText.textContent = currentPhrase.join('');
        }

        if (j === phrases[i].length) {

            
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            typingText.textContent=".";
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i === phrases.length) i = 0;
        }
    }
    setTimeout(type, 100);
}

document.addEventListener('DOMContentLoaded', type);

// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
             e.preventDefault();
            const targetSection = document.querySelector(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});