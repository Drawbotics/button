import React from 'react';
import cn from 'classnames';
import omit from 'lodash/omit';
import PropTypes from 'prop-types';


const className = (props) => cn('Button', {
  'Button--primary': props.category === 'primary',
  'Button--warning': props.category === 'warning',
  'Button--danger': props.category === 'danger',
  'Button--success': props.category === 'success',
  'Button--info': props.category === 'info',
  'Button--alert': props.category === 'alert',
}, {
  'Button--inverse': props.variation === 'inversed',
  'Button--borderless': props.variation === 'borderless',
}, {
  'Button--round-corners': props.round,
}, {
  'Button--small': props.size === 'small',
  'Button--medium': props.size === 'medium',
}, {
  'Link--as-button': props.href,
}, props.className);


const Button = (props) => {
  const {
    children,
    style,
    href,
    linkComponent,
  } = props;
  if (href) {
    if (linkComponent) {
      return React.createElement(linkComponent, {
        ...omit(props, ['category', 'round', 'variation', 'size', 'linkComponent']),
        className: className(props),
        style: style,
      });
    }
    return (
      <a
        {...omit(props, ['category', 'round', 'variation', 'size', 'linkComponent'])}
        className={className(props)}
        style={style}>
        {children}
      </a>
    );
  }
  return (
    <button
      {...omit(props, ['category', 'round', 'variation', 'size', 'linkComponent'])}
      className={className(props)}
      style={style}>
      {children}
    </button>
  );
};


Button.propTypes = {
  category: PropTypes.oneOf([ 'default', 'primary', 'danger', 'warning', 'success', 'info', 'alert' ]),
  round: PropTypes.bool,
  variation: PropTypes.oneOf([ 'inversed', 'borderless' ]),
  size: PropTypes.oneOf([ 'normal', 'small', 'medium' ]),
  href: PropTypes.string,
  linkComponent: PropTypes.element,
};


Button.defaultProps = {
  category: 'default',
};


export default Button;
