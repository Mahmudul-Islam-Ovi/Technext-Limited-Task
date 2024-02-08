import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const useData = () => {
  const [users, setUsers] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div>
        <Loading></Loading>
      </div>
    );

  return { users, loading, setUsers };
};

export default useData;
