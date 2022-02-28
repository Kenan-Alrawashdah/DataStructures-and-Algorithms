/* 
const marge = (arr, l, m, r)=>{ 
    
    let sizeLArr1 = m-l +1;//3
   // sizeLArr1 = parseInt(sizeLArr1,10);
    let sizeRArr2 = r - m; //3
    //sizeRArr2 = parseInt(sizeRArr2,10);
    let i =0, j=0, k=l;

    let arrL = new Array(sizeLArr1), arrR = new Array(sizeRArr2);
    for (let i = 0; i < sizeLArr1; i++) {
            arrL[i]=arr[i+l];    
    }
    for (let i = 0; i < sizeRArr2; i++) {
           arrR[i]=arr[m+1+i];     
   }
    while(i < sizeLArr1 && j < sizeRArr2  ){
        console.log('K :',k);
           if(arrL[i] >= arrR[j]){
              arr[k] = arrR[j];
              j++;
           }else{
               arr[k]=arrL[i];
               i++;
           }
           k++;
    }
      while( i < sizeLArr1 ){
          arr[k]=arrL[i];
           k++;
           i++;
      }
      while( j < sizeRArr2 ){
        arr[k]=arrR[j];
         k++;
         j++;
    }
   // console.log('arrL:',arrL);
   // console.log('arrR:',arrR);
};

const margeSort = (arr,l,r)=>{
       
  if(l >= r){
    return;
  }
           let m = l + parseInt((r-l)/2);
           m = parseInt(m,10);
           margeSort(arr,l,m);//0  2//0 1
           margeSort(arr,m+1,r);
          // console.log('llllllll:',m);

           marge(arr,l,m,r);

       
}; */

const marge = (arrL,arrR)=>{
       
   const arr = []; 
   let sizeL =0, sizeR = 0 ;
   while(arrL.length > sizeL && arrR.length > sizeR){
       if(arrL[sizeL] >= arrR[sizeR]){
          arr.push(arrR[sizeR]);
          sizeR ++;
       }else{
         arr.push(arrL[sizeL]);
         sizeL ++;
       }
   }

   while( arrL.length > sizeL){
       arr.push(arrL[sizeL]);
       sizeL ++;
   }
   while(arrR.length > sizeR){
     arr.push(arrR[sizeR]);
       sizeR ++;
   }
   return arr;
};

const margeSort = (arr) =>{
      if(arr.length < 2)
       return arr;
    let m = Math.floor(arr.length / 2);
    let sL = arr.slice(0, m);
    let sR = arr.slice(m, arr.length);
    let arrL = margeSort(sL);
    let arrR = margeSort(sR) ;

    return marge(arrL,arrR);
};

let arr = [1000,120,113,55555,11,200];
 console.log(arr);

 console.log('Sorted : ', margeSort(arr));
