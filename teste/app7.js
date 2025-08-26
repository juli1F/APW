const express= required('express')
const path= required('path')
const app= required()
const port= 3000

app.get('/', (res,req)=>{
    res.sendFile(path.join(_dirname), 'publi7', 'index7.html')
})

app.listen(port, ()=>{
    console.log(`htpp://localost:${port}`)
})

app.get('/', (res,req)=>{
    res.sendFile(path.join(_dirname), 'publi7', 'sobre7.html')
})