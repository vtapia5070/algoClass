/*
 * JS is an object oriented programming language,
 * even though it doesn't have formal ways to create class constructors.
 * Hence the name: 'pseudoclasses'
 * pseudoclassical is the industry standard. Look up other class patterns.
*/
// Pseudoclassical
function Building (floors) {
    // this = {};
    this.what = 'building';
    this.floors = floors;
    // return this;
}

myHouse = new Bulding(3); // keyword new magically creates lines 9 and 12.
// {what: 'building', floors: 3}

// Methods (for all instances)
Building.prototype.countFloors = function () {
    console.log('I have', this.floors, 'floors');
};

myHouse.countFloors(); // 3

// TODO:
// Subclasisng and inheritance
// Other class patterns

// ex:
var Yurt = function (ribs) {
    this.ribs = ribs;
};

Yurt.prototype.countRibs = function () {
    if (this.ribs > 10) {
        console.log('YUM!!');
    }
}

var biancasHouse = new Yurt(50);
biancasHouse.countRibs(); // YUM!!
