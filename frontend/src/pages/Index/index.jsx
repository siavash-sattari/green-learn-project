import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LastArticles from '../../components/LastArticles';
import ListOfCourses from '../../components/ListOfCourses';
import Services from '../../components/Services';
import './Index.css';

const Index = () => {
  return (
    <>
      <Header />
      <ListOfCourses />
      <Services />
      <LastArticles />
      <Footer />
    </>
  );
};

export default Index;
