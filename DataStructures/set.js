 class Set{

    constructor(){
        this.set = [];
    }

    add(value){
       if(!this.has(value)){
        this.set.push(value);
        return true;
       }
       return false;
    }

    has(value){
        return this.set.indexOf(value) > -1;   
    }
    
    delete(value){
       let indx = this.set.indexOf(value);
       
       if(indx === -1){
           return null;
       }else{
           this.set.splice(indx,1);
       }
    }

    size(){
        return this.set.length;
    }
    clear(){
        this.set = [];
    }
    values(){
        return this.set;
    }

    union(otherSet){

        if(! (otherSet instanceof Set)){
             throw new  TypeError('invalid parameter type a Set is required');
        }
        let unionSet = new Set();
        let set1= this.values();
        set1.forEach(e => unionSet.add(e));
        let set2= otherSet.values();
        set2.forEach(e => unionSet.add(e));

        return unionSet;
    }

    intersection(otherSet){
        if(! (otherSet instanceof Set)){
            throw new  TypeError('invalid parameter type a Set is required');
       }
       let setIntersection = new Set();
       let setValues   = this.values();
         
       setValues.forEach(e => {
           if( otherSet.has(e))
            setIntersection.add(e);
       }); 

       return setIntersection ;
    }

}


  let set1 = new Set();
  let set2 = new Set();
  
 
  set1.add(5);
  set1.add(3);

  set2.add(6);
  set2.add(5);

  
  //console.log(set1.has(5)); 
   console.log('Set1 :');
   set1.values().forEach(e => console.log(e));

   console.log('Set2 :');
   set2.values().forEach(e => console.log(e));

  let valUnion = set1.union(set2).values();
  console.log('valUnion : ');
  valUnion.forEach(e => console.log(e));

  
  let valIntersection = set1.intersection(set2).values();
  console.log('valIntersection : ');
  valIntersection.forEach(e => console.log(e));
   
    
  set1.clear();
  console.log('Set1 after clear :', set1.values());
   






  /* let set = new Set();

  set.add(5);
  set.add(5);
  set.add(2);
  set.add(6);
  set.add(4);

  
  console.log(set.has(5));
  set.delete(5);*/
 
 