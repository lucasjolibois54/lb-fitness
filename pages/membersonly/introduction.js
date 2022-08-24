import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import HeaderAfterLogin from '../../components/main/headerAfterLogin';
import Hero from '../../components/introcution/hero';

function introduction() {
  return (
    <div>
        <HeaderAfterLogin/>
        <Hero/>
        
        </div>
  )
}

export default introduction

export const getServerSideProps = withPageAuthRequired();