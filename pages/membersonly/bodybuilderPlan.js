import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import PlanOverview from '../../components/plans/BodybuilderPlan/planOverview';

function members() {
  return (
    <div>
        <PlanOverview/>
    </div>
  )
}

export default members

export const getServerSideProps = withPageAuthRequired();