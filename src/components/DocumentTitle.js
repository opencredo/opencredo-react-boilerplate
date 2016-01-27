/* @flow */
import React, { PropTypes, Component } from 'react';

type DocumentTitleProps = {
  title: string;
  children: any;
};

class DocumentTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
  };

  componentWillMount(): void {
    this.updateDocumentTitle(this.props);
  }

  componentWillUpdate(newProps: DocumentTitleProps): void {
    this.updateDocumentTitle(newProps);
  }

  props: DocumentTitleProps;

  updateDocumentTitle(props: DocumentTitleProps): void {
    document.title = props.title;
  }

  render(): React.Element {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default DocumentTitle;
