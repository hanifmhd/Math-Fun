/**
 * @format
 */

import 'react-native';
import React from 'react';
import OnBoarding from '../src/pages/OnBoarding';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<OnBoarding />).toJSON();
  expect(tree).toMatchSnapshot();
});
