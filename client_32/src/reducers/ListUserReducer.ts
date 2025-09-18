import type { ProfileType } from "./ProfileReducer"
const defaultUsers:ProfileType[] = [
    {
    id: 1,
    fullName: "Nguyễn Văn A",
    gender: "Nam",
    birthDate: "20/11/2023",
    address: "Thanh Xuân, Hà Nội",
  },
  {
    id: 2,
    fullName: "Nguyễn Thị B",
    gender: "Nữ",
    birthDate: "20/11/2023",
    address: "Cầu Giấy, Hà Nội",
  },
]
const ListUserReducer = (state: ProfileType[] = defaultUsers)=>{
    return state
}
export default ListUserReducer