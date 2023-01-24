import { browser } from "$app/environment"

export function saveOnMemory(todos){
    if (browser){
        if (todos === null || todos.length <= 0 || !Array.isArray(todos)){
            return
        }
        localStorage.setItem('todos',JSON.stringify(todos))
    }
}

export function delFromMemory(){
    if (browser){
        localStorage.removeItem('todos')
        
    }
}

export function getFromMemory(){
    if (browser){
        if (localStorage.getItem('todos')){
            return Promise.resolve().then(function() {
                return JSON.parse(localStorage.getItem('todos'));
            });
        }else{
            return Promise.resolve().then(function(){
                return []
            })
        }
        return null
    }
}