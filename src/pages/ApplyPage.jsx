import React from 'react';

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "newComponents/Header/Header.jsx";
import Footer from "newComponents/Footer/Footer.jsx";
import ApplyForm from "newComponents/Apply/ApplyForm.jsx";
import SEO from 'Seo.jsx';

export default function ApplyPage(props){
  
  return (
    <AnimationRevealPage>
      <SEO language = {props.language} url="apply"/>
      <Header language = {props.language} />
      <ApplyForm language = {props.language} />
      <Footer language = {props.language}/>
    </AnimationRevealPage>
  );
}
