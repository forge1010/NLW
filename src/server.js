// dados
const proffys = [
{   name:"Diego Fernandes", 
    avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    whatsapp:"96991910012",
    bio:"Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject:"Química", 
    cost:"20",
    weekday:[0],
    time_from:[720],
    time_to:[1220]
},
{   name:"Daniele Evangelista", 
    avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    whatsapp:"96991910012",
    bio:"Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject:"Química", 
    cost:"20",
    weekday:[1],
    time_from:[720],
    time_to:[1220]
},
{   name:"Alessandro Rodrigues", 
    avatar:"https://avatars0.githubusercontent.com/u/65730229?s=460&u=606f75e302b4adb79a004f23bcfd677e626359f9&v=4", 
    whatsapp:"96991910012",
    bio:"Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject:"Química", 
    cost:"20",
    weekday:[1],
    time_from:[720],
    time_to:[1220]
}
]

const subjects=[
    
        "Artes",
        "Biologia",
        "Ciências",
        "Educação física",
        "Física",
        "Geografia",
        "História",
        "Matemática",
        "Português",
        "Química"
    
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"

]
// funcionalidades

function getSubject(subjectNumber){
   const position = +subjectNumber -1
    return subjects[position]
}

function pageLanding(req, res){ 
    return res.render("index.html")
 }

 function pageStudy(req,res){
    const filters = req.query
    return res.render("study.html" ,{proffys, filters, subjects, weekdays})
 }

 function pageGiveClasses(req,res){
     const data= req.query 
    //add data a lista de proffys
     const isNotEmpty = Object.keys(data).length > 0
     if(isNotEmpty){
        data.subject= getSubject(data.subject)
     //add data a lista de proffys
     proffys.push(data)

     return res.redirect("/study")
    }
                      
    return res.render("give-classes.html", {subjects, weekdays})
 }
// servidor
const express = require('express')
const server = express()

//configurando nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
}) 
// incio e configuração do servidor
server
// configurar arquivos estaticos (css)
.use(express.static("public"))
.get("/", pageLanding)

.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
// star do servidor
.listen(5500)
