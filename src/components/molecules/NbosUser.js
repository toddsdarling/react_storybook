import React from 'react';
import PropTypes from 'prop-types';

export const NbosUser = ({ user }) => {
  let fullName = 'N/A';
  let teamLeadFullName = 'N/A';

  if (user) {
    const firstName = user.first_name;
    const lastName = user.last_name;
    fullName = `${firstName} ${lastName}`;

    const teamLeadFirstName = user.tl_first_name;
    const teamLeadLastName = user.tl_last_name;
    teamLeadFullName = `${teamLeadFirstName} ${teamLeadLastName}`;
  }

  return (
    <>
      <div>Full Name: {fullName}</div>
      <div>Team Lead Full Name: {teamLeadFullName}</div>
    </>
  );
};

NbosUser.propTypes = {
  id: PropTypes.node,
  teamLeadFirstName: PropTypes.string,
  teamLeadLastName: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string,
};

NbosUser.defaultProps = {
  id: null,
  teamLeadFirstName: null,
  teamLeadLastName: null,
  firstName: null,
  lastName: null,
  email: 'N/A',
  role: 'N/A',
};
