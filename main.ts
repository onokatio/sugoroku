//type PlaceId: number;

interface User{
	Position: number,
	Name: string,
};

interface Place{
	Description: string,
	Next: number,
	Preview: number,
};

interface Maps{
	Places: Place[],
};

const User1 : User = {
	Position: 0,
	Name: "a test user",
}

console.log(User1)
