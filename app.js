// Create a constructor function
function MakeArray(array) {
	this.array = array;
}
// --------------
//   Properties
// --------------

// 01. map
MakeArray.prototype.map = function (callback) {

    // destructure the array from 'this'
	const { array } = this;

	const newArray = [];

	for (let i = 0; i < array.length; i++) {
        // add transformed elements to a new array and return that array
		newArray[i] = callback(array[i], i);
	}
	return newArray;
};

//----------------------------------------------------------------------------------------------

// 02. filter
MakeArray.prototype.filter = function (callback) {

    // destructure the array from 'this'
	const { array } = this;

	const newArray = [];

	for (let i = 0; i < array.length; i++) {
        // add transformed elements to a new array and return that array
        if (callback(array[i])) {
            newArray.push(array[i]);
        }
	}
	return newArray;
};

//----------------------------------------------------------------------------------------------

// 03. reduce
MakeArray.prototype.reduce = function (callback, accumulator) {

    // destructure the array from 'this'
	const { array } = this;

	for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]);
	}
	return accumulator;
};

//----------------------------------------------------------------------------------------------

// 04. some
MakeArray.prototype.some = function (callback) {

    // destructure the array from 'this'
	const { array } = this;

	for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) {
            return true;
          }
	}
	return false;
};

//----------------------------------------------------------------------------------------------

// 05. includes
MakeArray.prototype.includes = function (value) {

	return this.some(n => n===value);
};

//----------------------------------------------------------------------------------------------

// 06. every
MakeArray.prototype.every = function (callback) {

    // destructure the array from 'this'
	const { array } = this;

	for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i)) {
            return false;
          }
	}
	return true;
};

//----------------------------------------------------------------------------------------------

// 07. reverse
MakeArray.prototype.reverse = function (callback) {
    
    // destructure the array from 'this'
	const { array } = this;
    
    const result =[];
    const lastIndex = array.length - 1;
    
	for (let i = lastIndex; i > -1; i-=1) {
        result[lastIndex - i] = array[i];
	}
	return result;
};

//----------------------------------------------------------------------------------------------

const arr1 = new MakeArray([1, 2, 3, 4, 5]);

console.log('map:', arr1.map((n) => n*2)); // map
console.log('filter:', arr1.filter((n) => n>2)); // filter
console.log('reduce:', arr1.reduce((accumulator,n) => accumulator + n, 0)); // reduce
console.log('some:', arr1.some((n) => n===5)); // some
console.log('includes:', arr1.includes(2)); // includes
console.log('every:', arr1.every(n => Number.isInteger(n))); // every
console.log('reverse:', arr1.reverse()); // reverse
