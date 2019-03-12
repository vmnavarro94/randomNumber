function flip ()
{
	return Math.random() >= 0.5;

}

function randomNumber(n)
{
	if(n <= 0 || n >= 1000000)
	{
		throw new Error('n must be greater than 0 and lower than 1,000,000');
	}

	//If n is 1 the only posible value is 0
	if (n==1)
	{
		return 0;
	}

	//Convert n to binary
	var nBinary = n.toString(2).split('');
	//Generate a random binary of the same lengh in bases of flip()
	var randomBinary;
	var randomN;

	do
	{
		randomBinary = nBinary.map(function()
		{
			return flip() ? '1' : '0';
		});
		
		randomN = parseInt(randomBinary.toString().replace(/,/g, ''), 2);
	//Since the binary lenght is the same, we cannot have numbers greater than n, so we validate that is not equal
	}while(randomN == n);

	 return randomN;
}