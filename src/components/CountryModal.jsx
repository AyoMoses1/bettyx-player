import React from 'react'
import ModalComponent from './Modal';
import { FormControl, FormLabel, RadioGroup, Stack, Radio, Button } from '@chakra-ui/react';



function CountryModal(props) {
  const {title, isOpen, onClose, handleChange, handleSubmit, selectedCountry} = props
  
  return (
    <ModalComponent 
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      button={
        <Stack direction='row' spacing={4} align='center'>
          <Button onClick={handleSubmit} type='submit'>
            Submit
          </Button>
          <Button onClick={onClose} type='submit'>
            Cancel
          </Button>
        </Stack>
      }
    >
      <FormControl>
        <FormLabel>Country</FormLabel>
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            value={selectedCountry}
            defaultValue='NIGERIA'
            name='Country'
            onChange={handleChange}
          >
            <Stack spacing={5}>
              <Radio colorScheme='green' value='nigeria'>
                Nigeria
              </Radio>
              <Radio colorScheme='green' value='ghana'>
                Ghana
              </Radio>
            </Stack>
        </RadioGroup>
      </FormControl>
    </ModalComponent>
  )
}

export default CountryModal;