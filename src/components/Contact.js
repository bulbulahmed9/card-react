import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-content">
        <Link className="button" to="/">
          Back
        </Link>
        <div className="form-box">
          <h2 id="text11">Contact</h2>
          <p id="text12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            vestibulum risus sit amet lectus condimentum, ac fermentum nibh
            ullamcorper magna.
          </p>
          <form id="form02" action>
            <div className="field">
              <label htmlFor="form02-name">Name</label>
              <input
                type="text"
                name="name"
                id="form02-name"
                placeholder
                maxLength={128}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="form02-email">Email</label>
              <input
                type="email"
                name="email"
                id="form02-email"
                placeholder
                maxLength={128}
                required
              />
            </div>
            <div className="field" style={{ display: "none" }}>
              <input
                type="text"
                name="link-urk"
                id="form02-link-urk"
                placeholder="Link Urk"
                maxLength={128}
                disabled
              />
            </div>
            <div className="field">
              <label htmlFor="form02-message">Message</label>
              <textarea
                name="message"
                id="form02-message"
                placeholder
                maxLength={16384}
                required
                defaultValue={""}
              />
            </div>
            <div className="actions">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
