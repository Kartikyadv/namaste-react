import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

describe("Contact us page test case", ()=>{ // used to group test cases
    
    test("is contact component rendered",()=>{
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })


    test("to find submit text",()=>{
        render(<Contact/>);
        const text = screen.getByText("Submit");
        expect(text).toBeInTheDocument();
    })
})
