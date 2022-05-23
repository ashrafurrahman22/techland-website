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
        <h3 class="font-bold text-lg">How will you improve the performance of a React Application?</h3>
          <p class="py-4">
            aalskfdjlaksj
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
        <h3 class="font-bold text-lg">What are the different ways to manage a state in a React application?</h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
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
        <h3 class="font-bold text-lg">How does prototypical inheritance work?</h3>
          <p class="py-4">
           hello baby
          </p>
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
        <h3 class="font-bold text-lg">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
          <p class="py-4">
           hello baby
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
        <h3 class="font-bold text-lg">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
          <p class="py-4">
           sunny sunny
          </p>
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
        <h3 class="font-bold text-lg">What is a unit test? Why should write unit tests?</h3>
          <p class="py-4">
           hello baby hadudu
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
