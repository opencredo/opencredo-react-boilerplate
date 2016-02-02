import React from 'react';
import TestUtils from 'react-addons-test-utils';
import DropDown from './DropDown';
import { Input } from 'react-bootstrap';

function shallowRender(component) {
  const renderer = TestUtils.createRenderer();

  renderer.render(component);

  return renderer.getRenderOutput();
}

function shallowRenderWithProps(props = {}) {
  return shallowRender(<DropDown {...props} />);
}

describe('[FormField] DropDown', function dropDownSpec() {
  beforeEach(() => {
    this.props = {
      label: 'a label',
      field: {},
      values: ['one', 'two', 'three', 'four'],
    };
    this.component = shallowRenderWithProps(this.props);
  });

  it('Should render as <Input>', () => {
    expect(this.component.type).to.equal(Input);
  });

  it('Should render correct number of children', () => {
    expect(this.component.props.children.length).to.equal(this.props.values.length);
  });

  it('Should render correct `value` for 2nd child', () => {
    expect(this.component.props.children[1].props.value).to.equal(this.props.values[1]);
  });

  it('Should render correct `children` for 3rd child', () => {
    expect(this.component.props.children[2].props.children).to.equal(this.props.values[2]);
  });
});
