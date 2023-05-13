import React from 'react';

export const Progress = ({current, total}) => {
  return (
    <p>
      {current}/{total}
    </p>
  );
};
