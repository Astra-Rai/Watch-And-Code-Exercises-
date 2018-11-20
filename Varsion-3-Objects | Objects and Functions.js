


//name object 'garon'
//object has tweo properties

var gordon = {
	name: 'Gordon',
	//function prints out name on th object property
	sayName: function(){
//use this when function is sitting on an object
		console.log(this.name);
	}
};

sayName();
//expected output: Gordon