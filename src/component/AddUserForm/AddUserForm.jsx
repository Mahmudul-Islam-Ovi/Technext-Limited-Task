import { useForm } from "react-hook-form";

const AddUserForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    // post data to server
    await fetch("https://dummyjson.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // after post data form should be reset

    reset();
  };

  return (
    <div className="flex justify-center">
      <form
        className=" bg-slate-300  p-10 rounded-3xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col lg:flex-row gap-5">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">First Name</span>
            </div>
            <input
              {...register("firstName", {
                required: true,
              })}
              type="text"
              placeholder="First Name"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.firstName && (
              <p className="text-red-700">First Name is required.</p>
            )}
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Last Name</span>
            </div>
            <input
              {...register("lastName", {
                required: true,
              })}
              type="text"
              placeholder="Last Name"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.lastName && (
              <p className="text-red-700">Last Name is required.</p>
            )}
          </label>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Street</span>
            </div>
            <input
              {...register("street", {
                required: true,
              })}
              type="text"
              placeholder="Street"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.street && (
              <p className="text-red-700">Street is required.</p>
            )}
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">State</span>
            </div>
            <input
              {...register("state", {
                required: true,
              })}
              type="text"
              placeholder="State"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.state && <p className="text-red-700">State is required.</p>}
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">City</span>
            </div>
            <input
              {...register("City", {
                required: true,
              })}
              type="text"
              placeholder="City"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.City && <p className="text-red-700">City is required.</p>}
          </label>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              {...register("email", {
                required: true,
              })}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && <p className="text-red-700">Email is required.</p>}
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Company Name</span>
            </div>
            <input
              {...register("company", {
                required: true,
              })}
              type="text"
              placeholder="Company Name"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.company && (
              <p className="text-red-700">Company Name is required.</p>
            )}
          </label>
        </div>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Image</span>
          </div>
          <input
            {...register("imageUrl", {
              required: true,
            })}
            type="file"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.imageUrl && (
            <p className="text-red-700">Image is required.</p>
          )}
        </label>

        <div className="mt-5">
          <button className="rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500">
            <span className=" font-bold ml-8 transform group-hover:translate-x-10 transition-all duration-300">
              Add User
            </span>
            <span className="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
              <svg
                className="svg w-8 t"
                fill="none"
                height={24}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                width={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1={12} x2={12} y1={5} y2={19} />
                <line x1={5} x2={19} y1={12} y2={12} />
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
