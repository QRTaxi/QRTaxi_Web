//호출 취소(success page), 신고하기(boarding) 등에 사용할 onClick 텍스트

import styled from 'styled-components';
import { theme } from 'src/styles/theme';

interface ITextButton {
  width?: string;
  backgroundColor?: string;
  color?: string;
  fontWeight?: string | number;
  text?: string;
  padding?: string;
  fontSize?: string;
  disabled?: boolean;
  border?: string | number;
  onClick?: () => void;
}

const StyledHeader = styled.button<ITextButton>`
  width: ${({ width }) => width};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
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

const TextButton = ({
  width = '100%',
  backgroundColor = theme.colors.QT_Color_White,
  color = theme.colors.QT_Color_Gray_3,
  fontWeight = 600,
  text = 'TextButton',
  padding = '0px 10px',
  fontSize,
  disabled,
  border = '0px',
  onClick,
}: ITextButton) => {
  return (
    <StyledHeader
      width={width}
      backgroundColor={backgroundColor}
      color={color}
      fontWeight={fontWeight}
      text={text}
      padding={padding}
      fontSize={fontSize}
      disabled={disabled}
      border={border}
      onClick={onClick}
    >
      {text}
    </StyledHeader>
  );
};

export default TextButton;
