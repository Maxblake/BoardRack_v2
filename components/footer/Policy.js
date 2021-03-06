import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import policyLinks from '../../constants/policyLinks';

const Li = styled.li`
  display: block;
  a {
    color: ${({ theme }) => theme.primaryLightGrey};
    &:hover {
      color: ${({ theme }) => theme.primaryWhite};
    }
  }
`;

const Policy = () => {
  return (
    <ul>
      {policyLinks.map((policyLink, index) => {
        return (
          <Li key={index}>
            <Link href={policyLink.href}>
              <a>{policyLink.title}</a>
            </Link>
          </Li>
        );
      })}
    </ul>
  );
};

export default Policy;
