const bubbleSort = arr =>{
      let flag = true;
      for (let i = 0; i < arr.length -1 ; i++) {
          for (let j = 0; j < arr.length-1-i; j++) {
                  if(arr[j] > arr[j+1]){
                    [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                    flag = false;
                  }
          }
            if(flag)
             break;
      }
};

let arr = [1000,120,113,11,200,1500];//112.111.117.1000/111.112.117
 console.log(arr);
 bubbleSort(arr);
 console.log('//////////');//3,1,7,10//1,3,7,10
 console.log(arr);

