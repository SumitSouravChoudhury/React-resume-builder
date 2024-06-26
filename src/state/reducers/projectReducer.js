const projectReducer = (list = [], action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return [...list, action.payload];
    case "EDIT_PROJECT":
      let newArr = [...list];
      newArr[action.payload.id] = action.payload;
      return newArr;
    case "REMOVE_PROJECT":
      let arr = [...list];
      arr.splice(action.payload, 1);
      return arr;
    default:
      return list;
  }
};
export default projectReducer;
