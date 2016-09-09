import React from 'react';
import TestUtils from 'react-addons-test-utils';
import DropdownProfileCard from './DropdownProfileCard';
import { LinkContainer } from 'react-router-bootstrap';

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

  it('Should render as a <LinkContainer>', () => {
    expect(this.component.type).to.equal(LinkContainer);
  });

  // TODO: Update this!
  // it('Should render 3 children', () => {
  //   expect(this.component.props.children.length).to.equal(3);
  // });
});
