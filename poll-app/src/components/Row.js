const Row = ({ user }) => {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center fs-5">
          <img src={user.avatarURL} alt="" className="td-img" />
          <div className="d-flex flex-column">
            <span style={{ fontWeight: "bold" }}>{user.name}</span>
            <span>{user.id}</span>
          </div>
        </div>
      </td>
      <td className="fs-4">{Object.keys(user.answers).length}</td>
      <td className="fs-4">{user.questions.length}</td>
    </tr>
  );
};

export default Row;
