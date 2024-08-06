import React from 'react'
import Head from 'next/head'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - Sophisticated Modern Human</title>
          <meta
            property="og:title"
            content="Page - Sophisticated Modern Human"
          />
        </Head>
        <span className="page-text">Cornerstone Charter Academy PTO</span>
        <button type="button" className="page-button button">
          Button
        </button>
        <div className="page-container1">
          <img
            alt="image"
            sizes="(min-width: 768px) 800px, 480px"
            src="/pto-siteimg-2-700w.webp"
            srcSet="/pto-siteimg-2-700w.webp 800w, /pto-siteimg-2-mobile.webp 480w"
            className="page-image"
          />
          <img
            alt="image"
            src="/pto-siteimg-1-200w.webp"
            className="page-image1"
          />
        </div>
      </div>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-image: linear-gradient(
              0deg,
              rgb(189, 195, 199) 0%,
              rgb(255, 255, 255) 100%
            );
          }
          .page-text {
            font-size: 2em;
            align-self: center;
            font-style: normal;
            margin-top: 32vh;
            text-align: center;
            font-weight: 900;
            text-transform: capitalize;
          }
          .page-button {
            color: rgb(255, 255, 255);
            width: 306px;
            height: 55px;
            align-self: center;
            border-width: 0px;
            border-radius: 2em;
            background-image: radial-gradient(
              circle at right bottom,
              rgb(217, 27, 27) 2%,
              rgb(32, 0, 0) 99%
            );
          }
          .page-container1 {
            top: -10%;
            left: -2%;
            width: 110vw;
            height: 35vh;
            margin: auto;
            rotate: -5deg;
            display: flex;
            overflow: hidden;
            position: absolute;
            box-shadow: 10px 10px 50px 20px rgba(14, 14, 14, 0);
            align-items: center;
            justify-content: flex-start;
            background-image: radial-gradient(
              circle at right bottom,
              rgb(217, 27, 27) 2%,
              rgb(32, 0, 0) 99%
            );
          }
          .page-image {
            right: 0px;
            width: 685px;
            bottom: 0px;
            height: 275px;
            rotate: 0;
            position: absolute;
            align-self: center;
            margin-top: auto;
            object-fit: cover;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: auto;
          }
          .page-image1 {
            width: auto;
            height: auto;
            display: block;
            max-width: 122px;
            align-self: center;
            object-fit: contain;
            margin-left: 2%;
          }
          @media (max-width: 767px) {
            .page-container1 {
              top: -16%;
            }
            .page-image {
              width: auto;
              height: auto;
              max-width: 70vw;
            }
            .page-image1 {
              width: 149px;
              height: 142px;
              align-self: flex-end;
              margin-bottom: 5%;
            }
          }
          @media (max-width: 479px) {
            .page-container1 {
              top: -20%;
              left: -5%;
              height: 35vh;
            }
            .page-image {
              right: 0px;
              width: auto;
              bottom: 0px;
              height: auto;
              position: absolute;
              max-width: 380px;
              max-height: 150px;
              padding-top: 0px;
            }
            .page-image1 {
              width: auto;
              height: auto;
              margin-top: 0%;
              max-height: 120px;
              margin-left: 4%;
              margin-bottom: 3%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Page
