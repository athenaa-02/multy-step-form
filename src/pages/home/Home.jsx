import "./Home.css"
import Nav from "../../components/navigation/Nav"
import PersonalInfo from "../../components/personalInfo/personalInfo"

function Home() {
  return (
   <main>
    <section className="bg_white">
        <Nav></Nav>
        <aside className="side_component">
            <PersonalInfo></PersonalInfo>

        </aside>
    </section>
   </main>
  )
}

export default Home