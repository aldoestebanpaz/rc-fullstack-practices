import React from 'react';
import { withRouter } from 'react-router-dom';

function UserProfile(props) {
  const params = props.match.params;
  const userId = params.id;
  return (
    <div>Welcome User {userId}</div>
  );
}

export default withRouter(UserProfile);
