import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import OurTeam from '../../components/OurTeam/OurTeam';
import User from '../User/User';
import './Main.scss';

function Main() {
  const { id } = useParams();

  return (
    <div className="main_container">
      <Header />
      {id ? <User /> : <OurTeam />}
    </div>
  );
}

export default Main;
