module.exports = {

    areTwoObjectValueEqual(objA, objB) {
        return JSON.stringify(objA) === JSON.stringify(objB)
    },

    cloneObject(obj) {
        return JSON.parse(JSON.stringify(obj))
    },

    sortStringArray(arr) {
        const sortedArray = this.cloneObject(arr).sort((a, b) => {
            a.localeCompare(b)
        })
        return sortedArray
    } 

}