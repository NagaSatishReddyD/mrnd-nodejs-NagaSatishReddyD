
exports.Sum = function(num1, num2){
	return num1+num2;
}

exports.SumOfArray = function(arrayOfNums){
	var sum=0,i;
	for(i=0;i<arrayOfNums.length;i++)
		sum+=arrayOfNums[i];
	return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var sum=0;
	for(var i=0;i<arrayOfNums.length;i++)
	{
		var count=0;
		for(var j=0;j<i;j++)
		{
			if(arrayOfNums[i]!=arrayOfNums[j])
				count+=1;
			else
				break;
		}
		if(count==i)
			sum+=arrayOfNums[i];
	}
	return sum;
}

exports.ReverseString = function(str){
	var addstr="";
	for(i=str.length-1;i>=0;i--)
		addstr = addstr+str[i];
	return addstr;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
	var temp;
	if(arrayOfStrings.length==0)
	 return arrayOfStrings;
	for(i=0;i<(arrayOfStrings.length/2);i++)
	{
		temp=arrayOfStrings[i];
		arrayOfStrings[i]=arrayOfStrings[arrayOfStrings.length-(i+1)];
		arrayOfStrings[arrayOfStrings.length-(i+1)]=temp;
	}
	return arrayOfStrings
}