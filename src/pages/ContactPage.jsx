import React from 'react';

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "newComponents/Header/Header.jsx";
import Footer from "newComponents/Footer/Footer.jsx";
import ContactUsForm from "newComponents/ContactUs/ContactForm.jsx";
import ContactForm from "newComponents/Contact/ContactForm.jsx";
import SEO from 'Seo.jsx';

export default function ContactPage(props){
  
  return (
    <AnimationRevealPage>
      <SEO language = {props.language} url="contact"/>
      <Header language = {props.language} />
      <ContactForm language = {props.language} />
      <Footer language = {props.language}/>
    </AnimationRevealPage>
  );
}
