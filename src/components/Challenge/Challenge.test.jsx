import React from 'react';

import {mount} from 'enzyme';
import Challenge from './Challenge'
import {create} from 'react-test-renderer';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProfileData from '../Profile/ProfileData';
import SelectSort from '../Sort/SelectSort';

Enzyme.configure ({ Adapter : new Adapter() });

describe('Challenge Component Tests', () => {
    // test ('should render login id', () => {
    //     const wrapper = mount(<Challenge/>);
    //     console.log(wrapper.find('h2').text());
    //     const hwtext = wrapper.find('h2').text();
    //     expect(hwtext).toContain();
    // });

    test('Matches the snapshot', () => {
        const challenge = create(<Challenge/>);
        expect(challenge.toJSON()).toMatchSnapshot();
    });

    // test ('find ProfileData child component', () => {
    //     const testRenderer = create(<Challenge props={{'id':'1'}}/>);
    //     const testInstance = testRenderer.root;

    //     expect(testInstance.findByType(ProfileData).props.employee).toEqual({'props': {'id': '1'}});
    // });


    test ('find SelectSort child component', () => {
        const testRenderer = create(<Challenge props={{'id':'1'}}/>);
        const testInstance = testRenderer.root;

        expect(testInstance.findByType(SelectSort).props.handleSorting.toJSON).toBe(undefined);
    });

    test('it shows the expected vote when clicked', () => {
        // const component = create(<Challenge props={{'id':'1'}}/>);
        // const instance = component.root;
        // const button = instance.findByType(challenge_icon);
        // button.props.onClick();
        // expect(button.props.children).toBe('');
      });
});
