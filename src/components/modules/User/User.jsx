const User = ({ user, className }) => {
  const existUser = user && "firstname" in user && "lastname" in user;

  return (
    existUser && (
      <h3 className={className}>
        {user.firstname} {user.lastname}
      </h3>
    )
  );
};

export default User;
