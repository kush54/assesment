console.log(3+true)
4
const str = "kuljeet singh chouhan"
const obj ={};
for(let x of str){
    if(obj[x]){
        obj[x]+=1;
    }
    else{
        obj[x]=1;
    }
}
console.log(obj);

