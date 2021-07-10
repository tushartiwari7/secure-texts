import React,{ useEffect } from 'react';
import Head from 'next/head';
import {useHistory} from "react-router-dom";
import tawkTo from "tawkto-react";

const tawkToPropertyId = '60e93093649e0a0a5ccb79da'

// Direct Chat Link
// https://tawk.to/chat/tawkToPropertyId/tawkToKey

const tawkToKey = '814a033a27b84ad9ccad79526ba425dbe7b02cdc'


export default function Home({handleDecodeEl,setPage}) {
    const history = useHistory();
    
    useEffect(() => {
        tawkTo(tawkToPropertyId, tawkToKey)
    }, []);
    
    return (
        <div className="container">
            <Head>
                <title> Secure Texts: Intro</title>
            </Head>
            <main>
                <h1 className="title">
                    Welcome to <a href="https://github.com/tushartiwari7/secure-texts">Secure Texts!</a>
                </h1>
                <p className="description">
                    Get started by converting your text to cipher text using <code> Cryptographic Algorithms</code>
                </p>
                
                <div className="grid">
                    <button onClick={()=>{
                        handleDecodeEl(false);
                        setPage('Encoder');
                        history.push('/encrypt');
                    }
                    } className="card">
                        <h3>Encrypt &rarr;</h3>
                        <p>Enter the Plain Text and key so that you'll get a cipher text.</p>
                    </button>
                    <button onClick={()=>{
                        handleDecodeEl(true);
                        setPage('Decoder');
                        history.push('/encrypt');
                    }} className="card">
                        <h3>Decrypt &rarr;</h3>
                        <p>Enter the Cipher Text obtained from Encoder and same key so that you'll get the plain Text Back. </p>
                    </button>
                </div>
                
                <h2 className="subtitle">
                    Learn <a href="#blog" className="a">Cryptography</a>
                </h2>

                <div className="grid2">
                    <button onClick={()=>{
                        setPage('Blog');
                        history.push('/blog');
                    }
                    } className="card">
                        <h3>How Ciphers Work? &rarr;</h3>
                        <p>Learn about Ciphers, Encryptions and many more algorithms which provide secure transactions.</p>
                    </button>
                </div>
                <h2 className="subtitle" style={{marginTop: "35px",fontSize: "2rem"}}>
                    Collaborate With Us!
                </h2>
                <div className="grid2">
                    <a href="https://github.com/tushartiwari7/secure-texts/issues"  className="card">
                        <h3>Any Issues or Feedback, Contact Us! &rarr;</h3>
                        <p>Learnt the basics of Cryptography, Its time to Build now. Get in Touch</p>
                    </a>
                </div>
            </main>

            <style jsx="true"  >{`
                .container {
                min-height: 91vh;
                padding: 0 0.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                }
                main {
                padding: 5rem 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                }
                footer {
                width: 100%;
                height: 100px;
                border-top: 1px solid #eaeaea;
                display: flex;
                justify-content: center;
                align-items: center;
                }
                footer img {
                margin-left: 0.5rem;
                }
                footer a {
                display: flex;
                justify-content: center;
                align-items: center;
                }
                a, button {
                color: inherit;
                background: inherit;
                text-decoration: none;
                }
                .title a, .subtitle a {
                color: #0070f3;
                text-decoration: none;
                }
                .title a:hover,.subtitle a:hover,
                .title a:focus,.subtitle a:focus,
                .title a:active,.subtitle a:active {
                text-decoration: underline;
                }
                .title {
                margin: 0;
                line-height: 1.15;
                font-size: 4rem;
                }
                .subtitle {
                margin: 0px 0px 50px 0px;
                line-height: 1.00;
                font-size: 2rem;
                transform: translate(-20vw,40px);
                }
                .title,
                .description,{
                text-align: center;
                }

                .description {
                line-height: 1.5;
                font-size: 1.5rem;
                }
                code {
                border-radius: 5px;
                padding: 0.75rem;
                font-size: 1.1rem;
                font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
                }
                .grid {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
                max-width: 800px;
                margin-top: 3rem;
                }
                .grid2 {
                display: flex;
                align-items: left;
                justify-content: center;
                flex-wrap: wrap;
                max-width: 800px;
                margin-top: 3rem;
                transform: translateX(-14vw);
                }

                .card {
                margin: 1rem;
                flex-basis: 45%;
                padding: 1.5rem;
                text-align: left;
                min-height: 180px;
                color: inherit;
                text-decoration: none;
                border: 1px solid #eaeaea;
                border-radius: 10px;
                transition: color 0.15s ease, border-color 0.15s ease;
                }
                .card:hover,
                .card:focus,
                .card:active {
                color: #0070f3;
                border-color: #0070f3;
                }
                .card h3 {
                margin: 0 0 1rem 0;
                font-size: 1.5rem;
                }
                .card p {
                margin: 0;
                font-size: 1.25rem;
                line-height: 1.5;
                }
                @media (max-width: 600px) {
                .grid {
                    width: 100%;
                    flex-direction: column;
                }
                }
      `}</style>

      <style jsx="true" global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }
                * {
                box-sizing: border-box;
                }
      `}</style>
        </div>
    );
}