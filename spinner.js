import React from 'react';
import {Spinner} from 'react-bootstrap'
const SpinnerComp = () => {
  return ( <Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner> );
}
 
export default SpinnerComp;