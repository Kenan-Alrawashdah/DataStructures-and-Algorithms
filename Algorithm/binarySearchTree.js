class Node{

    constructor( value){
        this.value = value; 
        this.left = null;
        this.rigth = null;
    }
}

class myBinarySearchTree{
      
    constructor(){
        this.root = null;
    }

    insert(e){
        let node = new Node(e);

        if(this.root === null){
            this.root = node;
        }else {
             this.insertNode(this.root, node);
        }

    }

    
    insertNode(node, newNode){
        if(node.value > newNode.value){
             if(node.left === null){
                 node.left = newNode;
             }else{
                 this.insertNode(node.left, newNode);
             }
        }else {
            if(node.rigth === null){
                node.rigth = newNode;
            }else{
                this.insertNode(node.rigth, newNode);
            }
        }
    }

    printDepthInorder(node){
        if(node !== null){
           this.printDepthInorder(node.left);
           console.log(node.value);
           this.printDepthInorder(node.rigth);
        }
    }

    getRoot(){
        return this.root;
    }

    printBreadth(node){

        if(this.root === null)
          return;

       let arr = [];
       arr.push(node);
       while(arr.length > 0){
           let cur = arr.shift();
           console.log(cur.value);
           if(cur.left !== null){
               arr.push(cur.left);
           }
           if(cur.rigth !== null){
               arr.push(cur.rigth);
           }
       }
    }

    remove(e){
         return this.removeNode(this.root,e);
    }

    removeNode(node, e){
       if(node === null)
           return null;
        else if( node.value > e){
            node.left = this.removeNode(node.left, e);
              return node;
        } else if(node.value < e){
            node.rigth = this.removeNode(node.rigth, e);
            return node;
        }else{
             if(node.left === null && node.rigth === null){
                  node = null;
                  return node;
             }
             if(node.left === null){
                 node = node.rigth;
                 return node;
             }
             if(node.rigth === null){
                 node = node.left;
             }
       let minNode = this.findMinNode(node.rigth);
        node.value = minNode.value;

         node.rigth = this.removeNode(node.rigth, minNode.value);
          return node;

        }  

    }

    findMinNode(node){
        if(node.left === null){
            return node;
        }
        else
          return  this.findMinNode(node.left);
        
    }

    search(e){

      return this.searchElement(this.root, e);
    }
    
    searchElement(node, e){

        if(node == null)
          return null;

        if(node.value === e){
          return true;
        }
        if(node.left === null && node.rigth === null ){
           return false;  
        } 

        if(node.value > e){
         return this.searchElement(node.left,e);
        }
        else if(node.value < e){
        return this.searchElement(node.rigth,e);
        }
        
          
    }
}


let bst = new myBinarySearchTree();

bst.insert(5);
bst.insert(3);
bst.insert(10);
bst.insert(11);
bst.insert(0);
bst.insert(17);
bst.insert(2);

let root = bst.getRoot();

//bst.printBreadth(root);
//console.log(bst.remove(11));
//console.log('/////////////////////');
//bst.printDepthInorder(root);
//console.log(bst.search(22));

function meth(s){
    console.log(s);
     s = s.replaceAll(' ','');
    console.log(s);
    let val = '';
    let sum = 0 ;
   for(let i =0 ; i < s.length; i++){
         if(! isNaN(s.charAt(i)) && s.charAt(i) != ' '){
              val += s.charAt(i);
         }
         else{
           
              if(val.length > 0){
                //console.log('V:',val.length, val);
                 sum += parseInt(val);
                // console.log('lS:',sum);
              }
               val = '';
         }
   } 
    if(val.length >0){
      sum += parseInt(val);
    }
    
  //console.log('sum :',sum);

  return  sum // what the function name says
}
  console.log(meth('2 + 3 = '));


