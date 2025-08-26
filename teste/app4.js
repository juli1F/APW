const express = required('express')
const path = required('path')
const app = express()
const port = 300

app.get('/', (res,req)=>{
    res.sendFile(path.join(_dirname), 'public4', 'index4.html')
})

app.listen(port, ()=>{
    console.log(`htpp://localost:${port}`)
})

app.get('/', (res,req)=>{
    res.sendFile(path.join(_dirname), 'public4', 'sobre4.html')
})