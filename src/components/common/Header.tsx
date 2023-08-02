import styled from 'styled-components';
import { theme } from 'src/styles/theme';

interface IHeader {
  width?: string;
  backgroundColor?: string;
  color?: string;
  fontWeight?: string | number;
  text?: string;
  marginBottom?: string;
  padding?: string;
  fontSize?: string;
  disabled?: boolean;
  border?: string | number;
}

const StyledHeader = styled.button<IHeader>`
  width: ${({ width }) => width};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  padding: ${({ padding }) => padding};
  text: ${({ text }) => text};
  font-size: ${({ fontSize }) => fontSize};
  text-align: center;
  :disabled {
    background-color: ${theme.colors.QT_Color_Orange.heavy};
    color: ${theme.colors.QT_Color_Gray_2};
    cursor: not-allowed;
  }
  border: ${({ border }) => border};
`;

const Header = ({
  width = '100%',
  backgroundColor = theme.colors.QT_Color_White,
  color = theme.colors.QT_Color_Gray_Black,
  fontWeight = 600,
  text = '큐택 호출하기',
  marginBottom = '20px',
  padding = '10px 20px',
  fontSize,
  disabled,
  border = '0px',
}: IHeader) => {
  return (
    <StyledHeader
      width={width}
      backgroundColor={backgroundColor}
      color={color}
      fontWeight={fontWeight}
      text={text}
      marginBottom={marginBottom}
      padding={padding}
      fontSize={fontSize}
      disabled={disabled}
      border={border}
    >
      {text}
    </StyledHeader>
  );
};

export default Header;
