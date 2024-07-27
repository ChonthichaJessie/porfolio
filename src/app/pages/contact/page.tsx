"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import InitialIcon from "../../components/InitialIcon";
import SubIcons from "../../components/SubIcons";

// Interface for form state
interface FormState {
  name: string;
  email: string;
  message: string;
}

// Interface for form errors
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = (): FormErrors => {
    let tempErrors: FormErrors = {};
    if (!form.name) tempErrors.name = "Name is required.";
    if (!form.email) tempErrors.email = "Email is required.";
    if (!form.message) tempErrors.message = "Message is required.";
    return tempErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const tempErrors = validate();
    if (Object.keys(tempErrors).length === 0) {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "", // Service ID from environment variable with default value
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "", // Template ID from environment variable
          form as unknown as Record<string, unknown>,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "" // User ID from environment variable
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Message sent successfully!");
            setSuccessMessage("Message sent successfully!");
            setForm({ name: "", email: "", message: "" });
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    } else {
      setErrors(tempErrors);
    }
  };

  return (
    <Wrapper>
      <FormWrapper>
        <FormTitle>Contact Me</FormTitle>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <Error>{errors.name}</Error>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <Error>{errors.email}</Error>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && <Error>{errors.message}</Error>}
          </FormGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
      </FormWrapper>
      <Footer>
        <InitialIconWrapper>
          <InitialIcon />
        </InitialIconWrapper>

        <SubIconsWrapper>
          <SubIcons />
        </SubIconsWrapper>
      </Footer>
    </Wrapper>
  );
};

export default ContactPage;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const SubIconsWrapper = styled.div`
  position: fixed;
  bottom: 2%;
  right: 5%;
`;
const InitialIconWrapper = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  min-height: 100vh;
`;

const FormWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-family: "Courier New", Courier, monospace;
  color: #333333;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-family: "Courier New", Courier, monospace;
  color: #333333;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  font-family: "Courier New", Courier, monospace;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  font-family: "Courier New", Courier, monospace;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 100px;
`;

const Error = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #f6c3cc;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-family: "Courier New", Courier, monospace;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ee74b2;
  }
`;
