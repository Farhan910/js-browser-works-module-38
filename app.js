let second = 0;

const timeId = setInterval(() => {
    console.log(second++);
    if(second > 15){
        clearInterval(timeId);
    }
},1000)