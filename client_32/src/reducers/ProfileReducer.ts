export type ProfileType = {
  id: number;
  fullName: string;
  gender: "Nam" | "Nữ";
  birthDate: string; 
  address: string;
}
const defaultProfile:ProfileType = {
    id: 1,
  fullName: "Thanh",
  gender: "Nam" ,
  birthDate: "14-03-2006",
  address: "100 bronx",
}
import type { ProfileAction } from "../actions/ProfileAction";
const profileReducer = (state: ProfileType = defaultProfile, action: ProfileAction)=>{
    switch(action.type){
        case "LOAD":
            return state
        case "UPDATE":
            return action.payload
        default:
            return state
    }
}
export default profileReducer