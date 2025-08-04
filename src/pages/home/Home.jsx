import "./Home.css"
import Nav from "../../components/navigation/nav"
import PersonalInfo from "../../components/personalInfo/personalInfo"
import NextStepBtn from '../../components/buttons/nextStepBtn/NextStepBtn'

function Home() {
  return (
   <main>
    <section className="bg_white">
        <Nav></Nav>
        <aside className="side_component">
            <PersonalInfo></PersonalInfo>
            <NextStepBtn></NextStepBtn>

        </aside>
    </section>
   </main>
  )
}

export default Home