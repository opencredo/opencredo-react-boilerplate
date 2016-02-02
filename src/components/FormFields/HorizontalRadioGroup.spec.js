import React from 'react';
import TestUtils from 'react-addons-test-utils';
import HorizontalRadioGroup from './HorizontalRadioGroup';

const shallowRender = (component) => {
  const renderer = TestUtils.createRenderer();

  renderer.render(component);

  return renderer.getRenderOutput();
};

const shallowRenderWithProps = (props = {}) => {
  return shallowRender(<HorizontalRadioGroup {...props} />);
};

describe('[FormField] HorizontalRadioGroup', function horizontalRadioGroupSpec() {
  beforeEach(() => {
    this.spies = {};
    this.props = {
      field: {
        name: 'Home town',
        value: 'perth',
      },
      values: [
        {
          label: 'Perth',
          value: 'perth',
        },
        {
          label: 'Melbourne',
          value: 'melbourne',
        },
        {
          label: 'Sydney',
          value: 'sydney',
        },
      ],
    };
    this.component = shallowRenderWithProps(this.props);
  });

  it('Should render as <div>', () => {
    expect(this.component.type).to.equal('div');
  });

  it('Should render correct number of children', () => {
    expect(this.component.props.children.length).to.equal(this.props.values.length);
  });

  it('Should render label correctly for 2nd item', () => {
    const index = 1;
    const child = this.component.props.children[index];
    const label = child.props.children[1];

    expect(label).to.equal(this.props.values[index].label);
  });

  it('Should set value correctly for 3rd item', () => {
    const index = 2;
    const child = this.component.props.children[index];
    const input = child.props.children[0];
    const value = input.props.value;

    expect(value).to.equal(this.props.values[index].value);
  });

  it('Should set checked correctly for 1st item', () => {
    const index = 0;
    const child = this.component.props.children[index];
    const input = child.props.children[0];
    const checked = input.props.checked;
    const value = input.props.value;
    const expectedChecked = (value === this.props.field.value);

    expect(checked).to.equal(expectedChecked);
  });

  it('Should set checked correctly for 2nd item', () => {
    const index = 1;
    const child = this.component.props.children[index];
    const input = child.props.children[0];
    const checked = input.props.checked;
    const value = input.props.value;
    const expectedChecked = (value === this.props.field.value);

    expect(checked).to.equal(expectedChecked);
  });

  it('Should set checked correctly for 3rd item', () => {
    const index = 2;
    const child = this.component.props.children[index];
    const input = child.props.children[0];
    const checked = input.props.checked;
    const value = input.props.value;
    const expectedChecked = (value === this.props.field.value);

    expect(checked).to.equal(expectedChecked);
  });
});
