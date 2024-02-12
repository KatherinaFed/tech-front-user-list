import './OurTeam.scss';
import Header from '../../components/Header/Header';
import UserCard from '../../components/UserCard/UserCard';
import { User, useGetListUsersQuery } from '../../service/usersApi';

function OurTeam() {
  const { data, isLoading, isFetching, isError } = useGetListUsersQuery();

  if (isLoading && isFetching) {
    return <h1>Загрузка...</h1>;
  }

  if (isError) {
    return <div>Что-то пошло не так...</div>;
  }

  return (
    <section className="team_section">
      <Header />
      <div className="team_container">
        <div className="team_wrapper">
          {data?.data.map((user: User) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
