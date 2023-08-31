import Navbar from 'components/layout/Navbar';
import React from 'react';

export default function Details() {
  return (
    <>
    < Navbar />
    <div className="addProduct">
      <main className="main">
        <div className="card">
          <div className="card__title">
            <h3 className="h3">Back to all Plants</h3>
            <div className="icon">
              <a href="#">
                <i className="fa fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="card__body">
            <div className="half">
              <div className="featured_text">
                <h1>Classic Peace Lily</h1>
                <p className="sub">Popular House Plant</p>
                <p className="price">$18</p>
              </div>
              <div className="description">
                <p className="des">
                  Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbon and butterfly pick.
                </p>
              </div>
            </div>
            <div className="half image">
              <img src="https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg" alt="Plant" />
            </div>
          </div>
          <div className="card__footer">
            <div className="recommend">
              <p>Recommended</p>
              <h3>Golden Fox</h3>
            </div>
            <div className="action">
              <button className="bo">Add to Cart</button>
              <button className="boo">Wishlist</button>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
