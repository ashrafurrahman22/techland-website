import React, { useState } from "react";

const Blogs = () => {
  return (
    <div className="my-6 grid lg:grid-cols-3 sm:grid-cols-1">
      <div className=" text-center my-3">
        <label for="my-modal" class="btn modal-button">
          Question: 1
        </label>

        <input type="checkbox" id="my-modal" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">
              How will you improve the performance of a React Application?
            </h3>
            <p class="py-4 text-left">
            Five important ways to optimize the performance of a React application, including pre-optimization techniques. <hr className="my-5" /> These include:
            <ol className="list-decimal">
              <li>Keeping component state local where necessary</li>
              <li>Memoizing React components to prevent unnecessary re-renders</li>
              <li>Code-splitting in React using dynamic import()</li>
              <li>
Windowing or list virtualization in React</li>
              <li>
Lazy loading images in React </li>
            </ol> 
            </p>
            <div class="modal-action">
              <label for="my-modal" class="btn">
                Okay
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className=" text-center my-3">
        <label for="my-modal-1" class="btn modal-button">
          Question: 2
        </label>

        <input type="checkbox" id="my-modal-1" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">
              What are the different ways to manage a state in a React
              application?
            </h3>
            <p class="py-4 text-left">
            There are four main types of state you need to properly manage in your React apps:
            <ul className="list-disc">
              <li>Local State</li>
              <li>Global State</li>
              <li>Server State</li>
              <li>URL state</li>
            </ul>
            </p>
            <div class="modal-action">
              <label for="my-modal-1" class="btn">
                Okay
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center my-3">
        <label for="my-modal-2" class="btn modal-button">
          Question: 3
        </label>

        <input type="checkbox" id="my-modal-2" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">
              How does prototypical inheritance work?
            </h3>
            <p class="py-4 text-justify"> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
            <div class="modal-action">
              <label for="my-modal-2" class="btn">
                Okay
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center my-3">
        <label for="my-modal-3" class="btn modal-button">
          Question: 4
        </label>

        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">
              Why you do not set the state directly in React. For example, if
              you have const [products, setProducts] = useState([]). Why you do
              not set products = [...] instead, you use the setProducts
            </h3>
            <p class="py-4 text-left">One should never update the state directly because of the following reasons:
            <hr className="my-4" />
            <ol className="list-decimal">
                <li>If you update it directly, calling the setState() afterward may just replace the update you made.</li>
                <li>When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</li>
                <li>You will lose control of the state across all components.</li>
            </ol>
            
            </p>
            <div class="modal-action">
              <label for="my-modal-3" class="btn">
                Okay
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center my-3">
        <label for="my-modal-4" class="btn modal-button">
          Question: 5
        </label>

        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">
              You have an array of products. Each product has a name, price,
              description, etc. How will you implement a search to find products
              by name?
            </h3>
            <p class="py-4 text-left">There are different methods in JavaScript that you can use to
                search for an item in an array.These methods are:
                <ul className="list-disc">
                  <li>Filter</li>
                  <li>Find</li>
                  <li>Includes</li>
                  <li>Index of</li>
                </ul></p>
            <div class="modal-action">
              <label for="my-modal-4" class="btn">
                Okay
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center my-3">
        <label for="my-modal-5" class="btn modal-button">
          Question: 6
        </label>

        <input type="checkbox" id="my-modal-5" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">
              What is a unit test? Why should write unit tests?
            </h3>
            <p class="py-4">
              A unit test is a way of testing a unit - the smallest piece of
              code that can be logically isolated in a system. In most
              programming languages, that is a function, a subroutine, a method
              or property.
              <hr className="my-6" />
              Unit testing allows software developers to actually think through
              the design of the software and what has to be done before they
              write the code. This can help them to stay focused and can also
              help them to create much better designs.
            </p>
            <div class="modal-action">
              <label for="my-modal-5" class="btn">
                Okay
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
