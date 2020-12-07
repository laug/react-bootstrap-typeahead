/* eslint-disable import/no-extraneous-dependencies,import/no-unresolved */

import React, { Fragment, useRef } from 'react';
import { Button as RBButton, ButtonToolbar } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

import options from '../data';

const Button = (props) => (
  <RBButton {...props} size="sm" variant="outline-secondary" />
);

/* example-start */
const PublicMethodsExample = () => {
  const ref = useRef();

  return (
    <Fragment>
      <Typeahead
        defaultSelected={options.slice(0, 4)}
        id="public-methods-example"
        labelKey="name"
        multiple
        options={options}
        placeholder="Choose a state..."
        ref={ref}
      />
      <ButtonToolbar style={{ marginTop: '10px' }}>
        <Button onClick={() => ref.current.clear()}>
          Clear
        </Button>
        <Button onClick={() => ref.current.focus()}>
          Focus
        </Button>
        <Button
          onClick={() => {
            ref.current.focus();
            setTimeout(() => ref.current.blur(), 1000);
          }}>
          Focus, then blur after 1 second
        </Button>
        <Button onClick={() => ref.current.toggleMenu()}>
          Toggle Menu
        </Button>
      </ButtonToolbar>
    </Fragment>
  );
};
/* example-end */

export default PublicMethodsExample;
