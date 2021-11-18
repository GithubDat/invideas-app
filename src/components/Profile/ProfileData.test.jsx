// import React from 'react';

// import Adapter from 'enzyme-adapter-react-15';
// configure ({ Adapter : new Adapter() });

// import {shallow, configure} from 'enzyme';
// import ProfileData from "./ProfileData";

// import renderer from 'react-test-renderer';

// describe('Profile Component Tests', () => {

//     // it ("should render employee id", () => {
//     //     // const wrapper = shallow(< ProfileData />);

//     //     const wrapper = renderer.create(<ProfileData employee={{'id':'1'}}/>).root;
        
//     //     const hwtext = wrapper.findByProps({className: "profile"}.children);
//     //     console.log(hwtext);


//     //     expect(hwtext).toContain(`Your Employee Code is :`);
//     // });

// });

import React from 'react';
import ProfileData from "./ProfileData";
import {create} from 'react-test-renderer';


describe('ProfileData Component Tests', () => {

//     test ("should render login id", () => {
//         const wrapper = shallow(<Login/>);
//         console.log(wrapper.find('h2').text());
//         const hwtext = wrapper.find('h2').text();
//         expect(hwtext).toContain();
//     });

    test("ProfileData Component exists & matches the snapshot", () => {
        const profileData = create(<ProfileData  employee={{'id':'1'}}/>);
        expect(profileData.toJSON()).toMatchSnapshot();
    });

    // test ('find Profile child component', () => {
    //     const testRenderer = create(<Login props={{'id':'1'}}/>);
    //     const testInstance = testRenderer.root;

    //     expect(testInstance.findByType(Login).props.employee).toEqual({"props": {"id": "1"}});
    // });

});
