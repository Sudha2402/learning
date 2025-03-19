onmessage = function(e){//receieve the event// event click , event also passed here //here event is postmessage of .js file and object workerObj //workerObj.postMessage("Start worker");
    console.log('Received message', e.data);//it means event click par jo message post kiya uska data //e.data is Start worker which is passed in the Worker constructor//workerObj.postMessage("Start worker");
    //
    // Do something with the received data
    // For example, update the UI or send a response back

    var result = 0;
    for (let i = 0; i < 100000000; i++) {//it's very timeconsuming
       result += i;
       }
       console.log(result);
       postMessage(result);//it post the message to the script(.js file) which initialised the workerconstructor .js file //it must be received in  .js file workerObj with onMessage // workerObj.onmessage = function(e)

       //workerObj object of the script file will receive the message

       //NOTE: if result is used directly then it will receive result=0  . hence onmessage is used to receive the event (postmessage) then for loop result will send there
    

}
//console.log(btn1);        //error on click event as what is passed to this worker.js because btn1 object is parent object and it is not defined for this worker.js  //it is seperate thread error hence it will keep executing and rest will not execute as it raise error

//console.log(window);//window not defined 
//console.log(document);//document not defined  

console.log(self);//it is defined and it is the parent object of worker.js file and it heas its own properties and methods

//DedicatedWorkerGlobalScope {name: '', onmessageerror: null, onmessage: ƒ, cancelAnimationFrame: ƒ, close: ƒ, …}






