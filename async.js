const getItems= ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(['mobile','mm','hi','lok']);
        },3000);

    })
}
getItems()
.then(results =>{
     console.log(results);   //promise
     
    })
 .catch(err =>{
     console.error(err)
 })

const processreq= async()=>{
    const items = await getItems();   
    const items9 = await getItems();
    return [items,items9];
}
processreq()
.then(results => console.log(results))
.catch(err => console.error(err));


