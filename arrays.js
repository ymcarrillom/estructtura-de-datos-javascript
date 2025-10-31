// const arrays = ['ana', 'pedro','juana']

class MyArray {
    constructor(){
        this.length = 0;
        this.data = {}
    }
    get(index) {
        return this.data[index]
    }
    push(item) {
        this.data[this.length] = item
        this.length++;
        return this.data
    }
}

const myArray = new MyArray ();

myArray.push('yonatan')
myArray.push('mari')

console.log(myArray)
