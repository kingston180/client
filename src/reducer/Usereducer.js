export const reducer=(state,action)=>{
    if(action.type==="User") return action.payload;
    return state;
}
export const initialState=localStorage.getItem("user");