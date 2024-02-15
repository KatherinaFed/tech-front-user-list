import './User.scss';
import { useGetUserByIdQuery } from '../../service/usersApi';
import { useNavigate, useParams } from 'react-router-dom';
import mailIcon from '../../assets/icon_mail.png';
import phoneIcon from '../../assets/icon_phone.png';

function User() {
  const { id } = useParams<string>();

  const {
    data: userData,
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetUserByIdQuery(id);

  if (isLoading && isFetching) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    console.log(error);
  }

  return (
    <div className="user_container">
      <div className="user_description">
        Клиенты видят в нем эксперта по вопросам разработки комплексных решений
        финансовых продуктов, включая такие аспекты, как организационная
        структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам
        лучше понимать структуру рисков их бизнеса, улучшать процессы за счет
        применения новейших технологий и увеличивать продажи, используя самые
        современные аналитические инструменты.
        <br />
        В работе с клиентами недостаточно просто решить конкретную проблему или
        помочь справиться с трудностями. Не менее важно уделять внимание обмену
        знаниями: "Один из самых позитивных моментов — это осознание того, что
        ты помог клиенту перейти на совершенно новый уровень компетентности,
        уверенность в том, что после окончания проекта у клиента есть все
        необходимое, чтобы дальше развиваться самостоятельно".
        <br />
        Помимо разнообразных проектов для клиентов финансового сектора, Сорин
        ведет активную предпринимательскую деятельность. Он является
        совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей
        инновационный подход к красоте, а также инвестором других
        бизнес-проектов.
      </div>
      <div className="user_contacts">
        <div className="user_contact_info">
          <img src={phoneIcon} alt="phone_icon" />
          +7 (954) 333-44-55
        </div>
        <div className="user_contact_info">
          <img src={mailIcon} alt="mail_icon" />
          {userData?.data.email}
        </div>
      </div>
    </div>
  );
}

export default User;
