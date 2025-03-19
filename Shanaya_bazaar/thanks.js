// https://www.npmjs.com/package/js-confetti

// https://www.cssscript.com/tag/confetti/

// check above link to learn more about confetti




// const jsConfetti = new JSConfetti(); //even this pronly present outside can play confetti after reload. hence put this also inside button.at time of load this will run first confetti

// jsConfetti.addConfetti();//this will add to the screen when it opens hence if we want it to play after button click then put it inside //plays the first one 

var thanksbutton= document.getElementsByClassName("thanks");
for(var i=0;i<thanksbutton.length;i++){
    thanksbutton[i].addEventListener("click",function(){
        // alert("Thanks for your feedback!");

        const jsConfetti = new JSConfetti();

        jsConfetti.addConfetti(); //at time of load this will run //second time lowerone will run

        // Use emojis as confetti:
        jsConfetti.addConfetti({
            emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
         })
        });

        // Customize confetti colors:
        jsConfetti.addConfetti({
            confettiColors: [
              '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
            ],
          })


        //   Customize confetti radius:
        jsConfetti.addConfetti({
            confettiRadius: 6,
          })
          
        //   Customize confetti number:
          
          jsConfetti.addConfetti({
            confettiRadius: 6,
            confettiNumber: 500,
          })
          

         
        // //   Combine different properties:
          
        //   jsConfetti.addConfetti({
        //     emojis: ['🦄'],
        //     emojiSize: 100,
        //     confettiNumber: 30,
        //   })




        //   jsConfetti.clearCanvas() //Call clearCanvas method to clear canvas

        
}

/*
// async/await
await jsConfetti.addConfetti()
console.log('Confetti animation completed!')

// Promise.then
jsConfetti.addConfetti()
   .then(() => console.log('Confetti animation completed!'))

   */