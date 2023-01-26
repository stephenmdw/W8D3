const readline = require("readline");
const { arrayBuffer } = require("stream/consumers");


class Clock {
    constructor(){
        let date = new Date();
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        this.printTime();
        setInterval(() =>
            this._tick(),
            1000
            );
    }

    printTime(){
        let time = `${this.hours}:${this.minutes}:${this.seconds}`;
        console.log(time);
    }

    _tick(){
       this.seconds++;
       if (this.seconds === 60){
            this.minutes++;
            this.seconds = 0; 
            }
        if (this.minutes === 60){
            this.hours++ ;
            this.minutes = 0;
            }
        if (this.hours === 24){
                this.hours = 0;
            }
        this.printTime();
    }
    //2. increment seconds by 1, when it hits 60 increment minutes by 1 and reset secnods to 0
    //3. when minutes hit 60, increase hours by 1 and reset minutes to 0
    // 4. when hours hits 24, reset to 0
    //1. set date variable to update time
};

// const clock = new Clock();



// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0){
        const response = reader.question('Give a number: ', answer => {
            let num = parseInt(answer);
            sum += num
            numsLeft--
            console.log(`Partial sum: ${sum}`);
            addNumbers(sum, numsLeft, completionCallback);
        })
        
    } else if (numsLeft === 0 ){
        reader.close();
        completionCallback(sum);
    };
};

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

Function.prototype.myBind = function(context) {
    return () => this.apply(context);
    // let that = this
    // return asdf = function(){
    //     this.apply(context) // this would refer to 'window'
    // }
};


class Lamp {
    constructor() {
      this.name = "a lamp";
    }
  }
  
  const turnOn = function() {
    console.log("Turning on " + this.name);
  };
  
  const lamp = new Lamp();
  
// //   turnOn(); // should not work the way we want it to
  
//   const boundTurnOn = turnOn.bind(lamp);
  const myBoundTurnOn = turnOn.myBind(lamp);

  
// //   boundTurnOn(); // should say "Turning on a lamp"
//   myBoundTurnOn(); // should say "Turning on a lamp"

  


function askIfGreaterThan(el1, el2, callback){
    let question = reader.question(`Is ${el1} greater than ${el2}? (yes or no): `, answer => {
        if (answer === 'yes'){
            callback(true)
        } else if (answer === 'no') {
            callback(false)
        }

    })
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
    if (i < arr.length - 1){
        askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
            if (isGreaterThan){
                [arr[i], arr[i+ 1]] = [arr[i+1], arr[i]]
                madeAnySwaps = true;
            }
            innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop) //do we set madeAnySwaps to true within the function?
        })
    }
    
    if (i === arr.length - 1) {
        outerBubbleSortLoop(madeAnySwaps)
    }
}

function absurdBubbleSort(arr, sortCompletionCallback){
    function outerBubbleSortLoop(madeAnySwaps){
        if (madeAnySwaps){
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
        } else {
            sortCompletionCallback(arr)
        }
    };

    outerBubbleSortLoop(true)
};

// innerBubbleSortLoop([3,2,1], 0, true, outerBubbleSortLoop)

// absurdBubbleSort([3, 2, 1], function(arr) {
//     console.log("Sorted array: " + JSON.stringify(arr));
//     reader.close();
//   });



Function.prototype.myThrottle = function(int){
    let tooSoon = false;
    return () => {
        if (tooSoon === false){
            this()
            tooSoon = true
        
        setTimeout(()=>{
            tooSoon = false }, 
            int
        )}
    }
    // tooSoon = false
}

class Neuron {
    fire() {
      console.log("Firing!");
    }
  }
  
  const neuron = new Neuron();
  neuron.fire = neuron.fire.myThrottle(1000);
  
  
  // When we create a new Neuron,
  // we can call #fire as frequently as we want
  
  // The following code will try to #fire the neuron every 10ms. Try it in the console:
  const interval = setInterval(() => {
      neuron.fire();
    }, 10);
    

  // You can use clearInterval to stop the firing:
  clearInterval(interval);
  

  // Using Function#myThrottle, we should be able to throttle
  // the #fire function of our neuron so that it can only fire
  // once every 500ms:
  
  
//   const interval = setInterval(() => {
//     neuron.fire();
//   }, 10);
  
  // This time, if our Function#myThrottle worked correctly,
  // the Neuron#fire function should only be able to execute
  // every 500ms, even though we're still trying to invoke it
  // every 10ms!
  
  // If we want this behavior for ALL neurons, we can do the same logic in the constructor:
  
//   class Neuron {
//     constructor() {
//       this.fire = this.fire.myThrottle(500);
//     }
  
//     fire() {
//       console.log("Firing!");
//     }
//   }
  