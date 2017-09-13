const ArrayUtil = {
    removeElement(array, func, value){
        console.log("BEFORE ");
        console.log(array);
        let newArray = array.filter(e => func(e) !== func(value));
        console.log("AFTER ");
        console.log(newArray);
        return newArray;
    }
};
export default ArrayUtil;