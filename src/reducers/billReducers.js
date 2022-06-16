const initialData = {
  list: []
};

const billReducers = (state = initialData, action) => {
  switch (action.type) {

    case "ADD_BILL":

      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data
          }
        ]
      }
      case "DELETE_BILL":

       const newList = state.list.filter((elem)=>elem.id !== action.id)
        return {
          ...state,
          list:newList
        }

        case "REMOVE_BILL":return{
          ...state,
          list:[]
        }
      default: return state;
  }
}
export default billReducers;
