
import Footer from '../../components/main/footer';
import HeaderAfterLogin from '../../components/main/headerAfterLogin';
import PlanHero from '../../components/plans/BodybuilderPlan/planHero';
import PlanOverview from '../../components/plans/BodybuilderPlan/planOverview';

function workoutPlans() {
  return (
    <div className='h-screen'>
    <HeaderAfterLogin/>
    <PlanHero/>
    <PlanOverview/>
    <Footer/>
    {/* <div>
    Welcome {user.name}! <a href="/api/auth/logout">Logout</a></div> */}
  </div>
  )
}

export default workoutPlans