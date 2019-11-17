import React from 'react';
// import { Link } from 'gatsby'

import Layout from '../components/layout';
import Footer from '../components/Footer';
import gcwebsite from "../images/goodcheck/gc-website.png"
import persona1 from '../images/goodcheck/john.jpg';
import persona2 from '../images/goodcheck/satoshi.jpg';
import persona3 from '../images/goodcheck/delaney.jpg';
import infoarch from '../images/goodcheck/info-arch.png';
import wireframes from '../images/goodcheck/gc-wireframes.png';
import gccolors from "../images/goodcheck/gc-colors.png"
import hero from '../images/seamless-5.png';
import station from '../images/seamless/station.png'


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
              <sup>Personal Project | UX Research | UI Design</sup>
              <h1>Seamless Tokyo</h1>
              <p>
                A seamless navigation application for foreign tourist in Tokyo.
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
                      <h2>Project Overview</h2>
                      <p>
                        The Association for Open Data of Public Transportation has promoted the openness of public transportation data with an aim to make public transportation in "Tokyo," which is said to be the world's most complicated, easier for all people, including foreign visitors, people with disabilities, and elderly to navigate.
                      </p>
                    </div>
                  </div>
                </section>
                <section>
                  <ul className="contact">
                    <li>
                      <h3>Deliverables</h3>
                      <p>Idea Document</p>
                      <p>Prototype</p>
                    </li>
                    <li>
                      <h3>Rolls</h3>
                      <p>UX research, UI Design</p>
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
                Proposal to create a mobile application that would use GPS and BLE to help foreigners navigate from their location to their desired location. Including directions inside train stations and airports using the BLE beacons.
            </p>
              <ul>
                <li>Option to select routes that include elevators and escalators.</li>
                <li>Maps of train stations.</li>
                <li>routes provide exact coordinates.</li>
              </ul>
            </div>
            <span className="image fit">
              <img src={station} alt="" />
            </span>
          </section>
          <section className="wrapper style2 fade-up">
            <div className="inner">
              <h2>Research Method</h2>
              <p>
                <b>Field research: </b>
                Our group started by researching the APIs that must be used in the contest. Which related to train, bus, airplane rooutes as well as station information.
              </p>
              <p>
                <b>Google Search </b>
                We scooured the internet for common issues travelers would post on travel forums related to Tokyo.
              </p>
              <p>
                <b>Pain point: </b>
                Travellers would have issues getting from the airport to their destination. Travelers would also have questions about their itinerary. They also wanted to see and have more authentic cultural experiences.
              </p>
              <p>
                <b>Competitive Analysis: </b>
                We also looked through previous winners projects. What applications are out there for other major cities. What already exist in the app stores.
              </p>
            </div>
          </section>

          <section className="wrapper style3 fade-up">
            <div className="inner">
              <h2>Synthesis </h2>
              <p>
                My partner and I would do are individual research and come together to discuss possible ideas including scavenger hunts around Tokyo Station to bus stop locators. We decided that the most helpful one would me an  application that helps first time travelers from the airport to their hotel. This idea would be later changed. Some ideas where didn't work out because of the restrictions on the API requirements. We decided to pursue the idea to help first time travelers searching for their hotel.
              </p>
              <h3>Website Features</h3>
              <ul>
                <li>Clear display of code a results.</li>
                <li>Easy navigation</li>
                <li>Examples of Code and use cases</li>
              </ul>
              <h3>Personas</h3>
              <div className="personas">
                <section>
                  <a href="/#" className="persona" alt="image">
                    <img src={persona1} alt="" data-position="center center" />
                  </a>
                  <h3>John</h3>
                  <p>
                    He works for a 20 person web development company. Some of the company's projects have demanded more people than were available and the company has outsourced some of the development. John has had to integrate the outside developers into his day-to-day workflow.
            </p>
                </section>
                <section>
                  <a href="/#" className="persona" alt="image">
                    <img src={persona2} alt="" data-position="center center" />
                  </a>
                  <h3>Satoshi</h3>
                  <p>
                    CTO of a small startup. Has about 4 developers on staff. Employs interns but often finds himself explaining the same issues during code review.
                  </p>
                </section>
                <section>
                  <a href="/#" className="persona" alt="image">
                    <img src={persona3} alt="" data-position="center center" />
                  </a>
                  <h3>Delaney</h3>
                  <p>
                    Software Development Director.
                    Responsible for meeting with the product management team to discuss and schedule features.
                    Difficult getting thorough code reviews in a reasonable timeframe, while still making progress on their own assignments.
                  </p>
                </section>
              </div>
            </div>
          </section>

          <section className="wrapper style2 fade-up">
            <div className="inner">
              <h2>Ideation </h2>
              <h3>Information Architecture</h3>
              <p>
                The GitHub repository for Goodcheck already had the information in the read me, but was all on one page. Difficult to sort through. Breaking them down into the various sections would make it easy to navigate.
              </p>
              <span className="image fit">
                <img src={infoarch} alt="" />
              </span>
              <h3>Wireframe</h3>
              <p>
                Wireframes were made to decide which layout would work best for developers. After discussing with the CTO, featuring the code a results would be most appealing to developers. The other pages would use the layout of docusaurus to make it familiar for developers and easy to update for team members.
              </p>
              <span className="image fit">
                <img src={wireframes} alt="" />
              </span>
              <h3>Feedback</h3>
              <p>
                After going through the wireframes with the CTO, we narrowed down the amount of code examples on the main page. We also decided to limit the links on the left side bar to only the main sections with links to the anchors on the right for a clear
              </p>
              <h3>Design</h3>
              <p>
                <span className="image fit">
                  <img src={station} alt="" />
                </span>
              </p>
              <ul>
                <li>Colors for the website were chosen to coompletment the logo and present the tool as professional, but friendly.</li>
                <li>The color green is used for the CTA and used to be more inviting.</li>
                <li>Different tones of greys are used to mimic the look of IDEs and console window.</li>
                <li>Bright blue is used sparingly to draw attention to the code.</li>
                <li>Light blue is used to create some contrast between sections and code snippets.</li>
              </ul>
              {/* <h3>Mockup</h3>
            <p>

            </p> */}

            </div>
          </section>
          <section className="wrapper style1 fade-up">
            <div className="inner">
              <h2>Reflectioon</h2>
              <h3>What did I learn?</h3>
              <ul>
                <li>The trickiest part of the design was getting the code to format correctly because I was creating it with ReactJS. Customizing it with a syntax highlighter such as Prism would make the process easier.</li>
              </ul>
              <h3>What would I do differently next time?</h3>
              <ul>
                <li>If I had more time I'd get more feedback from developers on the website itself.</li>
                <li>Install inspectlet to see user sessions and get a better understand of how the website is being viewed and iterate from there.</li>
              </ul>
            </div>
          </section>

          {/* <section className="wrapper style1 fade-up">
            <div className="inner">
              <h2>Next Steps</h2>
              <ul>
                <li>one</li>
                <li>two</li>
              </ul>
            </div>
          </section> */}
        </div>
      </section>
    </div>

    <Footer />
  </Layout >
);

export default SecondPage;
