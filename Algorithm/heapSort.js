 
 const heapify = (arr,n, pos)=>{
       
    let pL = 2 * pos + 1;
    let pR = 2 * pos + 2;

    let max = pos ;

     if( n > pL && arr[pL] > arr[max])
          max = pL;
     if( n > pR && arr[pR] > arr[max])
          max = pR;
          
     if( max !== pos){
        [arr[pos], arr[max] ]  = [ arr[max], arr[pos] ] ;
         heapify(arr, n, max);
     }      
 };

  const bulidHeapify = arr =>{
     for (let i = Math.floor(arr.length /2); i >=0; i--) {
          heapify(arr,arr.length, i);
         
     }
  };

  const heapSort = (arr)=>{
       bulidHeapify(arr);

      for (let i = arr.length -1 ; i >= 0; i--) {
             [ arr[i] , arr[0]] = [arr[0], arr[i]];
             heapify(arr,i, 0);
      } 
  };


  const arr =[7,4,33,2,1,6 , 100,9,10];

   console.log(arr);
   heapSort(arr);
   console.log('SortedArr :',arr );