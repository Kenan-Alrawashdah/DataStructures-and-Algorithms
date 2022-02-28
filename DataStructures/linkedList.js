class Node{
    constructor(){
        this.value = 0;
        this.next = null;
    }
}

class myLinkedList{

    constructor(){
        this.head = null;
        this.size = 0;
    }
   insertFirst(e){
     let node = new Node();
      node.value = e;
      node.next = this.head;
      this.head = node;
      this.size ++; 
   }
   insertLast(e){
       let node = new Node();
       node.value = e;
       let cur = this.head;
       while(cur.next){
        cur = cur.next; 
       }
        cur.next = node;
        this.size ++;
        return true;
   }
   removeElment(e){
    
      let cur = this.head;
      let cur2 = this.head;
       
       if( cur.value === e ){
             this.head = cur.next;
               return true;
       }else{
        while(cur){
            if((cur.value) === e){
                cur2.next = cur.next;
                return true;
            }
            cur2 = cur;
            cur = cur.next;
          }
       }
       return false;
   } 
   searchElement(e){
       let cur = this.head;

       while(cur){
           if(cur.value === e){
               return true;
           }
           cur = cur.next;
       }
       return false;
   }
   insertRightPlace (e){
       let node = new Node();
       node.value = e;
      let cur  = this.head;
      let cur2 ;
          if(this.size === 0 ){
                this.head = node;
          }else{
               if(cur.value > e){
                   this.insertFirst(e);
                   return true;
                   }
               else{
                while( cur){   
                    if(cur.value > e){
                        break;
                    }
                        cur2 = cur;
                        cur = cur.next;
                }
                 node.next = cur;
                 cur2.next = node;
               }               
              
               }
          this.size ++;
        return true;
   }

   isEmpty(){
       return this.size ===0;
   }
   values(){
      let cur = this.head;
      const arr = [];
      while(cur){
         arr.push(cur.value);
         cur = cur.next;
      }
      return arr;
   }

   printList(){
     let cur = this.head ;
     while(cur){
         console.log(cur.value);
         cur = cur.next;
     }

   }

}

 let newNode = new myLinkedList();

  newNode.insertFirst(6);
 //newNode.insertFirst(2);
 //newNode.insertFirst(3);
 //newNode.insertFirst(7);
 newNode.insertLast(10);
 //console.log(newNode); 
 //newNode.printList();
 //console.log(newNode.searchElement(3));
 newNode.insertRightPlace(1);
 newNode.insertRightPlace(3);
 newNode.insertRightPlace(2);
 newNode.insertRightPlace(8);
 newNode.insertRightPlace(9);
 newNode.insertRightPlace(0);
 newNode.insertRightPlace(2);
 newNode.insertRightPlace(8);
 newNode.insertRightPlace(-1);
 newNode.insertRightPlace(100);
 console.log('size : ',newNode.size);
 console.log(newNode.searchElement(100));
 console.log(newNode.isEmpty());

newNode.values().forEach(e => console.log(e));

   


