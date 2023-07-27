import React, { useState } from 'react';
import {
  AsyncSelect,
  OptionsOrGroups,
  GroupBase,
  ActionMeta,
  OptionBase,
} from 'chakra-react-select';
import { FormLabel, FormControl, useTheme } from '@chakra-ui/react';
import { AsyncSelectOptions as Options} from '../utils/types';








const SearchInput = ({
  placeholder,
  label,
  value,
  onChange,
  isClearable = false,
  getOptions,
  size,
  mb

}) => {
  const [timer, setTimer] = useState();
  const theme = useTheme();

  const handleSearchWorkshop = (
    inputValue, callback
  ) => {
    clearTimeout(timer);

    const thisTimer = setTimeout(() => {
      // trigger a new search after 3000ms
      (() => {
        callback(getOptions(inputValue));
      })();
    }, 2000);

    setTimer(thisTimer);
  };

  return (
    <FormControl mb={mb}>
      <FormLabel mb={0}>{label}</FormLabel>
      <AsyncSelect
        size={size ?? 'sm'}
        value={value}
        onChange={onChange}
        loadOptions={handleSearchWorkshop}
        isClearable={isClearable}
        focusBorderColor='primary'
      />
     {/*  {error && <FormErrorMessage>{error.message}</FormErrorMessage>} */}
    </FormControl>
  );
};

export default SearchInput;
