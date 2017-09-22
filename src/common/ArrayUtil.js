const ArrayUtil = {
    removeElement(array, func, value){
        let newArray = array.filter(e => func(e) !== func(value));
        return newArray;
    }
};
export default ArrayUtil;