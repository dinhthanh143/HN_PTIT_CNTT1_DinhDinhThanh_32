export type AccountType = {
    email: string,
    password:string
}
export type AccountAction =
| {type: "REGISTER", payload: AccountType }
| {type: "LOGIN", payload: AccountType }

