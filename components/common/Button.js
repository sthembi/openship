import { Heading, Pane, Spinner } from 'evergreen-ui';

const intentCSS = arg => {
  switch (arg) {
    case 'none':
      return { color: '#234361', background: '#F5F6F7' };
    case 'primary':
      return { color: '#1070ca', background: '#ddebf7' };
    case 'success':
      return { color: '#00783e', background: '#d4eee2' };
    case 'warning':
      return { color: 'rgb(126, 101, 20)', background: 'rgb(251, 230, 162);' };
    case 'danger':
      return { color: '#bf0e08', background: '#fae2e2' };
    default:
      return null;
  }
};

function Button({
  background,
  width,
  onClick,
  padding,
  marginRight,
  borderRadius,
  marginLeft,
  disabled,
  children,
  height,
  intent,
  appearance,
  boxShadow,
  hoverBg,
  isLoading,
  textColor,
  fontSize,
  marginX,
  marginY,
  paddingX,
  paddingY,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  zIndex,
}) {
  return (
    <>
      <Heading
        width={width}
        size={100}
        fontWeight={700}
        color={textColor}
        background={background}
        is="button"
        height={height}
        borderColor="transparent"
        transition="all 0.1s ease-in"
        outline="none"
        cursor="pointer"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        zIndex={zIndex}
        boxShadow={boxShadow}
        onClick={onClick}
        fontSize={fontSize}
        marginLeft={marginLeft}
        marginRight={marginRight}
        paddingX={paddingX}
        paddingY={paddingY}
        borderBottomLeftRadius={borderBottomLeftRadius || 3}
        borderBottomRightRadius={borderBottomRightRadius || 3}
        borderTopLeftRadius={borderTopLeftRadius || 3}
        borderTopRightRadius={borderTopRightRadius || 3}
        disabled={disabled || isLoading}
        className={`gen ${(disabled || isLoading) && 'disabled'}`}
        {...(intent ? intentCSS(intent) : { color: textColor, background })}
      >
        {isLoading && (
          <Spinner marginRight={6} size={Math.round(height / 1.5)} />
        )}
        {children}
        <style jsx global>{`
          .gen:active {
            border-color: transparent;
            border: 'none';
          }
          .gen:selected {
            opacity: 0.8;
            border-color: transparent;
            border: 'none';
          }
          .gen:focus {
            z-index: 2;
            outline: none;
            box-shadow: inset 0 0 2px rgba(67, 90, 111, 0.14),
              0 0 0 3px rgba(16, 112, 202, 0.14);
          }
          .gen:hover {
            opacity: 0.8;
            border: 'none';
            border-color: transparent;
            ${appearance === 'minimal' && `color: #fff;`}
            ${hoverBg && `background-color:${hoverBg}`}
          }
          .disabled {
            pointer-events: none;
            background-color: rgb(245, 246, 247);
            color: rgb(166, 177, 187);
          }
        `}</style>
      </Heading>
    </>
  );
}

export default Button;
