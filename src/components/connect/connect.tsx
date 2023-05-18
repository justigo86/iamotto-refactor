import React, { useState, ReactElement } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

const Connect = (): ReactElement => {
  const [response, setResponse] = useState(false);
  AOS.init();

  // const uploadFileFunc = () => {
  //     const uploadButton = document.getElementById('uploadButton');
  // }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_px31op9",
        "template_x7wp35u",
        e.currentTarget,
        "user_fM4K2MOoQW2OhoHAdkNAO",
      )
      .then(
        result => {
          console.log(result.text);
          setResponse(true);
        },
        error => {
          console.log(error.text);
        },
      );
    e.currentTarget.reset();
  };

  const clearResponse = () => {
    if (response === true) {
      setResponse(false);
    }
  };

  return (
    <div className="connect-container" id="connect">
      <h1 className="connect-title" data-aos="fade-right">
        Connect
      </h1>
      <div className="connect-form-container" data-aos="fade-left">
        <form
          className="connect-form"
          action=""
          method="POST"
          encType="multipare/form-data"
          onSubmit={sendEmail}
          onClick={clearResponse}
        >
          <div className="connect-form section">
            <label className="connect-form-label" htmlFor="name">
              Name:
            </label>
            <input
              className="connect-form-input"
              name="name"
              type="text"
              id="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="connect-form section">
            <label className="connect-form-label" htmlFor="email">
              Email:
            </label>
            <input
              className="connect-form-input"
              name="email"
              type="email"
              id="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="connect-form section">
            <label className="connect-form-label" htmlFor="comments">
              Comments/Message:
            </label>
            <textarea
              className="connect-comments"
              name="comments"
              id="comments"
              placeholder="Comments welcomed!"
            ></textarea>
          </div>
          <button
            className="connect-submit-button"
            type="submit"
            id="submit"
            value="Send"
          >
            Submit
          </button>
          <p
            className="submit-response"
            // opacity={response}
            // transform={response}
          >
            Thank you for your submission.
          </p>
          <p
            className="submit-response"
            // opacity={response}
            // transform={response}
          >
            By the way, your smile is radiant!
          </p>
        </form>
      </div>
    </div>
  );
};

export default Connect;
