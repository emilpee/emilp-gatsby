import React from 'react'
import styled from 'styled-components'
import { red, black } from '../styles/colors'

const Form = () => (
    <FormContainer action="https://getform.io/f/952504c6-82a3-4f35-871c-2e0a3d37202e" method="POST">
        <LabelGroup>
            <label for="name">Name</label>
            <TextInput type="text" name="name" />
        </LabelGroup>
        <LabelGroup>
            <label for="email">Email</label>
            <TextInput type="email" name="email" />
        </LabelGroup>
        <LabelGroup>
            <label for="message">Message</label>
            <TextArea name="message" />
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
    padding: .5rem;
    border: 1px solid #222;
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
    font-family: "Permanent Marker", sans-serif;
    font-size: 1.5em;
    margin-top: 1.5rem;
    min-width: 8rem;
    padding: 1rem;
    background: ${red};
    border: 0;
    resize: none;
    transition: background .4s ease;

    &:hover {
        background: ${black};
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export default Form