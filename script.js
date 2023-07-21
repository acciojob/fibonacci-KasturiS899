function fibonacci(num) {
// your code here
	let prev =0;
	let curr =0;
	let next = prev+curr;

	if(num==0) 
		return prev;
	for(let i=3;i<=num;i++){
		let next=prev+curr;
		prev=curr;
		curr=next;
	}
		return curr
}

module.exports = fibonacci;
