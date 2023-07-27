import React, { useState } from "react";
import { AsyncSelect } from "chakra-react-select";
import { FormLabel, FormControl } from "@chakra-ui/react";

const SearchInput = ({
  placeholder,
  label,
  value,
  onChange,
  isClearable = false,
  getOptions,
  size,
  mb,
}) => {
  const [timer, setTimer] = useState();

  const handleSearchWorkshop = (inputValue, callback) => {
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
        size={size ?? "sm"}
        value={value}
        onChange={onChange}
        loadOptions={handleSearchWorkshop}
        isClearable={isClearable}
        focusBorderColor="primary"
      />
      {/*  {error && <FormErrorMessage>{error.message}</FormErrorMessage>} */}
    </FormControl>
  );
};

export default SearchInput;
