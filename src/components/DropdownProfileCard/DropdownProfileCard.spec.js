import React from 'react';
import TestUtils from 'react-addons-test-utils';
import DropdownProfileCard from './DropdownProfileCard';
import { Link } from 'react-router';

function shallowRender(component) {
  const renderer = TestUtils.createRenderer();

  renderer.render(component);
  return renderer.getRenderOutput();
}

function shallowRenderWithProps(props = {}) {
  return shallowRender(<DropdownProfileCard {...props} />);
}

describe('[Page] Landing Page', function landingPageSpec() {
  beforeEach(() => {
    this.props = {
      picture: 'picture',
      name: 'A User',
      nickname: 'a.user',
    };
    this.component = shallowRenderWithProps(this.props);
  });

  it('Should render as a <Link>', () => {
    expect(this.component.type).to.equal(Link);
  });

  it('Should render 3 children', () => {
    expect(this.component.props.children.length).to.equal(3);
  });
});
