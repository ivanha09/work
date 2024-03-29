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
import hero from '../images/goodcheck-card.png';

import Header from '../components/Header';

const SecondPage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="intro" className="wrapper style1 fullscreen hero">
        <section>
          <div className="hero-img">
            <a href="/#" className="project" alt="image">
              <img src={hero} alt="" data-position="center center" />
            </a>
          </div>
          <div className="hero-content">
            <div className="inner">
              <sup>UX Research | UI Design | Web Developer</sup>
              <h1>Goodcheck</h1>
              <p>
                A customizable linter tool.
                </p>
            </div>
          </div>
        </section>
      </section>
      <section id="main" className="wrapper">
        <div className="inner">
          <section id="one" className="wrapper style1 fade-up">
            <div className="inner">
              <div className="split style1">
                <section>
                  <div className="fields">
                    <div className="field">
                      <h2>Project Overview</h2>
                      <p>
                        Goodcheck is a regexp based customizable linter. It’s a powerful querying tool that is complicated because of the level of customization. Why aren’t more developers using this software?
                      </p>
                    </div>
                  </div>
                </section>
                <section>
                  <ul className="contact">
                    <li>
                      <h3>Deliverables</h3>
                      <p>Documentation website</p>
                    </li>
                    <li>
                      <h3>Rolls</h3>
                      <p>design, layout, web developer</p>
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
                A clean simple design meant to appeal to developers.
            </p>
              <ul>
                <li>Emphasis on the code.</li>
                <li>Categorize the information.</li>
                <li>Motivating examples.</li>
                <li>Developers could reuse sample code for their own projects.</li>
              </ul>
              <ul className="actions">
                <li>
                  <a href="https://sider.github.io/goodcheck/" className="button">
                    Live site
                  </a>
                </li>
              </ul>
            </div>
            <span className="image fit">
              <img src={gcwebsite} alt="" />
            </span>
          </section>
          <section className="wrapper style2 fade-up">
            <div className="inner">
              <h2>Research Method</h2>
              <p>
                <b>Field research: </b>
                Searching repositories for the use of goodcheck.yml.
              </p>
              <p>
                <b>Surveys: </b>
                Surveys were sent out to 100 users of Sider to get a better understanding of their current use and understanding of the software as well as features they would like to see.
              </p>
              <p>
                <b>Pain point: </b>
                Users don’t understand how to use Goodcheck or when to use it.
              </p>
              <p>
                <b>Interviews: </b>
                The CTO and conducted seminars and asked participants what they thought of the software.
              </p>
              <p>
                <b>Competitive Analysis: </b>
                What other competing projects are out there, and how did they gain traction? This involved looking over similar linting tools. Finding their origins and what methods they use to gain more users.
              </p>
              <p>
                Projects such as ESLint gained traction by open sourcing their project and having community members contribute to the project. This also involved doing seminars at various relevant events. They also had a website and tutorial videos with examples of how to use it. After installation users could also start with a recommended list or manual create their own.
              </p>
              <p>
                Breaking this down, I looked at what is possible for our situation. Although Sider ran seminars, getting outside of Tokyo wasn’t so simple. The obvious ones that could help users was a website, tutorial videos and examples.
              </p>
            </div>
          </section>

          <section className="wrapper style3 fade-up">
            <div className="inner">
              <h2>Synthesis </h2>
              <p>
                After conducting the research and hearing feedback about conferences participants, it was apparent that developers thought that the software would be <strong>useful</strong>, but there was <strong>no specific use cases</strong> they could think of to apply to their own work.
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
                  <img src={gccolors} alt="" />
                </span>
                Colors for the website were chosen to coompletment the logo and present the tool as professional, but friendly.
              </p>
              <p>
                The color green is used for the CTA and used to be more inviting.
              </p>
              <p>
                Different tones of greys are used to mimic the look of IDEs and console window.
              </p>
              <p>
                Bright blue is used sparingly to draw attention to the code.
              </p>
              <p>
                Light blue is used to create some contrast between sections and code snippets.
              </p>
              <h3>Mockup</h3>
              <p>

              </p>

            </div>
          </section>
          <section className="wrapper style2 fade-up">
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

          <section className="wrapper style1 fade-up">
            <div className="inner">
              <h2>Next Steps</h2>
              <ul>
                <li>one</li>
                <li>two</li>
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
