import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import HeaderAfterLogin from '../../components/main/headerAfterLogin';

function members() {
  return (
    <div>
        <HeaderAfterLogin/>
        
        MEMBERS ONLY</div>
  )
}

export default members

export const getServerSideProps = withPageAuthRequired();