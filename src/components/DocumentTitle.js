/* @flow */
import React, { PropTypes, Component } from 'react';
import { injectIntl } from 'react-intl';

type DocumentTitleProps = {
  title: Object;
  children: any;
  intl: {
    formatMessage: Function;
  };
};

class DocumentTitle extends Component {
  static propTypes = {
    title: PropTypes.object.isRequired,
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
    document.title = props.intl.formatMessage(props.title);
  }

  render(): React.Element {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default injectIntl(DocumentTitle);
