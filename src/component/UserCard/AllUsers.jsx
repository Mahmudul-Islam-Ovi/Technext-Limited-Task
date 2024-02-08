import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading";
import useData from "../../hooks/useData";
import { useState } from "react";
const AllUsers = () => {
  const { users, loading } = useData();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  if (loading)
    return (
      <div>
        <Loading></Loading>
      </div>
    );

  //   const filteredUsers = users?.filter((user) =>
  //     `${user.firstName} ${user.lastName}`
  //       .toLowerCase()
  //       .includes(searchTerm.toLowerCase())
  //   );

  const filteredUsers = users
    ?.filter((user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "name":
          return `${a.firstName} ${a.lastName}`.localeCompare(
            `${b.firstName} ${b.lastName}`
          );
        case "email":
          return a.email.localeCompare(b.email);
        case "company":
          return a.company.name.localeCompare(b.company.name);
        default:
          return 0;
      }
    });

  const sortOptions = ["name", "email", "company"];
  return (
    <div>
      <div className="flex  gap-10 lg:flex-row flex-col  justify-center">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered input-error  w-full max-w-xs"
          />
        </div>
        <div className="flex justify-center">
          <select
            className="select select-warning max-w-xs"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort</option>
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex mt-10 flex-wrap gap-10 container justify-center mx-auto">
        {filteredUsers?.map((user) => (
          <div key={user.id} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={user.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <Link to={`/singleUser/${user.id}`} className="card-title">
                <h3>{`${user.firstName} ${user.lastName}`}</h3>
              </Link>
              <p>{user.email}</p>
              <p>
                Address: {user.address.address}, {user.address.state},
                {user.address.city}
              </p>
              <p>Company Name :{user.company.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
