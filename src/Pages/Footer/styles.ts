import styled from 'styled-components';

export const Div = styled.div`
.home-about-section {
    position: relative;
    padding-bottom: 70px !important;
    padding-top: 70px !important;
  }
  
  .home-about-description {
    color: white !important;
    padding-top: 100px !important;
    padding-bottom: 20px !important;
    text-align: center;
  }
  
  .home-about-body {
    padding-top: 50px;
    font-size: 1.2em !important;
    text-align: left;
  }
  
  .home-about-social {
    text-align: center !important;
    padding-top: 25px;
    color: white !important;
  }
  
  .home-about-social-links {
    justify-content: center !important;
    padding-top: 15px !important;
    display: inline-block !important;
    position: relative !important;
    padding-inline-start: 0 !important;
  }
  
  .home-social-icons {
    position: relative !important;
    display: inline-block !important;
    width: 40px !important;
    height: 40px !important;
    text-align: center !important;
    font-size: 1.2em !important;
    line-height: 2em !important;
    background: rgba(255, 255, 255, 0.972) !important;
    border-radius: 50% !important;
    transition: 0.5s !important;
  }
  
  .home-social-icons::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #68187a;
    transition: 0.5s;
    transform: scale(0.9);
    z-index: -1;
  }
  
  .home-social-icons:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 15px #801f95;
  }
  
  .home-social-icons:hover {
    color: #87209e;
    box-shadow: 0 0 5px #87209e;
    text-shadow: 0 0 2px #87209e;
  }
  
  .social-icons {
    display: inline-block !important;
    padding-right: 15px;
    padding-left: 15px;
  }
  
  /* --------- */
  /* Footer */
  /* --------- */
  .footer {
    background-color: rgb(10, 4, 22);
    bottom: 0 !important;
    padding-top: 10px !important;
    padding-bottom: 8px !important ;
  }
  .footer-copywright {
    text-align: center !important;
  }
  
  .footer-body {
    text-align: center !important;
  }
  
  @media (max-width: 767px) {
    .footer-copywright {
      text-align: center !important;
    }
  
    .footer-body {
      text-align: center !important;
    }
  }
  
  .footer h3 {
    font-size: 1em;
    color: white !important;
    margin-top: 0.5em !important;
    margin-bottom: 0.5em !important;
  }
  .footer-icons {
    margin-top: 0.5em !important;
    margin-bottom: 0.5em !important;
    padding: 0 !important;
  }
  
  .blockquote-footer {
    color: #a588c0 !important;
  }
  
  
  .like-btn:hover {
    transform: translateY(-2px) !important;
    background-color: #a24dd386 !important;
    border-color: #a24dd386 !important;
  }
  
  .animate-like {
    animation-name: likeAnimation;
    animation-fill-mode: forwards;
    animation-duration: 0.85s;
  }
  @keyframes likeAnimation {
    0% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  
  .fork-btn {
    font-size: 1.1em !important;
    padding-top: 10px !important;
  }
  
  .fork-btn-inner {
    line-height: 1.4em !important;
    background-color: #934cce5e !important;
    padding: 0.25rem 1.1rem !important;
    vertical-align: middle !important;
    text-align: center !important;
  }
  
  .fork-btn-inner:hover {
    transform: translateY(-2px) !important;
    background-color: #a24dd386 !important;
    border-color: #a24dd386 !important;
  }
  .fork-btn-inner::after {
    display: none !important;
  }
`