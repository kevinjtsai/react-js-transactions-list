import React from 'react';

const FilterButton = (props) => {
  return (
    <button>
      {props.name}
    </button>
  );
};

export { FilterButton as default }