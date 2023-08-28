import styled from 'styled-components';
import { dark } from '../../styles/theme.styled';
import { Field } from 'formik';


export const TitleHelp = styled.div`
  color: ${dark.colors.textColorModal};
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${dark.colors.backgroundColorModal};
`;

export const FormField = styled.div`
  margin-bottom: 24px;
  color: ${dark.colors.textColorModal};
`;

export const InputField = styled(Field)`
  width: 100%;
  padding: 14px 18px;
  background: inherit;
  border-radius: 8px;
  border: 1px solid #BEDBB0;
  outline: none;
  color: #BEDBB0;
  opacity: 0.5;

  &::placeholder {
    color:#BEDBB0;
    font-size: 14px;
    font-weight: 400;
    opacity: 0.5;
  }

  &:hover,
  &:focus {
  opacity: 1;
  &::placeholder {
      opacity: 1;
    }
  }
`;
export const SendButton = styled.button`
  display: flex;
  width: 100%;
  padding: 14px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  background: #bedbb0;
  transition: background-color 250ms linear;
  font-family: Poppins;
  font-size: 14px;
  margin-top: 24px;
  font-weight: 500;
  letter-spacing: -0.28px;
  &:hover,
  &:focus {
    background: #9dc888;
  }
 `;

export const BoardText = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
  color: #ffffff;
`;
export const RadioField = styled(Field)`
  position: fixed;
  opacity: 0;
  pointer-events: none;

  &:hover ~ .background-label,
  &:checked ~ .background-label {
    outline: 1px solid var(--createBoardInputBorderFocus);
  }

  &:hover ~ .icon-label,
  &:checked ~ .icon-label {
    --color1: var(--createBoardButtonIconFill);
  }
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(8 * 32px);
  margin-bottom: 24px;
`;

export const BackgroundIcon = styled.img`
  width: 28px;
  height: 28px;
`;
export const Textarea = styled(Field)`
  height: 120px;
  resize: none;
  width: 100%;
  padding: 14px 18px;
  background: inherit;
  border-radius: 8px;
  border: 1px solid #BEDBB0;
  outline: none;
  color: #BEDBB0;
  opacity: 0.5;

  &::placeholder {
    color:#BEDBB0;
    font-size: 14px;
    font-weight: 400;
    opacity: 0.5;
  }

  &:hover,
  &:focus {
  opacity: 1;
  &::placeholder {
      opacity: 1;
    }
  }
`;

export const RadioLabel = styled.label`
  
  
  border-radius: 6px;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  margin-right: 8px;
  cursor: pointer;

  svg {
    fill: #151515;

  }
`;
export const ImageContainer = styled.div`
  margin-right: 4px;
  margin-bottom: 4px;
  cursor: pointer;
`;

export const Svg = styled.svg`
  fill: #151515;
  stroke: rgba(255, 255, 255, 0.5);

  width: 18px;
  height: 18px;
  cursor: pointer;
 &:hover {
    stroke: rgba(255, 255, 255, 1); 
  }
`;