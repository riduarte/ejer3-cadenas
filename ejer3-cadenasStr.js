let Nombre = "Richard" 
let Apellido = "Duarte"
let estudiante= `${Nombre} ${Apellido}`
let estudianteMayus = estudiante.toLocaleUpperCase()
let estudianteMinus = estudiante.toLocaleLowerCase()
let numLetras = estudiante.length
let inicioLetra = Nombre.charAt()
let finLetra = Apellido.charAt(Apellido.length -1)
let isNombre = estudiante.includes(Nombre)
let sinEspa = estudiante.replace(" ","")

