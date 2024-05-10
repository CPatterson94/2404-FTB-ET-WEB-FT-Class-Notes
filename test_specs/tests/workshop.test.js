const {logIn} = require("../workshop.js");

test('was logging in successful?', ()=>{
    expect(logIn("luke", "")).toBeFalsy();
    expect(logIn("", "pass")).toBeFalsy();
    expect(logIn("", "")).toBeFalsy();
    expect(logIn("luke", "pass")).toBeTruthy();

    // checking for the exact same result
    expect(logIn("ted", "pass")).not.toBeTruthy();
    expect(logIn("ted", "pass")).toBeFalsy();
})

text("feature that we want to work", ()=>{

//     see details function
//     function called show details of single player
//     showcase players name
//     theres a picture value
})
