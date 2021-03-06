import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import supportLinks from '../../constants/supportLinks';

const Li = styled.li`
  display: block;
  a {
    color: ${({ theme }) => theme.primaryLightGrey};
    &:hover {
      color: ${({ theme }) => theme.primaryWhite};
    }
  }
`;

const Support = () => {
  return (
    <ul>
      {supportLinks.map((supportLink, index) => {
        return (
          <Li key={index}>
            <Link href={supportLink.href}>
              <a>{supportLink.title}</a>
            </Link>
          </Li>
        );
      })}
    </ul>
  );
};

export default Support;
