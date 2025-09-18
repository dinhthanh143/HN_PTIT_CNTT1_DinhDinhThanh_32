import type { RandomAction } from "../actions/RandomAction"

const randomReducer = (state: number[] = [], action:RandomAction)=>{
    switch(action.type){
        case "RANDOM":
            return [...state, action.payload]
        default:
            return state
    }

}
export default randomReducer