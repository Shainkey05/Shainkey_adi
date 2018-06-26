function reverse_a_number(n)
{
	n=n+"";
	return n.split("").reverse().join("");
}
console.log("Reverse:",reverse_a_number(223334));