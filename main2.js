htmlData=''
res=fetch(" https://restcountries.com/v3.1/all")
console.log(res)
res.then(res=>res.json()).
then(res=>{
    data=res.slice(0,50)
    console.log(data)
    data.forEach(item=>{
        htmlData+= `
        <div class="card" style="width: 18rem;">
        <img src="${item.flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.name.common}</h5>
        </div>
      </div>`
    })
    result.innerHTML=htmlData
}).
catch(rej=>console.log(rej))


   