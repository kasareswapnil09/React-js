import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
// import { shallow, mount, render } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button } from 'bootstrap';



describe("About browser page Testing",()=>{

    //------pass the using the false check-----
    it('class to check ',()=>{
        let wrapper = shallow(<Router location={{ pathname: '/Login.js' }}><Login></Login></Router>)
        //console.log(wrapper.debug())
        expect(wrapper.exists('#container')).toEqual(false)
    });

    // it('Renders with a className equal to the variant', () => {
    //     const { container } = render(<Button variant="primary" className="col-lg-6" ></Button>)
    //     expect(container.children[1].toHaveClass('col-lg-6'));
    // });

    // ----Not passchecking html Format inside the Login.js
    // it('Html msg to check ',()=>{
    //     let wrapper = shallow(<Router location={{ pathname: '/Login.js' }}><Login></Login></Router>)
    //     //console.log(wrapper.debug())
    //     expect(wrapper.contains(
    //         <div className="container mt-3">
    //     <section className="d-flex justify-content-between">
    //         <div className="left_data" style={{width:"100%"}}>
    //         <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
    //         <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" />
    //       </Form.Group>
    //       </div>
    //       </section>
    //       </div>
    //     )).toEqual(true)
    // })


    //--- Not pass  find children length check to tag check inside Login.js of ul
    // it('children length check',()=>{
    //     let wrapper = shallow(<Router location={{ pathname: '/Login.js' }}><Login></Login></Router>)
    //     expect(wrapper.find('Form.Group').children().length).toBe(2)
    // })


     //---### pass checking html Format used AllMatching elements inside the about.js
     it('Only msg to check ',()=>{
        let wrapper = shallow(<Router location={{ pathname: '/Login.js' }}><Login></Login></Router>)
        expect(wrapper.containsAllMatchingElements([<Button>Submit</Button>])).toEqual(false)
    });

     //----Not passCheck the button class inside any present or not  using hasClass  inside Blog.js of button
    //  it('hasClass check',()=>{
    //     let wrapper = shallow(<Router location={{ pathname: '/Login.js' }}><Login></Login></Router>)
    //     expect(wrapper.find('col-lg-6').hasClass(addData)).toBe(true)
    // });

    //Check the main div class inside any present or not  inside Login.js 
    // it('is check',()=>{
    //     let wrapper = shallow(<Router location={{ pathname: '/Login.js' }}><Login></Login></Router>)
    //     expect(wrapper.is('.container mt-3')).toBe(true)
    // })

    ///------------------1. not pass the child check-------

    // it('is check', () => {
    //     const wrapper = shallow(<Router location={{ pathname: '/Login.js' }}><Login></Login></Router>)
    //     //console.log(wrapper.debug());
    //     //expect(wrapper.find('.div.container').hasClass('mt-3')).toBe(true);
    //     expect(wrapper.find('.div.container').childAt(1).type()).to.equal('h3');
    //   });

      //--------------- not pass rendering the sign in 
    //   it('renders the Sign In heading', () => {
    //     const wrapper = shallow(<Router location={{ pathname: '/Login.js' }}><Login></Login></Router>);
    //     expect(wrapper.find('.container h3').text()).toEqual('Sign In');
    //   });

      //------------ not passed child check  

        //find child check to tag  check inside Login.js
    // it('child check',()=>{
    //     let wrapper = shallow(<Router location={{ pathname: '/Login.js' }}><Login></Login></Router>)
    //     expect(wrapper.find('.left_data').childAt(1).type()).toBe('Form')
    // })

    //----------- pass  ---------

    it('children inside the form length check',()=>{
        let wrapper = shallow(<Router location={{ pathname: '/Login.js' }}><Login></Login></Router>)
        expect(wrapper.find('.form').children().length).toBe(0)
    })

    ///----------------children 

    // it('children inside the form length check',()=>{
    //     let wrapper = shallow(<Router location={{ pathname: '/Login.js' }}><Login></Login></Router>)
    //     const span = wrapper.find('.d-flex justify-content-between')
    //     const result = span;
    //     expect(result).toBe("Sign in with");
    // })

    it("should check the login name",()=>{
        const wrapper = shallow(<Router location={{ pathname: '/Login.js' }}><Login></Login></Router>)
        wrapper.debug(); //html element 
        //const span = wrapper.find("span");
        //const result = span.text();
        //expect(result).toBe("Signin?");
    })

    //----### for check the title and name inside 
  it("Only Login.js element to check ", () => {
    const wrapper = shallow(
        <Router location={{ pathname: '/Login.js' }}><Login name={"Login Text"}></Login></Router>
    );
    //wrapper.debug();
    const title = wrapper.find(".mt-3").text();
    expect(title).toBe("Already Have an Account");
    //expect(wrapper.containsAllMatchingElements([<legend> Hello world!</legend>])).toEqual(true);
  });
      
});