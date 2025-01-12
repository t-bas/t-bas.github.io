import React from 'react';

import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Header from "newComponents/Header/Header.jsx";
import Footer from "newComponents/Footer/Footer.jsx";
import SEO from 'Seo.jsx';

import FAQComponent from "newComponents/Faq/Faq.jsx";
import TrialLesson from 'newComponents/Home/TrialLesson.jsx';

export default function FaqPage(props){
  
  return (
    <AnimationRevealPage>
      <SEO language = {props.language} url="faq"/>
      <Header language = {props.language} />
      <FAQComponent language = {props.language} />
      <TrialLesson language = {props.language}/>
      <Footer language = {props.language}/>
    </AnimationRevealPage>
  );
}
