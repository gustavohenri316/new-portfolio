import styled from "styled-components";

export const FormStyle = styled.form`
width: 100%;
.form-group {
  width: 100%;
  margin-bottom: 2rem;
}
label {
  font-size: 1.8rem;
}
input,
textarea {
  width: 100%;
  font-size: 2rem;
  padding: 1.2rem;
  color: var(--gray-1);
  background-color: var(--deep-dark);
  outline: none;
  border: none;
  border-radius: 8px;
  margin-top: 1rem;
}
textarea {
  min-height: 250px;
  resize: vertical;
}
button[type='submit'] {
  background-color: var(--gray-1);
  color: var(--black);
  font-size: 2rem;
  display: inline-block;
  outline: none;
  border: none;
  padding: 1rem 4rem;
  border-radius: 8px;
  cursor: pointer;
}
button:disabled {
  background-color: var(--gray-1);
  color: #8B0000;
  font-size: 2rem;
  display: inline-block;
  outline: none;
  border: none;
  padding: 1rem 4rem;
  border-radius: 8px;
  cursor: not-allowed;

}
`;