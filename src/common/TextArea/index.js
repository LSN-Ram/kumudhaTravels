import { StyledTextArea, StyledContainer, Label } from "./styles";

const TextArea = ({ name, placeholder, onChange, t }) => (
  <StyledContainer>
    <Label htmlFor={name}>{t(name)}</Label>
    <StyledTextArea
      placeholder={t(placeholder)}
      id={name}
      name={name}
      onChange={onChange}
    />
  </StyledContainer>
);

export default TextArea;
