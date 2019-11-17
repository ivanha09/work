import React from 'react';
// import { Link } from 'gatsby'

import Layout from '../components/layout';
import Footer from '../components/Footer';
import hero from '../images/better_code_review-sider.png';
import a4 from '../images/sider/sider-A4.png';
import whitepaper from '../images/sider/sider-whitepaper.png';
import logos from '../images/sider/sider-logos.png';

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
              <sup>Design | Layout </sup>
              <h1>Sider</h1>
              <p>
                A customizable linter tool.
              </p>
            </div>
          </div>
        </section>
        <a href="#overview">
          <div class="arrow-down">
          </div>
        </a>
      </section>
      <section id="main" className="wrapper">
        <div className="inner">
          <section id="overview" className="wrapper style1 fade-up">
            <div className="inner">
              <div className="split style1">
                <section>
                  <div className="fields">
                    <div className="field">
                      <h2>Overview</h2>
                      <p>
                        Sider is company that makes developer tools. Although they have known by developer community in Japan they don't have much reach outside and required marketing material for their online presense and for their booth at GitHub Universe.
                      </p>
                    </div>
                  </div>
                </section>
                <section>
                  <ul className="contact">
                    <li><h3>Deliverables</h3></li>
                    <li>
                      Flyer, whitepaper, modular logo system, social media banners, tutorial videos
                    </li>

                    <li>
                      <h3>Rolls</h3>
                      <p>ideation, design, layout, production, content creation, copywriting, video editing</p>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </section>
          <section className="wrapper style3 fade-up">
            <div className="inner">

              <h2>Design Solution</h2>
              <p>
                Clean design meant to appeal to developers.
            </p>
              <ul>
                <li>Create a unified look for Sider products</li>
                <li>Create awareness through education of products</li>
              </ul>
              <ul class="projects">
                <li>
                  <a href="#whitepaper" class="button">
                    whitepaper
                </a>
                </li>
                <li>
                  <a href="#logos" class="button">
                    logo system
                </a>
                </li>
                <li>
                  <a href="#flyer" class="button">
                    A4 flyer
                </a>
                </li>
                <li>
                  <a href="#video" class="button">
                    video
                </a>
                </li>
              </ul>
            </div>
            {/* <span className="image fit">
              <img src={gcwebsite} alt="" />
            </span> */}
          </section>
          <br></br>
          {/* whitepapes */}
          <section id="whitepaper" className="wrapper style1 fade-up">
            <div className="inner">
              <h1>Whitepaper</h1>
              <div className="split style1">
                <section>
                  <div className="fields">
                    <div className="field">
                      <h2>Overview</h2>
                      <p>
                        Sider created a white paper to educate potential corporate clients about the various methods of code review.
                      </p>
                    </div>
                  </div>
                </section>
                <section>
                  <ul className="contact">
                    <li><h3>Deliverables</h3></li>
                    <li>
                      Whitepaper PDF format
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
                <img src={whitepaper} alt="" />
              </span>
              <h2>Design Solution</h2>
              <ul>
                <li>Clean design that is easily viewable online and printed out.</li>
                <li>Create diagrams which help explain each method of code review.</li>
              </ul>
            </div>
          </section>
          <br></br>
          {/* logos */}
          <section id="logos" className="wrapper style1 fade-up">
            <div className="inner">
              <h1>Modular Logo System</h1>
              <div className="split style1">
                <section>
                  <div className="fields">
                    <div className="field">
                      <h2>Overview</h2>
                      <p>
                        Sider received interest about it's custom tools from conference attendees. So they wanted to promote the product further.
                      </p>
                    </div>
                  </div>
                </section>
                <section>
                  <ul className="contact">
                    <li><h3>Deliverables</h3></li>
                    <li>
                      modular logo system, GitHub social banners
                    </li>

                    <li>
                      <h3>Rolls</h3>
                      <p>design, layout</p>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </section>
          <section className="wrapper style3 fade-up">
            <div className="inner">

              <span className="image fit">
                <img src={logos} alt="" />
              </span>
              <h2>Design Solution</h2>
              <p>Create a modular system to make it more recognizable.</p>
              <ul>
                <li>Create a unified style for Sider products</li>
                <li>Have a visual look that could be used for promooting on social media.</li>
              </ul>
            </div>
          </section>
          <br></br>
          {/* flyer */}
          <section id="flyer" className="wrapper style1 fade-up">
            <div className="inner">
              <h1>A4 Flyer</h1>
              <div className="split style1">
                <section>
                  <div className="fields">
                    <div className="field">
                      <h2>Overview</h2>
                      <p>
                        Sider created a white paper to educate potential corporate clients about the various methods of code review.
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
                <img src={a4} alt="" />
              </span>
              <h2>Design Solution</h2>
              <ul>
                <li>Create a design that is consistent with the Sider brand.</li>
                <li>Breakdown the information into clear sections.</li>
                <li>Include an example of a custom rule for developers to more more easily understand Sider's benefits.</li>
              </ul>
            </div>
          </section>
          <br></br>
          {/* video tutorial */}
          <section id="video" className="wrapper style1 fade-up">
            <div className="inner">
              <h1>Explainer Video</h1>
              <div className="split style1">
                <section>
                  <div className="fields">
                    <div className="field">
                      <h2>Overview</h2>
                      <p>
                        Sider created a white paper to educate potential corporate clients about the various methods of code review.
                      </p>
                    </div>
                  </div>
                </section>
                <section>
                  <ul className="contact">
                    <li><h3>Deliverables</h3></li>
                    <li>
                      Explainer video
                    </li>

                    <li>
                      <h3>Rolls</h3>
                      <p>video editing, voice over</p>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </section>
          <section className="wrapper style3 fade-up">
            <div className="inner">
              <div className="stage">
                <iframe className="iframe" src="https://www.youtube.com/embed/jU4xQ1R0MIU" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <h2>Design Solution</h2>
              <ul>
                <li>Explain the benefits of sider as projects grow bigger.</li>
                <li>Include examples of a team using Sider for code review.</li>
                <li>Breakdown and explain custom rules.</li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </div>

    <Footer />
  </Layout >
);

export default SecondPage;
