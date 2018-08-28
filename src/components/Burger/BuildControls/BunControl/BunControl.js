import React from 'react';

import classes from './BunControl.css';

const bunControl = props => (
  <div className={classes.BunControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={classes.Less}
      onClick={props.toggleBun}
      disabled={props.hasBun}
    >
      Yes
    </button>
    <button
      className={classes.More}
      onClick={props.toggleBun}
      disabled={!props.hasBun}
    >
      No
    </button>
  </div>
);

export default bunControl;
