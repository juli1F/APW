const express= required('express')
const path= required('path')
const app= express()
const port=3000

app.get('/', (res,req)=>{
    res.sendFile(path.join(_dirname), 'public5', 'index5.html')
})

app.listen(port, (res,req)=>{
    console.log(`htpp://localost:${port}`)
})

app.get('/', (res,req)=>{
    res.sendFile(path.join(_dirname), 'public5', 'sobre5.html')
})