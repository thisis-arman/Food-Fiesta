import React from "react";
import useTitle from "../Hooks/useTitile";

const Contact = () => {
  useTitle('Contact')
  return (
    <div className="">
      <div className="hero min-h-screen bg-base-200 my-6 md:px-20 p-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/K6L8n5C/wepik-export-20230501202714.png"
            className="max-w-sm rounded-lg w-64 md:w-full shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Get in Touch!</h1>
            <p className="py-2">We'd love to hear from you</p>
            <p className="py-14">
              If you have any questions, comments, or suggestions, please feel
              free to get in touch with us. We welcome your feedback and are
              always looking for ways to improve our website.
              <br /> <br />
              You can reach us by filling out the contact form below or sending
              an email to our support team at support@foodfiesta.com. We strive
              to respond to all inquiries within 24 hours.
              <br /> <br />
              
            </p>
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Leave a message</h1>
              <p className="mb-5">
              <input type="text" placeholder="Name" className="input input-bordered input-accent w-full max-w-xs text-black my-4" />

              <input type="email" placeholder="Email" className="input input-bordered input-accent w-full max-w-xs  text-black " />
            
              <textarea name="textarea" placeholder="message" id="" cols="25" rows="20" className="input input-bordered input-accent w-full max-w-xs  text-black my-4"></textarea>
              </p>
              <button className="btn btn-success px-8">Submit</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
