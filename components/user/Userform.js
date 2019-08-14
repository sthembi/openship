import { Pane, Heading, Text, Icon, TextInput } from 'evergreen-ui';
import PropTypes from 'prop-types';
import Button from '../common/Button';
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
    <Pane
      width={350}
      background="white"
      alignItems="center"
      padding={25}
      borderRadius={5}
      boxShadow="0 0 1px rgba(67,90,111,.47), 0 2px 4px -2px rgba(67,90,111,.3)"
    >
      <Pane
        marginBottom={20}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading size={500} marginRight="auto" color="#425A70">
          {title}
        </Heading>
        {links && links}
      </Pane>
      {fields &&
        fields.map(field => (
          <Pane
            position="relative"
            display="inline-flex"
            height={32}
            width="100%"
            marginBottom={20}
          >
            <Pane
              width={32}
              height={32}
              pointerEvents="none"
              position="absolute"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Icon icon={field.icon} color="#8b949c" size={12} zIndex={3} />
            </Pane>
            <TextInput
              className="clean-input"
              paddingLeft={32}
              name={field.label}
              width="100%"
              value={field.value}
              type={field.type || field.label}
              fontSize={15}
              onChange={e => field.onChange(e.target.value)}
              marginBottom={15}
              placeholder={field.label}
              backgroundColor="#F5F6F7 !important"
            />
          </Pane>
        ))}
      <Button
        onClick={onSubmit}
        background={buttonColor}
        textColor="#fff"
        width="100%"
        fontSize={14}
        height={28}
        disabled={buttonDisabled}
        isLoading={loading}
      >
        {buttonTitle}
        <Icon marginLeft={10} icon="arrow-right" />
      </Button>
      <Pane marginTop={15}>
        <ErrorMessage error={error} />
      </Pane>
      {success && (
        <Pane {...sucessCard}>
          <Icon icon="tick-circle" color="success" marginRight={10} />
          <Text size={500} color="#47B881" fontWeight={500} fontSize="14px">
            Link sent. Please check your email.
          </Text>
        </Pane>
      )}
    </Pane>
    {handleToggleClick && (
      <Pane paddingX={20} paddingY={15}>
        <Pane alignItems="center" marginBottom={1}>
          <Text width="100%" color="muted" textAlign="center">
            {bottomText}
          </Text>
        </Pane>
        <Pane display="flex" alignItems="center">
          <Text
            onClick={handleToggleClick}
            color={buttonColor}
            size={400}
            paddingBottom="1px"
            borderBottom={`2px solid ${buttonColor}`}
            cursor="pointer"
            className="hover"
          >
            {bottomLinkText}
          </Text>
        </Pane>
      </Pane>
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
