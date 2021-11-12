import React from 'react';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure ({ Adapter : new Adapter() });

import {shallow, configure} from 'enzyme';
import ProfileData from "./ProfileData";

describe('Profile Component Tests', () => {

    test ("should render employee id", () => {
        const wrapper = shallow(< ProfileData />);
        console.log(wrapper.find('h2').text());
        const hwtext = wrapper.find('h2').text();


        expect(hwtext).toContain();
    });

});
