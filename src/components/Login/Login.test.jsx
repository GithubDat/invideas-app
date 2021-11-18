import React from 'react';
// import Enzyme from 'enzyme';
// import {shallow, mount} from 'enzyme';
import Login from "./Login";
import {create} from 'react-test-renderer';


// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// Enzyme.configure ({ Adapter : new Adapter() });

describe('Challenge Component Tests', () => {

//     test ("should render login id", () => {
//         const wrapper = shallow(<Login/>);
//         console.log(wrapper.find('h2').text());
//         const hwtext = wrapper.find('h2').text();
//         expect(hwtext).toContain();
//     });

    // test("Component exists & matches the snapshot", () => {
    //     const login = create(<Login/>);
    //     expect(login.toJSON()).toMatchSnapshot();
    // });

    // test ('find Profile child component', () => {
    //     const testRenderer = create(<Login props={{'id':'1'}}/>);
    //     const testInstance = testRenderer.root;

    //     expect(testInstance.findByType(Login).props.employee).toEqual({"props": {"id": "1"}});
    // });

});
