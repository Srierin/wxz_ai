const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function tranfficLight(){
  const seq = [
    {color: 'red', ms: 1000},
    {color: 'green', ms: 3000},
    {color: 'yellow', ms: 2000}
  ]

  while(true){
    for(const {color,ms} of seq){
      console.log(color);
      await sleep(ms);
    }
  }
}

tranfficLight()