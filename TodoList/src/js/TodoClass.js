export default class Todo{
    constructor(nombre, completado = false, importante = false){
        this.tarea = nombre
        this.completado = completado
        this.importante = importante
    }
}