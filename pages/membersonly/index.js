import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

function members() {
  return (
    <div>MEMBERS ONLY</div>
  )
}

export default members

export const getServerSideProps = withPageAuthRequired();