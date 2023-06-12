import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aambloi",
        "template_6hza0ec",
        form.current,
        "U3AOv3Fcy53CHSjkj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready to</span>
          <span> Level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stroke-text"> with us</span>
        </div>
      </div>
      <div className="right-j">
        <form action="" className="email-container" ref={form} onSubmit={sendEmail}>
          <input
            type="eamil"
            name="user-email"
            placeholder="Enter your Email address"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
