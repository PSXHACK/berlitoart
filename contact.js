import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mvonwdej");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <label htmlFor="name">
        Your Name
      </label>
      <input
        id="name"
        type="name" 
        name="name"
      />
      <label htmlFor="art">
        pick art
      </label>
      <input
        id="section"
        type="Name Painting" 
        name="Name Painting"
      />
      <label htmlFor="number">
        Your Phone Number
      </label>
      <input
        id="number"
        type="number" 
        name="number"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;