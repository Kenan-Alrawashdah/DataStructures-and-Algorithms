class myHashTable{

    constructor(){
        this.data = new Array(150);
        this.size = 0;
    }

    hash(key){
      let hashIndex = 0;
      let str = key.toString();

       for(let i =0; i< str.length; i++){
        hashIndex += str.charCodeAt(i);
       }
       return hashIndex % this.data.length;
    }

    set(key, value){
       let  index = this.hash(key);
       
       if(this.data[index]){
         for (let i = 0; i < this.data[index].length; i++) {
                if(this.data[index][i][0] === key){
                    this.data[index][i][1]=value;
                    return true;
                }
         }
         this.data[index].push([key,value]);
       }else{
             this.data[index] = [];
             this.data[index].push([key,value]);
       }
       this.size ++;
       return true;
    }

    get(key){
        let index = this.hash(key);
          if(this.data[index]){
        for(let i = 0; i< this.data[index].length; i++){
               if(this.data[index][i][0] === key)//[[[],[]]]
                    return this.data[index][i][1];       
        }
    }else{
        return undefined;
    } 
    }

    delete(key){
        let index = this.hash(key);
         
        if(this.data[index]){
            for(let i = 0; i< this.data[index].length; i++){
                   if(this.data[index][i][0] === key){
                     this.data[index].splice(i,1); 
                        this.size --;
                        return true;      
                   }
            }
        }else{
            return undefined;
        }

    }
    values(){
        return this.data;
    }

    printHash(){
        this.data.forEach((val,i)=>{
            let values = val.map(e =>{
                return e;
           });
           console.log(i,':',values);
        }); 
    }
}

let hashtable = new myHashTable();

//console.log(hashtable.hash('0'));
  hashtable.set('d',24);
  hashtable.set('kena',63);
  hashtable.set('22',43);
  console.log('get value by key "d":',hashtable.get('d'));
  console.log(hashtable.printHash());

  hashtable.delete('d');
  console.log('//////////////');
  console.log(hashtable.printHash());
  /* hashtable.values().forEach(value=>{
       value.forEach(([key,val])=>{
          console.log('key :', key,' ','val :',val);
       });
  });
 */

