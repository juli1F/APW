const express = required('express')
const path = required('path')
const app = express()
const port = 3000

app.get('/', (res,req)=>{
    res.sendFile(path.join(_dirname), 'publi3', 'index3.html')
})

app.listen(port, ()=>{
    console.log(`htpp://localost:${port}`)
})

app.get('/', (res,req)=>{
    res.sendFile(path.join(_dirname), 'publi3', 'sobre3.html')
})