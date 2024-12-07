
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const format = require('date-format')


// swagger docs related
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get('/',(req,res)=>{
    res.status(200).send('<h1>hello from vaibhav</h1>')
})

app.get('/api/v1/ig',(req,res)=>{
    const instasocial={
        username:"vaibhav",
        followers:'66',
        follow:'100k',
        date:format.asString("dd[MM]-hh:mm:ss",new Date()),
    }
    res.status(200).json(instasocial)
})

app.get('/api/v1/fb',(req,res)=>{
    const fbsocial={
        username:"vaibhav",
        followers:'646',
        follow:'100',
        date:format.asString("dd[MM]-hh:mm:ss",new Date()),
    }
    res.status(200).json(fbsocial)
})

app.get('/api/v1/linkedin',(req,res)=>{
    const linkedsocial={
        username:"vaibhav",
        followers:'46',
        follow:'10k',
        date:format.asString("dd:MM:yyyy-hh:mm:ss",new Date()),
    }
    res.status(200).json(linkedsocial)
})

app.get("/api/v1/:token",(req, res) =>{
    console.log(req.params.token);
    res.status(200).json({param: req.params.token});
})


app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`)
})