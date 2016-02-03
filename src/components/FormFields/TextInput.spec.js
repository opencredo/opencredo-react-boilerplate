import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TextInput from './TextInput';

const shallowRender = (component) => {
  const renderer = TestUtils.createRenderer();

  renderer.render(component);

  return renderer.getRenderOutput();
};

const shallowRenderWithProps = (props = {}) =>
  shallowRender(<TextInput {...props} />);

describe('[FormField] TextInput', function textInputSpec() {
  beforeEach(() => {
    this.props = {
      field: {},
    };
    this.component = shallowRenderWithProps(this.props);
  });

  it('Should render as <div>', () => {
    expect(this.component.type).to.equal('div');
  });
  it('Should have no placeholder', () => {
    const input = this.component.props.children[0];

    expect(input.props.placeholder).to.equal(undefined);
  });
  it('Should have text type', () => {
    const input = this.component.props.children[0];

    expect(input.props.type).to.equal('text');
  });
  it('Should set class names correctly', () => {
    expect(this.component.props.className).to.equal('form-group');
  });
  it('Should have no children', () => {
    const secondChild = this.component.props.children[1];

    expect(secondChild).to.equal(undefined);
  });

  describe('With type', () => {
    const type = 'uluru';

    beforeEach(() => {
      this.props.type = type;
      this.component = shallowRenderWithProps(this.props);
    });

    it('Should set type', () => {
      const input = this.component.props.children[0];

      expect(input.props.type).to.equal(type);
    });
  });

  describe('With placeholder', () => {
    const placeholder = 'holding place';

    beforeEach(() => {
      this.props.placeholder = placeholder;
      this.component = shallowRenderWithProps(this.props);
    });

    it('Should set placeholder', () => {
      const input = this.component.props.children[0];

      expect(input.props.placeholder).to.equal(placeholder);
    });
  });

  describe('When field is invalid', () => {
    beforeEach(() => {
      this.props.field.invalid = true;
      this.component = shallowRenderWithProps(this.props);
    });

    it('Should set class names correctly', () => {
      expect(this.component.props.className).to.equal('form-group has-error');
    });
  });
});
