///////////////////////////////////////Asynchronous programming////////////////////////////////////
console.log("one");
console.log("two");
console.log("three");


setTimeout(() =>{
    console.log("Hello")
}, 4000);

console.log("four");
console.log("five");



//////////////////////////////////////////////callbacks////////////////////////////////////////////////
function sum(a,b){
    console.log(a+b);
}
function calculator(a , b , sumCallback){
    sumCallback(a,b);
}

calculator(1,2 , sum)



///////////////////////////////////////////
const hello = () =>{
    console.log("hello");
};
setTimeout(hello , 3000);

/////////////////////////////////////////////////callback hell/////////////////////////////////////////////////


function getData(dataId , getNextData){
    setTimeout(() => {
        console.log("data" , dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}

//nested callback or callback hell(it is a problem in javascript and this problem is resolved by promises)

getData(1 , () => {
    getData(2 , () => {
        getData(3 , () => {
            getData(4 , () => {
                getData(5);
            })
        })
    })
});



///////////////////////////////////////////Promises///////////////////////////////////////////

let promise = new Promise ((resolve , reject) => {
    console.log("I am a promise");
    // resolve("success");
    reject("some error occured")
})

////////////////////////////////////

function getData1(dataId , getNextData){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("data" , dataId);
        resolve("success");
        if(getNextData){
            getNextData();
        }
    }, 6000);
});
}

///////////////////////////////////////

const getPromise = () => {
   return new Promise((resolve , reject) => {
        console.log("Hey !! I am promise.");
        resolve("success!");
        //reject("error";)
    });
};

let promise1 = getPromise();
promise1.then((res) => {
    console.log("promise fulfilled" , res);
})

promise1.catch((err) =>{
    console.log("rejected" , err);
})



///////////////////////////////////promise chain ////////////////////////////////////////


function asyncFunc1() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("some data1");
            resolve("success");
        }, 4000);
    });
}


function asyncFunc2() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("some data2");
            resolve("success");
        }, 4000);
    });
}

console.log("fetching data1........");
asyncFunc1().then((res) => {
    console.log(res);
    console.log("fetching data2........");
asyncFunc2().then((res) => {
    console.log(res);
  })
})



/////////////////////////////////////////////////async await ////////////////////////////////


async function hello1(){
    console.log("hello!!");
}


function api () {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000)
    })
}
async function getWeatherData(){
    await api(); //1st call
    await api(); //2nd call
}

