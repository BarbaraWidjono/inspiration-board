import React from 'react';
import NewCardForm from '../NewCardForm';
import { shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('matches existing snapshot', () => {
    const wrapper = shallow( <NewCardForm createNoteCallback={() => {}} />);

    expect(wrapper).toMatchSnapshot();
  })
})
