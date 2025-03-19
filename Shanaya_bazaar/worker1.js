onmessage = function(event) {
    console.log('Received message from worker in worker.js:', event.data);//data used not the value //value only for input element////Received message from worker in worker.js : Hello, worker!
 //   this.postMessage(event.data);

    postMessage(event.data); //undefined for document.write event.data

  //  postMessage(data);//data is not defined

 // var data=event.data;
// postMessage(data);



    };
    //terminate the worker
    // worker.terminate();