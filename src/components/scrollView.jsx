import React from 'react';
import ReactDOM from 'react-dom';
import setClassName from '../helpers/setClassName';

var cancelScrollEvent = function(e) {
  e.stopImmediatePropagation();
  e.preventDefault();
  e.returnValue = false;
  return false;
};

var addScrollEventListener = function(node, handler) {
  node.addEventListener('wheel', handler, false);
};

var removeScrollEventListener = function(node, handler) {
  node.removeEventListener('wheel', handler, false);
};

export default class ScrollView extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {
    this.scrollRemove = this.scrollLock();
  }

  componentWillUnmount() {
    this.scrollRemove();
  }

  scrollLock(node) {
    node = node || ReactDOM.findDOMNode(this);
    this._setScrollTop(node);
    this.scrollNode = node;
    addScrollEventListener(node, this.onScrollHandler);
    return (el) => {
      el = el || this.scrollNode;
      removeScrollEventListener(el, this.onScrollHandler);
    };
  }

  onScrollHandler(e) {
    var node = this;
    var scrollTop = node.scrollTop;
    var scrollHeight = node.scrollHeight;
    var height = node.clientHeight;
    var wheelDelta = e.deltaY;
    var isDeltaPositive = wheelDelta > 0;

    if (isDeltaPositive && wheelDelta > scrollHeight - height - scrollTop) {
      node.scrollTop = scrollHeight;
      return cancelScrollEvent(e);
    }
    else if (!isDeltaPositive && -wheelDelta > scrollTop) {
      node.scrollTop = 0;
      return cancelScrollEvent(e);
    }
  }

  _setScrollTop(node) {
    const { index } = this.props;
    const i = index > 0 ? index - 1 : 0;
    const scrollTop = node.children[i].offsetTop;
    node.scrollTop = scrollTop;
  }

  render() {
    const { className, children, index, ...props } = this.props;
    return (
      <div className={setClassName("scroll-view", className)} {...props}>
        {children}
      </div>
    );
  }
}