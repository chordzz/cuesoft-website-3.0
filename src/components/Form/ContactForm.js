import React from "react";
import { Form, Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { RenderField } from "../Basic";

function ContactForm({ darkMode }) {
  return (
    <main className="main-contact">
      <Form className="contact-form">
        <Field
          component={RenderField}
          id="contact-form-name"
          type="text"
          placeholder="What is your name?"
          name="name"
          required
          style={{ borderTop: "1px solid transparent" }}
        />
        <Field
          component={RenderField}
          id="contact-form-email"
          type="email"
          placeholder="What is your e-mail?"
          name="email"
          required
        />
      </Form>
      <Form>
        <Field
          component={RenderField}
          id="contact-form-phone"
          type="text"
          placeholder="Phone Number"
          name="phone"
          required
        />
        <Field
          component={RenderField}
          id="contact-form-company"
          type="text"
          placeholder="What company or organization do you work for?"
          name="company"
          required
        />
      </Form>
      <Form>
        <Field
          component={RenderField}
          id="contact-form-size"
          type="text"
          placeholder="company size"
          name="size"
          required
        />
        <Field
          component={RenderField}
          id="contact-form-inquiry"
          type="text"
          placeholder="What is your inquiry about?"
          name="inquiry"
          required
        />
      </Form>
      <Form style={{ marginBottom: "50px" }}>
        <Field
          component={RenderField}
          id="contact-form-about"
          type="text"
          name="about"
          placeholder="Tell us about your business and scope and project..."
          required
        />
      </Form>
      <Button
        type="submit"
        size="large"
        color={darkMode ? "yellow" : "red"}
        floated="right"
        className="contact-button"
      >
        <span style={{ color: darkMode ? "#000000" : "#ffffff" }}>Send</span>
      </Button>
    </main>
  );
}

ContactForm.propTypes = {
  darkMode: PropTypes.bool,
};

export default reduxForm({ form: "contact" })(ContactForm);
