import React from 'react'
import styled from 'styled-components'
import { black, purple } from '../styles/colors'

const Form = () => (
  <FormContainer action="https://getform.io/f/952504c6-82a3-4f35-871c-2e0a3d37202e" method="POST">
    <LabelGroup>
      <label htmlFor="name">Name</label>
      <TextInput type="text" id="name" name="name" required />
    </LabelGroup>
    <LabelGroup>
      <label htmlFor="email">Email</label>
      <TextInput type="email" name="email" id="email" required />
    </LabelGroup>
    <LabelGroup>
      <label htmlFor="phone">Phone (optional)</label>
      <TextInput type="number" inputmode="numeric" name="phone" id="phone" />
    </LabelGroup>
    <LabelGroup>
      <label htmlFor="message">Message</label>
      <TextArea id="message" name="message" required />
    </LabelGroup>
    <ButtonContainer>
      <Button type="submit">Send</Button>
    </ButtonContainer>
  </FormContainer>
)

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  min-width: 90%;

  @media screen and (max-width: 768px) {
    background: none;
    min-width: 98%;
  }
`

const LabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`

const TextInput = styled.input`
  padding: 0.5rem;
  border: 1px solid ${black};
  border-radius: 4px;
`

const TextArea = styled.textarea`
  border-radius: 4px;
  padding-bottom: 5rem;
  resize: none;
`

const Button = styled.button`
  cursor: pointer;
  color: #fff;
  font-family: 'Permanent Marker', sans-serif;
  font-size: 1.5em;
  margin-top: 1.5rem;
  min-width: 8rem;
  padding: 1rem;
  background: ${purple};
  border: 0;
  resize: none;
  transition: background 0.4s ease;

  &:hover {
    background: ${black};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export default Form
