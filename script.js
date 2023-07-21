function fibonacci(num) {
// your code here
	let prev =0;
	let curr =0;

	if(num==1) return prev;
	if(num==2) return curr;
		return prev;
	for(let i=3;i<=num;i++){
		let next=prev+curr;
		prev=curr;
		curr=next;
	}
		return curr
}

module.exports = fibonacci;
