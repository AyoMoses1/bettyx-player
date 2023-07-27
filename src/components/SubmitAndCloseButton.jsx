import { Button, HStack } from '@chakra-ui/react';


const SubmitAndCloseButton = (props) => {
  return (
    <HStack>
      <Button variant='solid' onClick={props.onClose}>Cancel</Button>
      <Button variant={props.variant? props.variant : 'normal'} isDisabled={props.isDisabled} isLoading={props.isLoading} onClick={props.onSubmit}>{props.okText? props.okText: props.variant? 'Delete' : 'Submit'}</Button>
    </HStack>
  );
};

export default SubmitAndCloseButton;