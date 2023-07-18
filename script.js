function fibonacci(num) {
// your code here
	let f1 =0;
	let f2 =1;
	let f3 = f1+f2;
	while(f3 <=num){
		if(num===f3){
			return true;
		}
		f1=f2;
		f2=f3;
		f3=f1+f2;
	}
	return false;
	
}

module.exports = fibonacci;
