import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import PlanOverview from '../../components/plans/BodybuilderPlan/planOverview';
import HeaderAfterLogin from '../../components/main/headerAfterLogin';
import Hero from '../../components/plans/BodybuilderPlan/BodybuilderWorkout/hero';
import Footer from '../../components/main/footer';

function members() {
  return (
    <div>
        <HeaderAfterLogin/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default members

export const getServerSideProps = withPageAuthRequired();