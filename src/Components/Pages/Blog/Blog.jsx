import React, { useRef } from "react";
import Pdf from 'react-to-pdf';
import "./Blog.css";

const Blog = () => {
  const ref =useRef();

  return (

    <div>
      <Pdf targetRef={ref} filename="Blog.pdf">
				{({ toPdf }) => (
					<button onClick={toPdf} className="btn btn-success">
						Get Your Copy
					</button>
				)}
			</Pdf>
			<div ref={ref}>{/* Your UI goes here */}
      <div className="py-10 p-6 md:px-20">
        <div className="">
          <div className="">
            <h1 className="text-4xl font-bold">
              Difference between controlled and uncontrolled Components?
            </h1>
            <p className="py-6">
              Uncontrolled components are form elements like input, textarea,
              and select that maintain their own internal state. This means that
              when the user types something into an input, React doesn't
              immediately update the component's state. Instead, the DOM
              element's state is updated, and you need to use a ref to access
              the current value of the DOM element. <br />
              <br /> Controlled components, on the other hand, are form elements
              that are controlled by React. This means that the component's
              state is updated whenever the user types something in the input
              field, and the value of the input is always set by the component's
              state.
              <br />
              <br /> In other words, the state of the component and the value of
              the input are always in sync. To make a component controlled, you
              need to add an onChange event handler to the form element and
              update the component's state in response to the event. This allows
              you to keep track of the value of the form element and respond to
              changes in real time.
            </p>
          </div>
        </div>
      </div>
      <div className="py-5 bg-base-200 p-6 md:px-20">
        <div className="">
          <div className="">
            <h1 className="text-4xl font-bold">
              How to Validate React Props using PropsTypes?
            </h1>
            <p className="py-6">
              PropTypes is a type checking library that is built into React. It
              allows you to validate the types of props that are passed to your
              React components, helping you catch errors and bugs early in the
              development process.
              <br />
              <br /> Using PropTypes, you can specify the expected type of each
              prop for a component. If a prop is passed that does not match the
              expected type, React will log a warning in the console, alerting
              you to the problem.
              <br />
              <br />
              PropTypes is a type checking library that is built into React. It
              allows you to validate the types of props that are passed to your
              React components, helping you catch errors and bugs early in the
              development process.
              <br />
              <br />
              This can be especially helpful when working on larger projects
              with many components and props, as it can help you catch errors
              before they cause more serious issues.
            </p>
          </div>
        </div>
      </div>
      <div className=" py-5 p-6 md:px-20">
        <div className="">
          <div className="">
            <h1 className="text-4xl font-bold">
              Difference Between NodeJS and Express JS?
            </h1>
            <p className="py-6 p-6">
              Node.js is a JavaScript runtime environment that allows developers
              to run JavaScript code outside of a browser. With Node.js,
              developers can build server-side applications using JavaScript.
              Node.js provides a range of built-in modules that allow developers
              to perform tasks such as file system access, networking, and more.
              <br />
              <br />
              Express.js is a web application framework that is built on top of
              Node.js. It provides a set of tools and features that make it
              easier to build web applications. Express.js provides features
              such as routing, middleware, and templates that allow developers
              to quickly and easily create robust and scalable web applications.
              <br />
              <br /> Node.js provides a runtime environment for JavaScript,
              while Express.js provides a framework for building web
              applications on top of Node.js.
            </p>
          </div>
        </div>
      </div>
      <div className="py-5 bg-base-300 mb-4 md:px-20 p-6">
        <div className="">
          <div className="">
            <h1 className="text-4xl font-bold">
              What is Custom Hook ? and Why Will You Create Custom Hook??
            </h1>
            <p className="py-6">
              Custom hook is a reusable function that encapsulates certain
              behavior and logic and can be shared across multiple components.
              Custom hooks allow developers to create their own hooks, providing
              a way to abstract complex logic and make it easy to reuse across
              components.
              <br /> <br />
              Custom hooks can be useful in many scenarios, such as: Reusing
              common code across multiple components: If you find yourself
              repeating the same code across multiple components, you can create
              a custom hook to encapsulate that logic and reuse it wherever you
              need it.
              <br /> <br />
              Separating concerns: If a component has too many responsibilities,
              you can extract some of that logic into a custom hook, making the
              component more focused and easier to maintain.
              <br /> <br />
              Testing: Custom hooks can be tested independently of components,
              which can make it easier to test and debug your code.
              <br /> <br />
              Code organization: By using custom hooks, you can keep your code
              organized and easier to understand.
              <br /> <br />
              To create a custom hook in React, you simply define a function
              that uses built-in React hooks, such as useState or useEffect, and
              returns an object or value that can be used by other components..
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Blog;
