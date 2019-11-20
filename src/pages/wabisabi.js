import React from 'react';
// import { Link } from 'gatsby'

import Layout from '../components/layout';
import Footer from '../components/Footer';
import hero from '../images/wabi-sabi.png';
import wabisabi from '../images/wabisabi/wabisabi.png';

import Topbar from '../components/Topbar';

const SecondPage = () => (
  <Layout>
    <Topbar />

    <div id="wrapper">
      <section id="pintro" className="wrapper style1 fullscreen hero">
        <section>
          <div className="hero-img">
            <a href="/#" className="project" alt="image">
              <img src={hero} alt="" data-position="center center" />
            </a>
          </div>
          <div className="hero-content">
            <div className="inner">
              <sup>Product Illustration | Design | Layout </sup>
              <h1>Wabi Sabi</h1>
              <p>
                True Wireless Earphones
              </p>
            </div>
          </div>
        </section>
        <div class="arrow-down">
        </div>
      </section>
      <section id="main" className="wrapper">
        <div className="inner">
          {/* wabisabi */}
          <section id="flyer" className="wrapper style1 fade-up">
            <div className="inner">
              <h1>Amazon Product Ads</h1>
              <div className="split style1">
                <section>
                  <div className="fields">
                    <div className="field">
                      <h2>Overview</h2>
                      <p>
                        Wabi Sabi wanted to sell True Wireless Headphones on Amazon and wanted to seperate themselves from the competition with custom graphics that highlighted certain features.
                      </p>
                    </div>
                  </div>
                </section>
                <section>
                  <ul className="contact">
                    <li><h3>Deliverables</h3></li>
                    <li>
                      A4 Flyer
                    </li>

                    <li>
                      <h3>Rolls</h3>
                      <p>design, layout, production</p>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </section>
          <section className="wrapper style3 fade-up">
            <div className="inner">
              <span className="image fit">
                <img src={wabisabi} alt="" />
              </span>
              <h2>Design Solution</h2>
              <p>I decided to create product illustrations after receviing product shots that weren't shot with correct lighting. This gave the images a more professional quality. Knowing that amazon buyers often compare products it was important to make it visually appealling and quick to understand. The color orange was used to appeal to a more youthful active audience and to match with the color of the manual included in the box. I used icons for viewers to quickly scan the highlighted products benefits. Some photo compositing was needed to create examples of people using the product.</p>
              <ul>
                <li>Create product illustrations.</li>
                <li>Make the product appeal to an active audience.</li>
              </ul>
            </div>
          </section>
          <br></br>

        </div>
      </section>
    </div>

    <Footer />
  </Layout >
);

export default SecondPage;
