 class Map{

 constructor(){
     this.map = {};
 }

 set(key, value){
     if(! this.has(key)){
        this.map[key] = value;
        return true;
     }
     return false;
 }

 has(key){
     return this.map.hasOwnProperty(key);
 }

 clear(){
     this.map = {};
 }
 size(){
    return Object.keys(this.map).length;
 }
 delete(key){
     if(this.has(key)){
        delete this.map[key];
        return true;
     }
    return false;
 }
 get(key){
     return this.map[key];
 }
 keys(){
     return Object.keys(this.map);
 }
 values(){
    return Object.keys(this.map).map(key =>{
        return this.map[key];
    });
 }

} 

let map = new Map();

   //console.log(map);

   map.set('key1',{name:'kenan',age:24,obj:{a:1,b:2}});
   map.set('key2',{name:'karam',age:25,obj:{a:1,b:2}});
   console.log('Key 1 get value  : ',map.get('key1'));
   console.log('keys : ',map.keys());
   console.log('values : ',map.values());
   map.delete('key1');
   console.log('Size : ',map.size());

   

/* let obj = {
    name :'kenan',
    age : 24,
    major : 'CS',
}

let arr = Object.keys(obj);
//console.log(obj.hasOwnProperty('name'));

let map = new Map();

map.set('name','kenan');
map.set('name','kenan');
map.set('age',24);

for(let [ke,va] of map.entries()){
    console.log(ke,va);
}
/* map.forEach((key,val)=>{
    console.log(key, ':', val);
}) */ 