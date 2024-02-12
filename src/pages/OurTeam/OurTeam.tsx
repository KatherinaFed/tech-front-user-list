import './OurTeam.scss';
import Header from '../../components/Header/Header';
import UserCard from '../../components/UserCard/UserCard';
import { User, useGetListUsersQuery } from '../../service/usersApi';
import { useEffect, useState } from 'react';

function OurTeam() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [users, setUsers] = useState<User[]>([]);
  const { data, isLoading, isFetching, isError } =
    useGetListUsersQuery(currentPage);

  useEffect(() => {
    if (data) {
      setUsers((prevUsers) => [...prevUsers, ...data.data]);
    }
  }, [data]);

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

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
          {users.map((user: User) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
      <div className="load_more_wrapper">
        <button
          type="button"
          onClick={handleLoadMore}
          disabled={isLoading || isFetching}
        >
          {isLoading ? 'Загрузка...' : 'Показать больше'}
        </button>
      </div>
    </section>
  );
}

export default OurTeam;
