import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Header from '../../components/introcution/header';
import Hero from '../../components/introcution/hero';
import SubHero from '../../components/introcution/subHero';
import Footer from '../../components/main/footer';

function introduction() {
  return (
    <div>
        <Header/>
        <Hero/>
        <SubHero/>
        <Footer/>
        
        </div>
  )
}

export default introduction

export const getServerSideProps = withPageAuthRequired();