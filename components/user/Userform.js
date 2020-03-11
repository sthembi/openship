import {
  Box,
  Heading,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Button,
} from '@chakra-ui/core';
import PropTypes from 'prop-types';
import ErrorMessage from '../common/ErrorMessage';

const sucessCard = {
  paddingX: 10,
  paddingY: 5,
  background: '#F1FAF5',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
};

const Userform = ({
  title,
  fields,
  handleToggleClick,
  links,
  buttonTitle,
  buttonColor,
  bottomText,
  bottomLinkText,
  onSubmit,
  buttonDisabled,
  error,
  loading,
  success,
}) => (
  <>
    <Box width={350} alignItems="center">
      <Box
        marginBottom={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          fontSize="lg"
          fontWeight="500"
          marginRight="auto"
          color="#425A70"
        >
          {title}
        </Heading>
        {links && links}
      </Box>
      {fields &&
        fields.map(field => (
          <InputGroup width="100%" borderColor="gray.200" mb={4}>
            <InputLeftElement
              children={<Icon name={field.icon} color="gray.300" />}
            />
            <Input
              value={field.value}
              name={field.label}
              type={field.type || field.label}
              onChange={e => field.onChange(e.target.value)}
              placeholder={field.label}
            />
          </InputGroup>
        ))}

      <Button
        bg={buttonColor === 'blue' ? '#DDEBF7' : '#d4eee2'}
        color={buttonColor === 'blue' ? '#1070ca' : '#00783e'}
        _hover={buttonColor === 'blue' ? { bg: '#c0d8ed' } : { bg: '#bfe3d2' }}
        borderRadius={3}
        px={3}
        height={8}
        width="100%"
        disabled={buttonDisabled}
        isLoading={loading}
        onClick={onSubmit}
      >
        <Heading
          fontSize="md"
          textTransform="uppercase"
          letterSpacing="wider"
          fontWeight={700}
          marginRight={2}
        >
          {buttonTitle}
        </Heading>
        <Icon size={4} name="arrow-forward" />
      </Button>
      <Box marginTop={15}>
        <ErrorMessage error={error} />
      </Box>
      {success && (
        <Box {...sucessCard}>
          <Icon icon="tick-circle" color="success" marginRight={10} />
          <Text color="#47B881" fontWeight={500} fontSize="14px">
            Link sent. Please check your email.
          </Text>
        </Box>
      )}
    </Box>
    {handleToggleClick && (
      <Box mt={6}>
        <Text width="100%" color="gray.500" my={1}>
          {bottomText}
        </Text>
        <Text
          float="left"
          onClick={handleToggleClick}
          color={buttonColor === 'blue' ? '#1070ca' : '#00783e'}
          paddingBottom="1px"
          borderBottom={`2px solid ${
            buttonColor === 'blue' ? '#1070ca' : '#00783e'
          }`}
          cursor="pointer"
          className="hover"
          my={0}
        >
          {bottomLinkText}
        </Text>
      </Box>
    )}
  </>
);

export default Userform;

Userform.propTypes = {
  title: PropTypes.element,
  fields: PropTypes.array,
  handleToggleClick: PropTypes.func,
  links: PropTypes.element,
  buttonTitle: PropTypes.string,
  buttonColor: PropTypes.string,
  bottomText: PropTypes.string,
  bottomLinkText: PropTypes.string,
  onSubmit: PropTypes.func,
  buttonDisabled: PropTypes.bool,
  error: PropTypes.object,
  loading: PropTypes.string,
  success: PropTypes.bool,
};
