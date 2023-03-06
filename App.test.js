import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

describe("App browser page Testing", () => {
  test("renders learn react link", () => {
    render(
      <Router location={{ pathname: "/App.js" }}>
        <App></App>
      </Router>
    );
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  //    //---### pass checking html Format used AllMatching elements inside the about.js
  //    it('Only App.js msg to check ',()=>{
  //     let wrapper = shallow(<Router location={{ pathname: '/App.js' }}><App></App></Router>);
  //     expect(wrapper.containsAllMatchingElements([<legend> Hello world!</legend>])).toEqual(true);
  // });

  //---### pass checking html Format used AllMatching elements inside the about.js
  it("Only App.js element to check ", () => {
    const wrapper = shallow(
      <Router location={{ pathname: "/App.js" }}>
        <App></App>
      </Router>
    );
    wrapper.debug();
    const span = wrapper.find("legend");
    const result = span.text();
    expect(result).toBe("Hello world!");
    //expect(wrapper.containsAllMatchingElements([<legend> Hello world!</legend>])).toEqual(true);
  });

  
});
