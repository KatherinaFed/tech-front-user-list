import './OurTeam.scss'
import Header from "../../components/Header/Header"
import UserCard from '../../components/UserCard/UserCard'

function OurTeam() {
  return (
    <section className="team_section">
      <Header />
      <div className="team_container">
        <div className="team_wrapper">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
    </section>
  )
}

export default OurTeam