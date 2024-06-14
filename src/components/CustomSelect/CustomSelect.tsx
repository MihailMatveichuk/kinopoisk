import React from 'react';

const SelectComponent = () => {
  return (
    <div>
      <label htmlFor='select'>Chose your filter</label>
      <select name='select' id='select' multiple>
        <option value='value1'>Значение 1</option>
        <option value='value2' selected>
          Значение 2
        </option>
        <option value='value3'>Значение 3</option>
      </select>
    </div>
  );
};

export default SelectComponent;
