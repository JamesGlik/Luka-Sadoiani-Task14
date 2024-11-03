import React from 'react';
import huddleLogo from './assets/color_logo_transparent.svg';
import tablePhoto from './assets/Group 41.svg';
import communityLogo from './assets/Group 19.png';
import messageLogo from './assets/color_logo_transparent-02.svg';
import groupPhoto from './assets/grow_together.png';
import groupPhoto2 from './assets/grow_together2.png';
import groupPhoto3 from './assets/grow_together3.png';
import facebookLogo from './assets/post-facebook.svg';
import instagramLogo from './assets/glyph-logo_May2016.png';
import twitterLogo from './assets/post-twitter.svg';
import phonoLogo from './assets/Group 21.png';
import gmailLogo from './assets/Group 12.png';
import huddleLogo2 from './assets/huddle_logo.svg';
import './App.css';

const App = () => {
  return (
    <>
      <header className="header">
        <img src={huddleLogo} alt="Huddle logo" className="logo" />
        <p className="try-free">Try It Free</p>
      </header>
      <section className="section-content">
        <h1 className="section-title">Build The Community Your Fans Will Love</h1>
        <p className="section-paragraph">
          Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
          Create connections with your users as you engage in genuine discussion.
        </p>
        <button className="section-button">Get Started For Free</button>
      </section>
      <img src={tablePhoto} alt="Table Image" className="table" />
      <section>
        <div className="numbers">
          <div className="community">
            <img src={communityLogo} alt="Community logo" className="community-logo" />
            <h1 className="first-number">1.4K+</h1>
            <h3 className="number-h3">Communities Formed</h3>
          </div>
          <div className="message">
            <img src={messageLogo} alt="Message logo" className="message-logo" />
            <h1 className="second-number">2.7m+</h1>
            <h3 className="message-h3">Messages Sent</h3>
          </div>
        </div>
      </section>
      <section>
        <div className="grow-together-container">
          <div className="grow-together-text">
            <h1>Grow Together</h1>
            <p>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
          </div>
          <div className="grow-together-image">
            <img src={groupPhoto} alt="Group Photo" className="group-photo" />
          </div>
        </div>
      </section>
      <section>
        <div className="grow-together-container">
          <div className="grow-together-image">
            <img src={groupPhoto2} alt="Group Photo" className="group-photo" />
          </div>
          <div className="grow-together-text">
            <h1>Flowing Conversations</h1>
            <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
          </div>
        </div>
      </section>
      <section>
        <div className="grow-together-container">
          <div className="grow-together-text">
            <h1>Your Users</h1>
            <p>It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
          </div>
          <div className="grow-together-image">
            <img src={groupPhoto3} alt="Group Photo" className="group-photo" />
          </div>
        </div>
      </section>
      <section>
        <div className="build-community">
          <h1>Ready To Build Your Community?</h1>
          <button className="section-button">Get Started For Free</button>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-left">
          <img src={huddleLogo2} alt="Huddle Logo" className="footer-huddle-logo" />
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit
            lacinia vestibulum a, ultrices quis sem.
          </p>
          <div className="contact-info">
            <img src={phonoLogo} alt="Phone Icon" className="contact-icon" />
            <span>Phone: +1-543-123-4567</span>
          </div>
          <div className="contact-info">
            <img src={gmailLogo} alt="Email Icon" className="contact-icon" />
            <span>example@huddle.com</span>
          </div>
          <div className="social-icons">
            <img src={facebookLogo} alt="Facebook" className="social-icon" />
            <img src={instagramLogo} alt="Instagram" className="social-icon" />
            <img src={twitterLogo} alt="Twitter" className="social-icon" />
          </div>
        </div>
        <div className="footer-right">
          <h3 className="newsletter-title">NEWSLETTER</h3>
          <p className="newsletter-description">
            To receive tips on how to grow your community, sign up to our weekly newsletter.
            We'll never send you spam or pass on your email address.
          </p>
          <div className="newsletter-signup">
            <input type="text" placeholder="" className="email-input" />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;