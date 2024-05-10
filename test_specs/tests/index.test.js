// I want a function that takes two numbers that are not strings and adds them together and returns the sum of the two numbers

const {sum} =require("../calculations");

test('adds 1+2 to get 3', ()=>{
    expect(sum(1,2)).toBe(3)
    expect(sum(1,1)).toBe(2)
})


//two objects can never be the same
// {} can never equal {}
//{} === {}

test("test fr correct object", ()=>{
    const data = {name:"luke"};
    data['age'] = 29;
    expect(data).toEqual({name:"luke", age: 29})
})
