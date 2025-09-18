const changeStateReducer = (state:string = "Rikkei Academy", action:{type:"CHANGE"})=>{
    switch(action.type){
        case "CHANGE":
            return "Rikkei Soft"
        default:
            return state
    }

}
export default changeStateReducer