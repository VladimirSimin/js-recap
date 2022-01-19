
const somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve('Success!');
        } else {
            reject('Error!');
        }
    }, 1000);
  });
  
  somePromise.then((successMessage) => {
      console.log(`Status: ${successMessage}`);
  }).catch((errorMessage) => {
      console.log((`Status: ${errorMessage}`));
  });