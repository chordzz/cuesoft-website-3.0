import React from "react";
import { Form, Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { RenderField } from "../Basic";

function ContactForm({ darkMode }) {
  return (
    <main>
      <Form
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginBottom: "30px",
        }}
      >
        <Field
          component={RenderField}
          id="contact-form-name"
          type="text"
          placeholder="What is your name?"
          name="name"
          required
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
      <Form
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginBottom: "30px",
        }}
      >
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
      <Form
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginBottom: "30px",
        }}
      >
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
        style={{ borderRadius: "30px", marginRight: "20px", width: "150px" }}
        floated="right"
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
