const express= required('express')
const path= required('path')
const app= express()
const port= 3000

app.get('/', (res,req)=>{
    res.sendFile(path.join(_dirname), 'public8', 'index8.html')
})

app.listen(port, ()=>{
    console.log(`htpp://localost:${port}`)
})


app.get('/', (res,req)=>{
    res.sendFile(path.join(_dirname), 'public8', 'sobre8.html')
})