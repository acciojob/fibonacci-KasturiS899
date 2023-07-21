function fibonacci(num) {
// your code here
	let f1 =0;
	let f2 =0;
	let f3 = f1+f2;
	while(f3 <=num){
		if(num===f3){
			return 1;
		}
		f1=f2;
		f2=f3;
		f3=f1+f2;
	}
	return 0;
	
}

module.exports = fibonacci;
