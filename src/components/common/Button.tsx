import styled from 'styled-components';
import { theme } from 'src/styles/theme';

interface IButton {
  width?: string;
  backgroundColor?: string;
  color?: string;
  fontWeight?: string | number;
  borderRadius?: string;
  text: string;
  onClick?: () => void;
  marginTop?: string;
  padding?: string;
  fontSize?: string;
  disabled?: boolean;
  border?: string | number;
}

const StyledButton = styled.button<IButton>`
  width: ${({ width }) => width};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  border-radius: ${({ borderRadius }) => borderRadius};
  margin-top: ${({ marginTop }) => marginTop};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  text-align: center;
  :disabled {
    background-color: ${theme.colors.QT_Color_Orange.heavy};
    color: ${theme.colors.QT_Color_Gray_2};
    cursor: not-allowed;
  }
  border: ${({ border }) => border};
`;

const Button = ({
  width = '100%',
  backgroundColor = theme.colors.QT_Color_Orange.primary,
  color = theme.colors.QT_Color_White,
  fontWeight = 600,
  borderRadius = '4px',
  text,
  onClick,
  marginTop = '10px',
  padding = '10px 12px',
  fontSize,
  disabled,
  border = '0px',
}: IButton) => {
  return (
    <StyledButton
      width={width}
      backgroundColor={backgroundColor}
      color={color}
      fontWeight={fontWeight}
      borderRadius={borderRadius}
      text={text}
      onClick={onClick}
      marginTop={marginTop}
      padding={padding}
      fontSize={fontSize}
      disabled={disabled}
      border={border}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
