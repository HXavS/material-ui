import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import SuccessOutlinedIcon from '../internal/svg-icons/SuccessOutlined';
import ReportProblemOutlinedIcon from '../internal/svg-icons/ReportProblemOutlined';
import ErrorOutlineIcon from '../internal/svg-icons/ErrorOutline';
import InfoOutlinedIcon from '../internal/svg-icons/InfoOutlined';

export const styles = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'transparent',
    display: 'flex',
    padding: '6px 16px',
  },
});

const defaultIconMapping = {
  success: <SuccessOutlinedIcon fontSize="inherit" />,
  warning: <ReportProblemOutlinedIcon fontSize="inherit" />,
  error: <ErrorOutlineIcon fontSize="inherit" />,
  info: <InfoOutlinedIcon fontSize="inherit" />,
};

const Carousel = React.forwardRef(function Carousel(props, ref) {
  const {
    children,
    classes,
    className,
    component: Component = 'div',
    role = 'tabpanel',
    variant = 'standard',
    ...other
  } = props;

  return (
    <Component
      role={role}
      className={clsx(classes.root, classes[variant], className)}
      ref={ref}
      {...other}
    >
      {children}
    </Component>
  );
});

Carousel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['outlined', 'standard']),
};

export default withStyles(styles, { name: 'MuiCarousel' })(Carousel);
