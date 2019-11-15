import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import profile from '../images/ivan.png';
import pic1 from '../images/goodcheck-card.png';
import pic2 from '../images/parcel-size-calc.png';
import pic3 from '../images/better_code_review-sider.png';
import pic4 from '../images/wabi-sabi.png';
import pic5 from '../images/afexa-card.png';
import Sidebar from '../components/Sidebar';
import Scroll from '../components/Scroll';

// import Topbar from '../components/Topbar';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faLightbulb, faGlobeAmericas, faBezierCurve, faCode, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="wrapper">
      <section id="intro" className="wrapper style1 fullscreen hero">
        <section>
          <div className="hero-img">
            <a href="/#" className="profile" alt="image">
              <img src={profile} alt="" data-position="center center" />
            </a>
          </div>
          <div className="hero-content">
            <div className="inner">
              <h1>Hi, I'm Ivan.</h1>
              <p>
                I'm a web and print designer.
              </p>
              <ul className="actions">
                <li>
                  <Scroll type="id" element="one">
                    <a href="#one" className="button">
                      Learn more
                  </a>
                  </Scroll>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>

      <section id="one" className="wrapper style3 fade-up">
        <div className="inner">
          <h2>About me</h2>
          <div className="abouts">
            <section>

              <span className="icon major"><FontAwesomeIcon icon={faCoffee} /></span>
              <h3>Story</h3>
              <p>
                I started out as a graphic designer in Toronto working for a few industries before deciding to travel and teach English in Japan. There I used the same creative problem solving skills to help students. I then moved to Tokyo and got back into development while learning some web development along the way.
              </p>
            </section>
            <section>
              <span className="icon major"><FontAwesomeIcon icon={faLightbulb} /></span>
              <h3>How I think</h3>
              <p>
                Everywhere I go, I always bring my perspective as a designer and love collaborating with others to learn and create better things. Design thinking comes up time and time again, be it in teaching, analytics, marketing or development. It’s all about interacting with people and how we can reach a specific goal.
              </p>
            </section>
            <section>
              <span className="icon major"><FontAwesomeIcon icon={faGlobeAmericas} /></span>
              <h3>Interest</h3>
              <p>
                I enjoy the outdoors and photography, but after working closely with developers, I now spend my down time learning programming because I want to bring my ideas to life!
              </p>
            </section>
          </div>
        </div>

        <div class="arrow-down">
        </div>
      </section>

      <section id="two" className="wrapper style2 spotlights">
        <div className="inner">
          <h2>Work</h2>
        </div>
        <section>
          <div className="container">
            <a href="/goodcheck" className="image" alt="image">
              <img src={pic1} alt="" data-position="center center" />
            </a>
            <div className="content">
              <div className="inner">
                <sup>UX Research | UI Design | Web Development</sup>
                <h2>Goodcheck</h2>
                <p>
                  A customizable linting tool competing for the attention of developers in the crowded space of software developement tools.
              </p>

                <ul className="actions">
                  <li>
                    <Link className="button" to="/goodcheck">
                      Learn more
                  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <a href="https://0qhz9.csb.app/" className="image" alt="image">
              <img src={pic2} alt="" data-position="center center" />
            </a>
            <div className="content">
              <div className="inner">
                <sup>Personal project | UI Design | Web Development</sup>
                <h2>Parcel Size Calculator</h2>
                <p>
                  I created this when I felt the need to simplify the process of calculating the dimensions and shipping requirements of parcels.
              </p>
                <ul className="actions">
                  <li>
                    <a href="https://0qhz9.csb.app/" className="button">
                      Live application
                  </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <a href="/sider" className="image">
              <img src={pic3} alt="" data-position="top center" />
            </a>
            <div className="content">
              <div className="inner">
                <sup>Design | Layout</sup>
                <h2>Sider</h2>
                <p>
                  A Saas based code review tool in need of marketing materials.
              </p>
                <ul className="actions">
                  <li>
                    <Link className="button" to="/sider">
                      Learn more
                  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <a href="/wabisabi" className="image">
              <img src={pic4} alt="" data-position="25% 25%" />
            </a>
            <div className="content">
              <div className="inner">
                <sup>Product Illustration | Design</sup>
                <h2>Wabi Sabi</h2>
                <p>
                  Global-field needed custom graphics to seperate their branded TWS Earphones from similar online sellers.
              </p>
                <ul className="actions">
                  <li>
                    <Link className="button" to="/wabisabi">
                      Learn more
                  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <section>
          <div className="container">
            <a href="/#" className="image">
              <img src={pic5} alt="" data-position="25% 25%" />
            </a>
            <div className="content">
              <div className="inner">
                <sup>Design | Production</sup>
                <h2>Afexa Life Science</h2>
                <p>
                  Hired to work in a team to support the marketing department. I helped with production work and creative graphics.
              </p>
                <ul className="actions">
                  <li>
                    <Link className="button" to="/generic">
                      Learn more
                  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section>
          <a href="/#" className="image">
            <img src={pic3} alt="" data-position="25% 25%" />
          </a>
          <div className="content">
            <div className="inner">
              <sup>marketing materials | annual report | advertisements</sup>
              <h2>Kids Help Phone</h2>
              <p>
                As an in house web and print designer I was in charge of inhouse design needs from ideation to production.
              </p>
              <ul className="actions">
                <li>
                  <Link className="button" to="/generic">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section> */}
      </section>

      <section id="three" className="wrapper style3 fade-up">
        <div className="inner">
          <h2>Skills</h2>
          <div className="features">
            <section>
              <span className="icon major"><FontAwesomeIcon icon={faBezierCurve} /></span>
              <h3>Graphic Design</h3>
              <p>
                Four years of formal education in Graphic Design. I have industry experience in web development, life science, non-profit and sports.
              </p>

            </section>
            <section>
              <span className="icon major"><FontAwesomeIcon icon={faCode} /></span>
              <h3>Web Development</h3>
              <p>
                I'm familiar with HTML, CSS, Javascript, ReactJS and GitHub. Can't say I write the cleanest code, but it works and I'm keen to improve.
              </p>
            </section>
            <section>
              <span className="icon major"><FontAwesomeIcon icon={faChalkboardTeacher} /></span>
              <h3>Instructional Design</h3>
              <p>
                From classroom lesson plans to start up video tutorials. I'll do what needs to be done with various mediums, to get the target audience on track.
              </p>
            </section>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper style1 fade-up">
        <div className="inner">
          <h2>Get in touch</h2>
          <p>
            Want to work together or have some questions. Send me a message and I'll reply ASAP!
          </p>
          <div className="split style1">
            <section>
              <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div className="fields">
                  <div className="field half">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="6" />
                  </div>
                </div>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" className="special" />
                  </li>
                  <li>
                    <input type="reset" value="Clear" />
                  </li>
                </ul>
              </form>
              {/* <form method="post" netlify-honeypot="bot-field" data-netlify="true">
                <input type="hidden" name="bot-field" />
                <div className="fields">
                  <div className="field half">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="field half">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" />
                  </div>
                  <div className="field">
                    <label for="message">Message</label>
                    <textarea name="message" id="message" rows="5" />
                  </div>
                </div>
                {/* <ul className="actions">
                  <li> */}
              {/* <button type="submit">Send</button>
              <input type="reset" value="Clear" /> */}
              {/* </li>
                </ul> */}
              {/* 
              </form> */}
              {/* <form method="post" action="#">
                <div className="fields">
                  <div className="field half">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="field half">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" />
                  </div>
                  <div className="field">
                    <label for="message">Message</label>
                    <textarea name="message" id="message" rows="5" />
                  </div>
                </div>
                <ul className="actions">
                  <li>
                    <a href="/#" className="button submit">
                      Send Message
                    </a>
                  </li>
                </ul>
              </form> */}
            </section>
            <section>
              <ul className="contact">
                <li>
                  <h3>Location</h3>
                  <span>
                    Toronto, Ontario
                  </span>
                </li>
                <li>
                  <h3>Email</h3>
                  <a href="mailto:info@ivanha.com">info@ivanha.com</a>
                </li>
                <li>
                  <h3>Social</h3>
                  <ul className="icons">
                    <li>
                      <a href="https://github.com/ivanha09">
                        <FontAwesomeIcon icon={faGithub} />
                        <span className="label">GitHub</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/ivan-h-8ab3583b/">
                        <FontAwesomeIcon icon={faLinkedin} />
                        <span className="label">LinkedIn</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </Layout >
);

export default IndexPage;