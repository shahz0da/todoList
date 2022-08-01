const initialState = {
    value: "",
    value3: "",
    tasks: [
        { main: "Task 1", cmoplete: true, edit: false, value2: "" },
        { main: "Task 2", cmoplete: true, edit: false, value2: "" },
        { main: "Task 3", cmoplete: false, edit: false, value2: "" }
    ]
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        // asosiy input uchun
        case "TYPING": return { ...state, value: action.payload };

        // kichik cardlarni inputi un
        case "TYPINGG": return { ...state, value3: action.payload };

        // ma'lumot qo'shish un
        case "ADD_TASK": return { ...state, tasks: [...state.tasks, { main: action.payload, cmoplete: true }], value: '' };

        // o'chirish un
        case "DELETE_TASK":
            let tasks = [...state.tasks];
            tasks.splice(action.payload, 1);
            return { ...state, tasks };

        // hammasini ochirish un
        case "CLEAR_ALL":
            let taskss = [...state.tasks];
            taskss.splice(action.payload, action.payload.length);
            return { ...state, tasks: taskss, value: "" };

        // soz ni ustiga chizish un
        case "CHIZIQ":
            let chiziqQoyish = [...state.tasks];
            chiziqQoyish[action.payload].cmoplete = !chiziqQoyish[action.payload].cmoplete;
            return { ...state, tasks: chiziqQoyish }

        // so'zlarni o'zgartirish un
        case "EDIT_TASK":
            let editing = [...state.tasks];
            editing[action.payload].edit = true;
            state.value3 = editing[action.payload].main;
            return { ...state, tasks: editing };


        // o'zgartirilgan so'zlarni saqlash uchun
        case "SAVE_TASK":
            let name1 = [...state.tasks];
            name1[action.payload].edit = false;
            name1[action.payload].main = state.value3;
            return { ...state, tasks: name1, value3: "" };

        default: return state;
    }


}
export default Reducer;
