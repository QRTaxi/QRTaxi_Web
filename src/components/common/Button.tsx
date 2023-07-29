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
  padding?: string;
  fontSize?: string;
  disabled?: boolean;
}

const StyledButton = styled.button<IButton>`
  width: ${({ width }) => width};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  text-align: center;
  :disabled {
    background-color: ${theme.colors.QT_Color_Orange.heavy};
    color: ${theme.colors.QT_Color_Gray_2};
    cursor: not-allowed;
  }
`;

const Button = ({
  width = '200px',
  backgroundColor = theme.colors.QT_Color_Orange.primary,
  color = theme.colors.QT_Color_White,
  fontWeight = 600,
  borderRadius = '4px',
  text,
  onClick,
  padding = '10px 12px',
  fontSize,
  disabled,
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
      padding={padding}
      fontSize={fontSize}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
