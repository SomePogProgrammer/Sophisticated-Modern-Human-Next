import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Sophisticated Modern Human</title>
          <meta property="og:title" content="Sophisticated Modern Human" />
        </Head>
        <div className="home-header">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <span className="home-logo">ROME</span>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links">
                <span>
                  <span>Home Page</span>
                  <br></br>
                </span>
                <span className="home-nav4 headerLink">Leaderboard</span>
                <span className="home-nav5 headerLink">
                  <span>Bugs &amp; Reports</span>
                  <br></br>
                </span>
              </nav>
              <div className="home-buttons">
                <button className="home-login button">Login</button>
                <button className="home-register button">Register</button>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div className="home-nav">
                <div className="home-top">
                  <span className="home-logo1">ROME</span>
                  <div data-thq="thq-close-menu" className="home-close-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="home-links1">
                  <span className="home-nav11">Home</span>
                  <span className="home-nav2">Login</span>
                  <span className="home-nav3">Signup</span>
                  <span className="home-nav41">Leaderboard</span>
                  <span className="home-nav51">Contact</span>
                </nav>
                <div className="home-buttons1">
                  <button className="home-login1 button">Login</button>
                  <button className="home-register1 button">Register</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <span className="home-mobile-logo">ROME</span>
        <div className="home-hero gradientAnimationLowerLeft">
          <div className="home-hero1 gradientAnimationLowerLeft">
            <div className="home-container1">
              <h1 className="home-hero-heading heading1">Roman Antiquity</h1>
              <span className="home-hero-sub-heading">An in-depth and </span>
              <div className="home-btn-group">
                <button className="home-hero-button1 button">
                  Get Started
                </button>
                <button className="home-hero-button2 button">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-details">
          <div className="home-details1">
            <div className="home-container2">
              <span className="home-text4 sectionTitle">
                <span>Details</span>
                <br></br>
              </span>
              <h2 className="home-details-heading heading2">Leaderboard</h2>
              <span className="home-details-sub-heading">
                Compete with other users and see who ranks at the top
              </span>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1594502066072-0159eaa8ad76?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDU5MDcxM3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              className="home-details-image"
            />
          </div>
        </div>
        <div className="home-banner">
          <div className="home-banner1">
            <h1 className="home-banner-heading heading2">
              Monitor User Activity
            </h1>
            <span className="home-banner-sub-heading">
              Track the number of users on our website in real-time
            </span>
            <button className="home-banner-button button">Learn More</button>
          </div>
        </div>
        <div className="home-footer">
          <footer className="home-footer1">
            <div className="home-container3">
              <span className="home-logo2">ROME</span>
              <nav className="home-nav1 headerLink home-nav1">
                <span className="home-nav52 headerLink">Back To The Top!</span>
              </nav>
            </div>
            <div className="home-separator"></div>
            <div className="home-container4">
              <span className="home-text7">
                © 2023 myCompany, All Rights Reserved.
              </span>
              <div className="home-icon-group1">
                <img
                  src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg"
                  loading="eager"
                  className="home-image"
                />
                <svg className="home-icon10">
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
                </svg>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            top: 0px;
            width: 100%;
            display: flex;
            z-index: 55;
            position: fixed;
            box-shadow: 0px 10px 100px 20px #9b9b9b;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            background-image: linear-gradient(
              90deg,
              rgb(40, 40, 40) 0%,
              rgb(0, 0, 0) 99%
            );
          }
          .home-navbar-interactive {
            top: -10px;
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-self: flex-end;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: 115px;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
            background-image: linear-gradient(
              90deg,
              rgba(157, 10, 10, 0.02) 1%,
              rgba(110, 9, 9, 0.85) 70%,
              rgb(4, 4, 4) 100%
            );
          }
          .home-logo {
            color: #ffffff;
            font-size: 2em;
            font-style: normal;
            font-family: 'Karla';
            font-weight: 800;
            margin-left: var(--dl-space-space-fourunits);
            text-transform: uppercase;
          }
          .home-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .home-links {
            flex: 1;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-nav1 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Karla';
            font-weight: 700;
          }
          .home-nav4 {
            color: #ffffff;
            font-size: 20px;
            font-style: normal;
            font-family: 'Karla';
            font-weight: 700;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-nav5 {
            font-size: 18px;
            text-align: justify;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-buttons {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-login {
            color: #ffffff;
            font-family: 'Inter';
            border-color: #ffffff;
            border-width: 1px;
            margin-right: var(--dl-space-space-twounits);
            padding-left: 1.5rem;
            border-radius: 45px;
            padding-right: 1.5rem;
            background-color: transparent;
            background-image: linear-gradient(
              225deg,
              rgb(34, 34, 34) 0%,
              rgb(0, 0, 0) 100%
            );
          }
          .home-register {
            color: #ffffff;
            font-family: 'Inter';
            font-weight: bold;
            border-color: #ffffff;
            padding-left: 1rem;
            border-radius: 45px;
            padding-right: 1rem;
            background-color: transparent;
            background-image: linear-gradient(
              225deg,
              rgb(34, 34, 34) 0%,
              rgb(0, 0, 0) 100%
            );
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            border-radius: 50px;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo1 {
            font-size: 2em;
            font-weight: bold;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            fill: var(--dl-color-gray-900);
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .home-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-nav11 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav2 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav3 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav41 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav51 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-buttons1 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-login1 {
            border-color: var(--dl-color-primary1-blue100);
            border-width: 1px;
            margin-right: var(--dl-space-space-twounits);
            padding-left: 1.5rem;
            border-radius: 30px;
            padding-right: 1.5rem;
          }
          .home-register1 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            border-color: var(--dl-color-primary1-blue100);
            border-width: 1px;
            padding-left: 1.5rem;
            border-radius: 30px;
            padding-right: 1.5rem;
            background-color: var(--dl-color-primary1-blue100);
          }
          .home-register1:hover {
            border-color: #849492ff;
            background-color: #849492ff;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-logo {
            color: #ffffff;
            display: none;
            font-size: 2em;
            font-family: 'Inter';
            font-weight: bold;
            margin-left: var(--dl-space-space-fourunits);
            text-transform: uppercase;
          }
          .home-hero {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            background: linear-gradient(
              225deg,
              rgb(134, 138, 140) 0%,
              rgb(40, 38, 38) 51%,
              rgb(0, 0, 0) 92%
            );
            align-items: flex-start;
            animation-delay: 0s;
            justify-content: center;
          }
          .home-hero1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: 125px;
            min-height: auto;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-container1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-hero-heading {
            color: var(--dl-color-gray-white);
            max-width: 800px;
            text-align: center;
            line-height: 1.6;
          }
          .home-hero-sub-heading {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-align: center;
            line-height: 1.6;
          }
          .home-btn-group {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-hero-button1 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            transition: 0.3s;
            font-weight: bold;
            padding-top: 1.5rem;
            border-color: var(--dl-color-primary1-blue100);
            border-width: 0px;
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            background-color: var(--dl-color-primary1-blue100);
          }
          .home-hero-button1:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: rgba(41, 20, 119, 0.9);
          }
          .home-hero-button2 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            font-weight: bold;
            padding-top: var(--dl-space-space-unit);
            border-color: transparent;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: transparent;
          }
          .home-hero-button2:hover {
            border-color: var(--dl-color-gray-white);
          }
          .home-details {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-details1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: space-between;
          }
          .home-container2 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text4 {
            color: var(--dl-color-primary1-blue80);
            text-align: left;
            font-family: 'Raleway';
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-details-heading {
            width: 80%;
            text-align: left;
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-details-sub-heading {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            text-align: left;
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-details-image {
            width: 400px;
            height: 400px;
            object-fit: cover;
            margin-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-round);
          }
          .home-banner {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-banner1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: var(--dl-size-size-maxwidth);
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: flex-start;
          }
          .home-banner-heading {
            color: var(--dl-color-gray-white);
            text-align: center;
            font-family: 'Raleway';
            line-height: 1.6;
          }
          .home-banner-sub-heading {
            color: var(--dl-color-gray-white);
            max-width: var(--dl-size-size-maxwidth);
            text-align: center;
            line-height: 1.6;
          }
          .home-banner-button {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            font-weight: 700;
            padding-top: 1.5rem;
            border-width: 0px;
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            background-color: var(--dl-color-primary1-blue100);
          }
          .home-banner-button:hover {
            border-color: rgba(41, 20, 119, 0.9);
            background-color: rgba(41, 20, 119, 0.9);
          }
          .home-footer {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-footer1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: space-between;
          }
          .home-container3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-logo2 {
            color: var(--dl-color-gray-white);
            font-size: 2em;
            font-style: normal;
            font-family: 'Karla';
            font-weight: 800;
          }
          .home-nav1 {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: center;
            flex-direction: row;
          }
          .home-nav52 {
            color: var(--dl-color-secondary-gray500);
            font-style: normal;
            font-family: 'Karla';
            font-weight: 600;
            border-color: #ffffff;
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-separator {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-gray-800);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text7 {
            color: var(--dl-color-secondary-gray500);
          }
          .home-icon-group1 {
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image {
            top: 0px;
            left: 0px;
            width: 33px;
            height: 24px;
            margin: auto;
            position: absolute;
            align-self: center;
            object-fit: cover;
          }
          .home-icon10 {
            fill: var(--dl-color-secondary-gray500);
            width: 1em;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon12 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
          }
          @media (max-width: 991px) {
            .home-navbar-interactive {
              padding-right: 77px;
            }
            .home-links {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .home-nav5 {
              text-align: center;
            }
            .home-buttons {
              margin-left: var(--dl-space-space-unit);
              margin-right: 0px;
            }
            .home-login {
              padding-left: 1.5rem;
              padding-right: 1.5rem;
            }
            .home-hero1 {
              flex-direction: column;
            }
            .home-container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-hero-heading {
              text-align: center;
            }
            .home-hero-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-details-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-banner-sub-heading {
              max-width: 100%;
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-logo {
              font-size: 1.5em;
            }
            .home-nav1 {
              color: rgb(255, 255, 255);
              width: auto;
              font-size: 20px;
              font-style: normal;
              text-align: center;
              font-family: Karla;
              font-weight: 700;
              margin-left: 0px;
              border-bottom-width: 1px;
            }
            .home-nav4 {
              color: rgb(255, 255, 255);
              width: auto;
              font-size: 20px;
              font-style: normal;
              font-family: Karla;
              font-weight: 700;
              margin-left: var(--dl-space-space-unit);
            }
            .home-nav5 {
              width: auto;
              font-size: 18px;
              margin-left: var(--dl-space-space-unit);
            }
            .home-buttons {
              width: 169px;
              height: 45px;
              padding: var(--dl-space-space-halfunit);
              margin-left: 0px;
            }
            .home-login {
              margin-right: var(--dl-space-space-halfunit);
              padding-left: 1rem;
              padding-right: 1rem;
            }
            .home-register {
              width: 50%;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-mobile-menu {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-nav11 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav41 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav51 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-mobile-logo {
              font-size: 1.5em;
            }
            .home-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-details1 {
              align-items: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
            .home-container2 {
              align-items: center;
              justify-content: flex-start;
            }
            .home-text4 {
              text-align: center;
            }
            .home-details-heading {
              text-align: center;
            }
            .home-details-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-details-image {
              margin-top: var(--dl-space-space-threeunits);
              margin-left: 0px;
            }
            .home-banner1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-banner-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-footer1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container4 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text7 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              width: 100%;
              padding: var(--dl-space-space-unit);
              align-self: flex-end;
            }
            .home-logo {
              display: none;
              font-size: 1.5em;
            }
            .home-desktop-menu {
              position: relative;
            }
            .home-links {
              margin-left: 0px;
            }
            .home-buttons {
              right: -28px;
              width: 203px;
              bottom: -41px;
              height: 17px;
              position: absolute;
              padding-top: var(--dl-space-space-unit);
            }
            .home-login {
              width: 77px;
              height: 8px;
            }
            .home-register {
              width: 79px;
              height: 3px;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-logo1 {
              font-size: 1.5em;
            }
            .home-icon02 {
              fill: var(--dl-color-gray-900);
            }
            .home-mobile-logo {
              top: 71px;
              left: -50px;
              color: rgb(255, 255, 255);
              display: revert;
              z-index: 100;
              position: absolute;
              font-size: 1.5em;
              font-family: Inter;
              font-weight: bold;
              text-transform: uppercase;
            }
            .home-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-hero-button2 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .home-banner1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container4 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text7 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
