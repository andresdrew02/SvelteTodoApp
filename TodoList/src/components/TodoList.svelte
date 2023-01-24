<script>
    import Todo from "./Todo.svelte";
    import TodoClass from '../js/TodoClass'
    import Button from "./Button.svelte";
    import check from '../img/check.svg'
    import Keystroke from "svelte-keystroke";
    import Spinner from "./Spinner.svelte";
    import {saveOnMemory, getFromMemory, delFromMemory} from '../js/save'
  
    //let todos = getFromMemory() != null ? getFromMemory() : []
    let tarea = ''
    let todos = []
    let cargado = false
    let important = false

    const getTodos = async () => {
        const m_todos = await getFromMemory()
        todos = m_todos
        cargado = true
        cargado = cargado
    }

    getTodos()

    const addTodo = () => {
        if (tarea != null && tarea.trim() !== '' && tarea){
            const todo = new TodoClass(tarea.trim(),false,important)
            todos = [...todos, todo]
            saveOnMemory(todos)
            todos = todos
        }
    }
    
    const removeTodo = (i) => {
        todos.splice(i,1)
        if (todos.length <= 0){
            delFromMemory()
        }else{
            saveOnMemory(todos)
        }
        todos = todos
    }

    const handleCombination = ({detail}) => {
        if (detail === 'Control+a'){
            todos = []
            delFromMemory()
            todos = todos
            tarea = ''
        }
    }

    const toggleCompletado = (todo) => {
        todo.completado = !todo.completado
        saveOnMemory(todos)
        todos = todos
    }

</script>
<Keystroke on:combo={handleCombination}/>

<div class="todolist-main">
    <form>
        <div class="todo-form">
            <label class="inp" for="inp">
                <input placeholder="" id="inp" type="text" bind:value={tarea}>
                <span class="label">Añadir tareas</span>
                <span class="focus-bg"></span>
            </label>
            <div class="button">
                <Button clk_handler={addTodo} text={"Añadir"} titulo={"Añadir tarea a la lista."}/>
            </div>
            <label class="container">
                <input type="checkbox" bind:checked={important}>
                <div title="Marcar tarea como prioritaria." class="checkmark"></div>
            </label>
        </div>
    </form>

    {#if cargado}
        <div class="todo-list">
            {#if todos.length > 0}
            {#each todos as todo, i}
            
            <Todo tarea={todo.tarea} t_important={todo.importante} fn_remove={() => removeTodo(i)} fn_completada={() => toggleCompletado(todo)} completado={todo.completado}/>
            {/each}
            {/if}
            
            {#if todos.length <= 0}
            <div class="todo-nada">
                <h1>No tienes tareas que hacer</h1>
                <img src={check} alt="emoticono triste"/>
            </div>
            {/if}
        </div>
    {/if}

    {#if !cargado}
        <Spinner/>
    {/if}

</div>

<style>
    .todolist-main{
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .todolist-main * {
        user-select: none;
    }
    .button{
        width:100%;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .todo-form{
        width: 100%;
    }
    .inp {
        position: relative;
        margin: auto;
        width: 100%;
        max-width: 390px;
        border-radius: 3px;
        overflow: hidden;
        margin-bottom:1rem;
    }
    .todo-list{
        width:70%;
    }
    /* Hide the default checkbox */
    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    
    .container {
        display: flex;
        gap: 10px;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top:1rem;
    }
    
    .todo-nada{
        display: flex;
        flex-direction: row;
        gap:1rem;
        align-items: center;
        justify-content: center;
        margin-top:2rem;
    }

    .todo-nada h1{
        font-size:clamp(1.2rem,2vw,1.6rem);
    }

    .todo-nada img{
        width: 50px;
        height: 50px;
    }
    
    /* Create a custom checkbox */
    .checkmark {
        position: relative;
        box-shadow: rgb(255, 84, 0) 0px 0px 0px 2px;
        background-color: rgba(16, 16, 16, 0.5);
        height: 20px;
        width: 20px;
        margin-right: 10px;
        flex-shrink: 0;
        margin-top: -1px;
        transition: all 0.2s ease 0s;
        cursor: pointer;
        transform-origin: 0px 10px;
        border-radius: 4px;
        margin: -1px 10px 0px 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    
    .container input:checked ~ .checkmark {
        box-shadow: rgb(255, 84, 0) 0px 0px 0px 2px;
        background-color: rgba(245, 24, 24, 0.5);
        height: 20px;
        width: 20px;
        margin-right: 10px;
        flex-shrink: 0;
        margin-top: -1px;
        transition: all 0.2s ease 0s;
        cursor: pointer;
        transform-origin: 0px 10px;
        border-radius: 4px;
        margin: -1px 10px 0px 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }
    
    .container input:checked ~ .checkmark:after {
        display: block;
    }
    
    /* Style the checkmark/indicator */
    .container .checkmark:after {
        left: 0.45em;
        top: 0.25em;
        width: 0.25em;
        height: 0.5em;
        border: solid white;
        border-width: 0 0.15em 0.15em 0;
        transform: rotate(45deg);
        transition: all 500ms ease-in-out;
    }
    .inp .label {
        position: absolute;
        top: 20px;
        left: 12px;
        font-size: 14px;
        color: whitesmoke;
        font-weight: 500;
        transform-origin: 0 0;
        transform: translate3d(0, 0, 0);
        transition: all 0.2s ease;
        pointer-events: none;
        font-family: Arial, Helvetica, sans-serif;
    }
    
    .inp .focus-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.05);
        z-index: -1;
        transform: scaleX(0);
        transform-origin: left;
    }
    
    .inp input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 100%;
        border: 0;
        font-family: inherit;
        padding: 16px 12px 0 12px;
        height: 56px;
        font-size: 16px;
        font-weight: 400;
        background: rgba(0, 0, 0, 0.02);
        box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.3);
        color: whitesmoke;
        font-size:1.2rem;
        transition: all 0.15s ease;
    }
    
    .inp input:hover {
        background: rgba(0, 0, 0, 0.04);
        box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.5);
    }
    
    .inp input:not(:-moz-placeholder-shown) + .label {
        color: rgb(150, 150, 150);
        transform: translate3d(0, -12px, 0) scale(0.75);
    }
    
    .inp input:not(:-ms-input-placeholder) + .label {
        color: rgb(150, 150, 150);
        transform: translate3d(0, -12px, 0) scale(0.75);
    }
    
    .inp input:not(:placeholder-shown) + .label {
        color: rgb(150, 150, 150);
        transform: translate3d(0, -12px, 0) scale(0.75);
    }
    
    .inp input:focus {
        background: rgba(0, 0, 0, 0.05);
        outline: none;
        box-shadow: inset 0 -2px 0 #ae00ff;
    }
    
    .inp input:focus + .label {
        color: #ae00ff;
        transform: translate3d(0, -12px, 0) scale(0.75);
        font-family: Arial, Helvetica, sans-serif;
    }
    
    .inp input:focus + .label + .focus-bg {
        transform: scaleX(1);
        transition: all 0.1s ease;
    }
    .todo-form{
        display:flex;
        flex-direction: column;
    }
    h1{
        color:whitesmoke;
    }
</style>