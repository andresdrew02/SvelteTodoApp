import { c as create_ssr_component, d as add_attribute, e as escape, f as null_to_empty, h as createEventDispatcher, v as validate_component, i as each } from "../../chunks/index.js";
const danger = "/_app/immutable/assets/danger-93c9d11e.svg";
const Todo_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".tarea.svelte-1gfhwfb.svelte-1gfhwfb{width:100%;display:flex;flex-direction:row;align-items:center;gap:1em;cursor:pointer}.completada.svelte-1gfhwfb.svelte-1gfhwfb{text-decoration-line:line-through;text-decoration-color:rgb(255, 35, 35);text-decoration-thickness:2px}h1.svelte-1gfhwfb.svelte-1gfhwfb{flex-grow:1;color:whitesmoke;font-weight:normal;font-size:1.75rem;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif}img.svelte-1gfhwfb.svelte-1gfhwfb{width:50px;height:50px}button.svelte-1gfhwfb.svelte-1gfhwfb{background:none;border:none;padding:15px 15px;border-radius:10px;cursor:pointer}button.svelte-1gfhwfb.svelte-1gfhwfb:hover{background:rgba(170, 170, 170, 0.062);transition:0.5s}button.svelte-1gfhwfb svg.svelte-1gfhwfb{color:#fff}",
  map: null
};
const Todo$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tarea } = $$props;
  let { t_important = false } = $$props;
  let { fn_remove } = $$props;
  let { completado = false } = $$props;
  let { fn_completada } = $$props;
  if ($$props.tarea === void 0 && $$bindings.tarea && tarea !== void 0)
    $$bindings.tarea(tarea);
  if ($$props.t_important === void 0 && $$bindings.t_important && t_important !== void 0)
    $$bindings.t_important(t_important);
  if ($$props.fn_remove === void 0 && $$bindings.fn_remove && fn_remove !== void 0)
    $$bindings.fn_remove(fn_remove);
  if ($$props.completado === void 0 && $$bindings.completado && completado !== void 0)
    $$bindings.completado(completado);
  if ($$props.fn_completada === void 0 && $$bindings.fn_completada && fn_completada !== void 0)
    $$bindings.fn_completada(fn_completada);
  $$result.css.add(css$4);
  return `
<div class="${"tarea svelte-1gfhwfb"}">${t_important === true ? `<img${add_attribute("src", danger, 0)} alt="${"tarea importante"}" class="${"svelte-1gfhwfb"}">` : ``}
    
    <h1 class="${escape(null_to_empty(completado ? "completada" : "sinCompletar"), true) + " svelte-1gfhwfb"}">${escape(tarea)}</h1>
    
    <button class="${"svelte-1gfhwfb"}"><svg width="${"24px"}" height="${"24px"}" version="${"1.1"}" id="${"_x36_"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" viewBox="${"0 0 512 512"}" xml:space="${"preserve"}" class="${"svelte-1gfhwfb"}"><g><g><g><g><path style="${"fill:#EFE9E1;"}" d="${"M284.082,31.115c-0.078-0.155-0.078-0.31-0.078-0.466c0-0.156-0.078-0.389-0.078-0.623\r\n                        c-2.1-15.402-14.313-27.614-29.715-29.715c-0.389-0.078-0.778-0.078-1.089-0.156C252.189,0.078,251.178,0,250.166,0h-70.087\r\n                        c-17.813,0-32.437,13.458-34.46,30.649c0,0.156,0,0.311-0.078,0.466c-0.078,1.011-0.156,2.023-0.156,3.112v44.572h138.852\r\n                        V34.227C284.237,33.138,284.16,32.126,284.082,31.115z M180.079,27.382h69.465c3.967,0,7.312,3.267,7.312,7.313v16.724h-84.089\r\n                        V34.694C172.767,30.649,176.034,27.382,180.079,27.382z"}"></path></g><g style="${"opacity:0.06;"}"><path style="${"fill:#0C0804;"}" d="${"M284.082,31.115v-0.466h-0.078c-8.479,1.477-17.424,2.567-26.603,3.422\r\n                        c-0.156,0.078-0.389,0.078-0.545,0.078c0,0,0,0,0,0.078v16.724h-84.089V34.227c0-0.078,0-0.078,0-0.078\r\n                        c-9.413-0.855-18.436-2.022-27.148-3.5h-0.078v0.466c-0.078,1.011-0.156,2.023-0.156,3.112v44.105h138.852V34.227\r\n                        C284.237,33.138,284.16,32.126,284.082,31.115z"}"></path></g></g><path style="${"fill:#F5EFE7;"}" d="${"M406.598,147.564l-0.156,4.978L394.93,448.214c0,34.148-10.89,61.997-37.572,63.71\r\n                C356.736,512,356.036,512,355.336,512H74.832c-2.879,0-5.601-0.311-8.168-0.855c-12.99-2.879-21.625-12.758-26.603-26.603\r\n                c-3.656-10.346-5.367-22.871-5.367-36.328l-11.668-300.65H406.598z"}"></path><path style="${"fill:#F5EFE7;"}" d="${"M414.921,133.329H14.702c0-4.201,0.312-8.324,1.011-12.369c0.778-4.9,2.1-9.644,3.812-14.156\r\n                c0.467-1.168,0.933-2.334,1.478-3.502c3.734-8.633,9.102-16.412,15.636-23.025C47.451,69.465,61.531,61.92,77.321,59.352\r\n                c3.967-0.699,8.09-1.01,12.291-1.01h251.566c1.322,0,2.645,0.076,3.967,0.156c0.855,0.076,1.633,0.156,2.411,0.232\r\n                c27.459,2.801,50.484,20.303,61.063,44.572c0.545,1.168,1.011,2.334,1.4,3.502C413.21,115.05,414.921,123.994,414.921,133.329z"}"></path><rect y="${"103.302"}" style="${"fill:#FFFAF2;"}" width="${"429.545"}" height="${"31.351"}"></rect><rect y="${"103.302"}" style="${"fill:#FFFFFD;"}" width="${"429.545"}" height="${"3.502"}"></rect><g><path style="${"fill:#6A655D;"}" d="${"M96.597,198.41l30.327-0.958c5.168-0.163,9.47,4.138,9.573,9.573l4.59,242.725\r\n                    c0.101,5.357-3.92,9.8-9.015,9.961l-30.327,0.958c-5.169,0.163-9.47-4.138-9.573-9.573l-4.59-242.725\r\n                    C87.481,203.014,91.502,198.571,96.597,198.41z"}"></path><path style="${"fill:#6A655D;"}" d="${"M332.993,198.41l-30.327-0.958c-5.169-0.163-9.47,4.138-9.573,9.573l-4.59,242.725\r\n                    c-0.101,5.357,3.92,9.8,9.015,9.961l30.327,0.958c5.169,0.163,9.47-4.138,9.573-9.573l4.59-242.725\r\n                    C342.109,203.014,338.088,198.571,332.993,198.41z"}"></path><path style="${"fill:#6A655D;"}" d="${"M230.476,197.889h-30.711c-5.03,0-9.108,4.078-9.108,9.107v244.128\r\n                    c0,5.029,4.078,9.107,9.108,9.107h30.711c5.03,0,9.108-4.078,9.108-9.107V206.996\r\n                    C239.584,201.967,235.506,197.889,230.476,197.889z"}"></path></g></g><g style="${"opacity:0.1;"}"><path style="${"fill:#0C0804;"}" d="${"M407.22,147.564l-0.234,5.523l-11.435,295.127c0,34.384-10.968,62.386-38.194,63.71\r\n                C356.736,512,356.036,512,355.336,512H214.228V147.564H407.22z"}"></path><path style="${"fill:#0C0804;"}" d="${"M430.246,103.302v31.351H214.228V50.951h43.25V34.694c0-0.234,0-0.389-0.078-0.623\r\n                c-0.233-3.734-3.423-6.69-7.234-6.69h-35.938V0h35.938c1.011,0,2.022,0.078,2.956,0.156c0.389,0,0.7,0,1.011,0.078\r\n                c0.078,0,0.078,0.078,0.078,0.078c15.869,1.789,28.315,14.468,30.259,30.26v0.078h0.078c0.078,0,0.078,0,0.156,0\r\n                c0,0.078,0,0.078,0,0.156c0.078,1.088,0.156,2.255,0.156,3.422v0.389c0,0.078,0,0.078,0,0.078v23.648h56.318\r\n                c1.322,0,2.645,0.076,3.967,0.156c0.855,0.076,1.633,0.156,2.411,0.232c27.693,2.49,51.029,20.148,61.686,44.572H430.246z"}"></path></g></g></svg></button>
</div>`;
});
class Todo {
  constructor(nombre, completado = false, importante = false) {
    this.tarea = nombre;
    this.completado = completado;
    this.importante = importante;
  }
}
const Button_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "button.svelte-qmw8l2.svelte-qmw8l2{position:relative;padding:1em 1.8em;outline:none;border:1px solid #303030;background:#212121;color:#ae00ff;text-transform:uppercase;letter-spacing:2px;font-size:15px;overflow:hidden;transition:0.2s;border-radius:20px;cursor:pointer;font-weight:bold;max-width:250px}button.svelte-qmw8l2.svelte-qmw8l2:hover{box-shadow:0 0 10px #ae00ff, 0 0 25px #001eff, 0 0 50px #ae00ff;transition-delay:0.6s}button.svelte-qmw8l2 span.svelte-qmw8l2{position:absolute}button.svelte-qmw8l2 span.svelte-qmw8l2:nth-child(1){top:0;left:-100%;width:100%;height:2px;background:linear-gradient(90deg, transparent, #ae00ff)}button.svelte-qmw8l2:hover span.svelte-qmw8l2:nth-child(1){left:100%;transition:0.7s}button.svelte-qmw8l2 span.svelte-qmw8l2:nth-child(3){bottom:0;right:-100%;width:100%;height:2px;background:linear-gradient(90deg, transparent, #001eff)}button.svelte-qmw8l2:hover span.svelte-qmw8l2:nth-child(3){right:100%;transition:0.7s;transition-delay:0.35s}button.svelte-qmw8l2 span.svelte-qmw8l2:nth-child(2){top:-100%;right:0;width:2px;height:100%;background:linear-gradient(180deg, transparent, #ae00ff)}button.svelte-qmw8l2:hover span.svelte-qmw8l2:nth-child(2){top:100%;transition:0.7s;transition-delay:0.17s}button.svelte-qmw8l2 span.svelte-qmw8l2:nth-child(4){bottom:-100%;left:0;width:2px;height:100%;background:linear-gradient(360deg, transparent, #001eff)}button.svelte-qmw8l2:hover span.svelte-qmw8l2:nth-child(4){bottom:100%;transition:0.7s;transition-delay:0.52s}button.svelte-qmw8l2.svelte-qmw8l2:active{background:#ae00af;background:linear-gradient(to top right, #ae00af, #001eff);color:#bfbfbf;box-shadow:0 0 8px #ae00ff, 0 0 8px #001eff, 0 0 8px #ae00ff;transition:0.1s}button.svelte-qmw8l2:active span:nth-child(1) span:nth-child(2) span:nth-child(2) span.svelte-qmw8l2:nth-child(2){transition:none;transition-delay:none}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { clk_handler } = $$props;
  let { text } = $$props;
  let { titulo } = $$props;
  if ($$props.clk_handler === void 0 && $$bindings.clk_handler && clk_handler !== void 0)
    $$bindings.clk_handler(clk_handler);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.titulo === void 0 && $$bindings.titulo && titulo !== void 0)
    $$bindings.titulo(titulo);
  $$result.css.add(css$3);
  return `<button${add_attribute("title", titulo, 0)} class="${"svelte-qmw8l2"}"><span class="${"svelte-qmw8l2"}"></span>
    <span class="${"svelte-qmw8l2"}"></span>
    <span class="${"svelte-qmw8l2"}"></span>
    <span class="${"svelte-qmw8l2"}"></span> ${escape(text)}
  </button>`;
});
const check = "/_app/immutable/assets/check-031ac9c9.svg";
const Keystroke = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  return ``;
});
const Spinner_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".loader.svelte-lwvknu{width:30px;height:30px;border:10px solid #be1cd450;border-top-color:#c81cd4;animation:svelte-lwvknu-spin013151 1s linear infinite;border-radius:100%;margin-top:2rem;margin-right:.375rem}@keyframes svelte-lwvknu-spin013151{to{transform:rotate(360deg)}}",
  map: null
};
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"loader svelte-lwvknu"}"></div>`;
});
function getFromMemory() {
}
const TodoList_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.todolist-main.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f{height:100vh;width:100vw;display:flex;flex-direction:column;justify-content:center;align-items:center}.todolist-main.svelte-1yw569f .svelte-1yw569f.svelte-1yw569f.svelte-1yw569f{user-select:none}.button.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f{width:100%;display:flex;justify-content:center;align-items:center}.todo-form.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f{width:100%}.inp.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f{position:relative;margin:auto;width:100%;max-width:390px;border-radius:3px;overflow:hidden;margin-bottom:1rem}.todo-list.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f{width:70%}.container.svelte-1yw569f input.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.container.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f{display:flex;gap:10px;width:100%;justify-content:center;align-items:center;margin-top:1rem}.todo-nada.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f{display:flex;flex-direction:row;gap:1rem;align-items:center;justify-content:center;margin-top:2rem}.todo-nada.svelte-1yw569f h1.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f{font-size:clamp(1.2rem,2vw,1.6rem)}.todo-nada.svelte-1yw569f img.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f{width:50px;height:50px}.checkmark.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f{position:relative;box-shadow:rgb(255, 84, 0) 0px 0px 0px 2px;background-color:rgba(16, 16, 16, 0.5);height:20px;width:20px;margin-right:10px;flex-shrink:0;margin-top:-1px;transition:all 0.2s ease 0s;cursor:pointer;transform-origin:0px 10px;border-radius:4px;margin:-1px 10px 0px 0px;padding:0px;box-sizing:border-box}.container.svelte-1yw569f input.svelte-1yw569f:checked~.checkmark.svelte-1yw569f.svelte-1yw569f{box-shadow:rgb(255, 84, 0) 0px 0px 0px 2px;background-color:rgba(245, 24, 24, 0.5);height:20px;width:20px;margin-right:10px;flex-shrink:0;margin-top:-1px;transition:all 0.2s ease 0s;cursor:pointer;transform-origin:0px 10px;border-radius:4px;margin:-1px 10px 0px 0px;padding:0px;box-sizing:border-box}.checkmark.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f:after{content:"";position:absolute;display:none}.container.svelte-1yw569f input.svelte-1yw569f:checked~.checkmark.svelte-1yw569f.svelte-1yw569f:after{display:block}.container.svelte-1yw569f .checkmark.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f:after{left:0.45em;top:0.25em;width:0.25em;height:0.5em;border:solid white;border-width:0 0.15em 0.15em 0;transform:rotate(45deg);transition:all 500ms ease-in-out}.inp.svelte-1yw569f .label.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f{position:absolute;top:20px;left:12px;font-size:14px;color:whitesmoke;font-weight:500;transform-origin:0 0;transform:translate3d(0, 0, 0);transition:all 0.2s ease;pointer-events:none;font-family:Arial, Helvetica, sans-serif}.inp.svelte-1yw569f .focus-bg.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0, 0, 0, 0.05);z-index:-1;transform:scaleX(0);transform-origin:left}.inp.svelte-1yw569f input.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;border:0;font-family:inherit;padding:16px 12px 0 12px;height:56px;font-size:16px;font-weight:400;background:rgba(0, 0, 0, 0.02);box-shadow:inset 0 -1px 0 rgba(255, 255, 255, 0.3);color:whitesmoke;font-size:1.2rem;transition:all 0.15s ease}.inp.svelte-1yw569f input.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f:hover{background:rgba(0, 0, 0, 0.04);box-shadow:inset 0 -1px 0 rgba(255, 255, 255, 0.5)}.inp.svelte-1yw569f input.svelte-1yw569f:not(:-moz-placeholder-shown)+.label.svelte-1yw569f.svelte-1yw569f{color:rgb(150, 150, 150);transform:translate3d(0, -12px, 0) scale(0.75)}.inp.svelte-1yw569f input.svelte-1yw569f:not(:-ms-input-placeholder)+.label.svelte-1yw569f.svelte-1yw569f{color:rgb(150, 150, 150);transform:translate3d(0, -12px, 0) scale(0.75)}.inp.svelte-1yw569f input.svelte-1yw569f:not(:placeholder-shown)+.label.svelte-1yw569f.svelte-1yw569f{color:rgb(150, 150, 150);transform:translate3d(0, -12px, 0) scale(0.75)}.inp.svelte-1yw569f input.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f:focus{background:rgba(0, 0, 0, 0.05);outline:none;box-shadow:inset 0 -2px 0 #ae00ff}.inp.svelte-1yw569f input.svelte-1yw569f:focus+.label.svelte-1yw569f.svelte-1yw569f{color:#ae00ff;transform:translate3d(0, -12px, 0) scale(0.75);font-family:Arial, Helvetica, sans-serif}.inp.svelte-1yw569f input.svelte-1yw569f:focus+.label.svelte-1yw569f+.focus-bg.svelte-1yw569f{transform:scaleX(1);transition:all 0.1s ease}.todo-form.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f{display:flex;flex-direction:column}h1.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f.svelte-1yw569f{color:whitesmoke}',
  map: null
};
const TodoList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tarea = "";
  let todos = [];
  let cargado = false;
  let important = false;
  const getTodos = async () => {
    const m_todos = await getFromMemory();
    todos = m_todos;
    cargado = true;
    cargado = cargado;
  };
  getTodos();
  const addTodo = () => {
    if (tarea.trim() !== "" && tarea) {
      const todo = new Todo(tarea.trim(), false, important);
      todos = [...todos, todo];
      todos = todos;
    }
  };
  const removeTodo = (i) => {
    todos.splice(i, 1);
    if (todos.length <= 0)
      ;
    todos = todos;
  };
  const toggleCompletado = (todo) => {
    todo.completado = !todo.completado;
    todos = todos;
  };
  $$result.css.add(css$1);
  return `${validate_component(Keystroke, "Keystroke").$$render($$result, {}, {}, {})}

<div class="${"todolist-main svelte-1yw569f"}"><form class="${"svelte-1yw569f"}"><div class="${"todo-form svelte-1yw569f"}"><label class="${"inp svelte-1yw569f"}" for="${"inp"}"><input placeholder="${""}" id="${"inp"}" type="${"text"}" class="${"svelte-1yw569f"}"${add_attribute("value", tarea, 0)}>
                <span class="${"label svelte-1yw569f"}">Añadir tareas</span>
                <span class="${"focus-bg svelte-1yw569f"}"></span></label>
            <div class="${"button svelte-1yw569f"}">${validate_component(Button, "Button").$$render(
    $$result,
    {
      clk_handler: addTodo,
      text: "Añadir",
      titulo: "Añadir tarea a la lista."
    },
    {},
    {}
  )}</div>
            <label class="${"container svelte-1yw569f"}"><input type="${"checkbox"}" class="${"svelte-1yw569f"}"${add_attribute("checked", important, 1)}>
                <div title="${"Marcar tarea como prioritaria."}" class="${"checkmark svelte-1yw569f"}"></div></label></div></form>

    ${cargado ? `<div class="${"todo-list svelte-1yw569f"}">${todos.length > 0 ? `${each(todos, (todo, i) => {
    return `${validate_component(Todo$1, "Todo").$$render(
      $$result,
      {
        tarea: todo.tarea,
        t_important: todo.importante,
        fn_remove: () => removeTodo(i),
        fn_completada: () => toggleCompletado(todo),
        completado: todo.completado
      },
      {},
      {}
    )}`;
  })}` : ``}
            
            ${todos.length <= 0 ? `<div class="${"todo-nada svelte-1yw569f"}"><h1 class="${"svelte-1yw569f"}">No tienes tareas que hacer</h1>
                <img${add_attribute("src", check, 0)} alt="${"emoticono triste"}" class="${"svelte-1yw569f"}"></div>` : ``}</div>` : ``}

    ${!cargado ? `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}` : ``}

</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{background-color:rgb(15, 15, 15);font-family:Arial, Helvetica, sans-serif}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(TodoList, "TodoList").$$render($$result, {}, {}, {})}
<head><title>Simple TodoList</title>
</head>`;
});
export {
  Page as default
};
