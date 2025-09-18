
const themeReducer = (state: string = "light", action: {type: "CHANGE_THEME"})=>{
    switch(action.type){
        case "CHANGE_THEME":
            return state === "light" ? "dark": "light"
        default:
            return state
    }

}
export default themeReducer