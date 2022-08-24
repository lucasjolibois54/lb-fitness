import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import PlanOverview from '../../components/plans/BodybuilderPlan/planOverview';
import HeaderAfterLogin from '../../components/main/headerAfterLogin';
import Hero from '../../components/plans/BodybuilderPlan/BodybuilderWorkout/hero';

function members() {
  return (
    <div>
        <HeaderAfterLogin/>
        <Hero/>
        Bodybuilder plan
    </div>
  )
}

export default members

export const getServerSideProps = withPageAuthRequired();