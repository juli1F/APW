const express= required('express')
const path= required('path')
const app= express()
const port= 3000

app.get('/', (res,req)=>{
    sendFile(path.join(_dirname), 'public6', 'index6.html')
})

app.listen(port, ()=>{
    console.log(`htpp://localost:${port}`)
})

app.get('/', (res,req)=>{
    sendFile(path.join(_dirname), 'public6', 'sobre6.html')
})