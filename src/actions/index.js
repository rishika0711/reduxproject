export const addBill=(data)=>{
    return{
        type:"ADD_BILL",
        payload:{
            id:new Date().getTime().toString(), 
            data:data
        }
    }
}
export const deleteBill = (id) =>{
    return{
        type:"DELETE_BILL",
        id
    }
}
export const removeBill = () =>{
    return{
        type:"REMOVE_BILL"
    }
}