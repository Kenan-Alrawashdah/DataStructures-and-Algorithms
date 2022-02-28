class Stack {

    constructor(){
        this.arr = [];
        this.size = 0;
    }

    push(element){
        this.size ++;
        this.arr.unshift(element);
    }

    pop(){
        if(this.arr.length > 0){
           this.size --;
           return this.arr.shift();
        }
        else
           return 'Underflow';   
    }
    
    peek(){
      
        return this.arr[0];
    }

    isEmpty(){
        
        return this.arr.length == 0 ;
    }

    size(){
        return this.size;
    }

    printStack(){
       this.arr.forEach(e=>console.log(e)); 
    }

  
}

 let oddNumbers =  stack =>{
     let temp = new Stack();
     let arr = [];

     while(! stack.isEmpty()){
        let val = stack.peek();

        if(val % 2 !== 0)
          arr.push(val);

        temp.push(val); 
        stack.pop();
     }

     while(! temp.isEmpty()){
          stack.push(temp.peek());
          temp.pop();
     }
     
     return arr;
 };

 let primeNumber = stack =>{
     let temp = new Stack();
     let flag = true;
     let arr = [];
      while(! stack.isEmpty()){
         let val = stack.peek();
         
         for(let i = 2; i <= Math.sqrt(val); i++){//2,3,4,5
              if(val % i == 0 ){
                 flag = false; 
                 break; 
              }
         }
            if(flag && val !== 2)
              arr.push(val);

         temp.push(val);
         stack.pop();
      }
      while(! temp.isEmpty()){
        stack.push(temp.peek());
        temp.pop();
   }
   return arr;
 };

 let checkBr = (a,b)=>{
    if(a === '('&& b === ')')
      return true;
    if(a === '{'&& b === '}')
      return true;
    if(a === '['&& b === ']')
      return true;    
    return false;  
};

 let checkBracketsBalanced = str =>{
        let stack = new Stack();
        let val = '';
        str.split('').forEach((e,i)=>{
          
              if(stack.size > 0){
               val = stack.peek();
              } 
            
              if(checkBr(val,e)) {
                stack.pop();
              }else{
                stack.push(e);  
              } 
                 
      });
     
      if(stack.size >0)
      return 'Not Balanced';

      return 'Balanced';
 };

 
 let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(9);
stack.push(11);
stack.push(3);
stack.push(5);
console.log('oddNumbers : ',oddNumbers(stack));
//stack.printStack();
console.log('primNumbers : ',primeNumber(stack));
console.log('sizeStack : ',stack.size);
console.log(checkBracketsBalanced('({}})'));   

