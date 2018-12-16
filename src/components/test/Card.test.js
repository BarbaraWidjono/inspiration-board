import React from 'react';
import Card from '../Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  test('matches existing snapshot', () => {
    const testCard = {
      id: 1,
      text: "yummy",
      emoji: "pizza",
    }

    const testCallback = () => {}

    const wrapper = shallow(
      <Card
      card={testCard}
      removeCardCallback={testCallback} />
      )

    expect(wrapper).toMatchSnapshot();
  })

})
