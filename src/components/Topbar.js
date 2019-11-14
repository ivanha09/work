import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';
import { Link } from 'gatsby';

export class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'About me', href: 'one' },
        { content: 'Work', href: 'two' },
        { content: 'Skills', href: 'three' },
        { content: 'Contact me', href: 'four' }
      ],
    };
  }

  render() {
    const { tabs } = this.state;
    return (
      <section id="topbar">

        <div className="inner">
          <Link className="title" to="/">
            Ivan Ha
          </Link>

          <nav>
            <Scrollspy
              items={tabs.map(s => s.href)}
              currentClassName="active"
              offset={-300}
            >
              {tabs.map((tab, i) => {
                const { href, content } = tab;
                return (
                  <li key={href}>
                    < Link to={`/#${href}`}>{content}</Link>
                    {/* <Scroll type="id" element={href}>
                      <a href={`#${href}`}>{content}</a>
                    </Scroll> */}
                  </li>
                );
              })}
            </Scrollspy>
          </nav>
        </div>
      </section >
    );
  }
}

export default Topbar;
