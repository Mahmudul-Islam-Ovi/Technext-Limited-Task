import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";

const SingleUser = () => {
  const [user, setUser] = useState([]);
  console.log(user);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  return (
    <div className="flex justify-center mt-5">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={user.image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h1 className="card-title">
            <h3>{`${user.firstName} ${user.lastName}`}</h3>
          </h1>
          <p>{user.email}</p>
          <p>
            Address: {user.address.address}, {user.address.state},
            {user.address.city}
          </p>
          <p>Company Name :{user.company.name}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
