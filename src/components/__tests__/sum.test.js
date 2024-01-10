import { sum } from "../sum"

test("test for sum",()=>{
    const result = sum(2,2);

    //Assertion
    expect(result).toBe(4);
});