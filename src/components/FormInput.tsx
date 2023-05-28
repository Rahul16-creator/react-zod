import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserFormSchemaWithGeo } from "../models/User";
import { UserFormWithGeo } from "../type/User";

const FormInput = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm<UserFormWithGeo>({
    resolver: zodResolver(UserFormSchemaWithGeo),
  });

  const onSubmits: SubmitHandler<UserFormWithGeo> = (data) =>
    console.log(data);

  const showErrorMessage = (message: string) => (
    <p className="text-sm text-red-500 -mt-2 mb-3 tracking-wider">
      {message || "UnKnown error"}
    </p>
  );

  return (
    <div className="flex flex-col items-center h-full justify-center pt-4">
      <form
        onSubmit={handleSubmit(onSubmits)}
        className="xl:w-1/3 md:w-1/2 w-10/12"
      >
        <h3 className="text-lg uppercase text-start font-medium mb-3">Form</h3>

        <input
          placeholder="Name"
          className={`outline-none border-2 border-gray-500 w-full mb-2 py-2 px-2 text-sm rounded ${errors.name && "border-red-500"
            }`}
          {...register("name")}
        />
        {errors.name?.message &&
          showErrorMessage(errors.name?.message?.toString())}

        <input
          placeholder="UserName"
          className={`outline-none border-2 border-gray-500 w-full mb-2 py-2 px-2 text-sm rounded ${errors.username && "border-red-500"
            }`}
          {...register("username")}
        />
        {errors.username?.message &&
          showErrorMessage(errors.username?.message?.toString())}

        <input
          placeholder="Email"
          className={`outline-none border-2 border-gray-500 w-full mb-2 py-2 px-2 text-sm rounded ${errors.email && "border-red-500"
            }`}
          {...register("email")}
        />
        {errors.email?.message &&
          showErrorMessage(errors.email?.message?.toString())}

        <input
          placeholder="Phone number"
          className={`outline-none border-2 border-gray-500 w-full mb-2 py-2 px-2 text-sm rounded ${errors.phone && "border-red-500"
            }`}
          {...register("phone")}
        />
        {errors.phone?.message &&
          showErrorMessage(errors.phone?.message?.toString())}

        <input
          placeholder="Street"
          className={`outline-none border-2 border-gray-500 w-full mb-2 py-2 px-2 text-sm rounded ${errors.address?.street && "border-red-500"
            }`}
          {...register("address.street")}
        />
        {errors.address?.street?.message &&
          showErrorMessage(errors.address?.street?.message?.toString())}

        <input
          placeholder="Suite"
          className={`outline-none border-2 border-gray-500 w-full mb-2 py-2 px-2 text-sm rounded`}
          {...register("address.suite")}
        />

        <input
          placeholder="City"
          className={`outline-none border-2 border-gray-500 w-full mb-2 py-2 px-2 text-sm rounded ${errors.address?.city && "border-red-500"
            }`}
          {...register("address.city")}
        />
        {errors.address?.city?.message &&
          showErrorMessage(errors.address?.city?.message?.toString())}

        <input
          placeholder="Zip-Code"
          className={`outline-none border-2 border-gray-500 w-full mb-2 py-2 px-2 text-sm rounded ${errors.address?.zipcode && "border-red-500"
            }`}
          {...register("address.zipcode")}
        />
        {errors.address?.zipcode?.message &&
          showErrorMessage(errors.address?.zipcode?.message?.toString())}

        <input
          placeholder="Geo-lat"
          className={`outline-none border-2 border-gray-500 w-full mb-2 py-2 px-2 text-sm rounded ${errors.address?.geo?.lat && "border-red-500"
            }`}
          {...register("address.geo.lat")}
        />
        {errors.address?.geo?.lat?.message &&
          showErrorMessage(errors.address?.geo?.lat?.message?.toString())}

        <input
          placeholder="Geo-lng"
          className={`outline-none border-2 border-gray-500 w-full mb-2 py-2 px-2 text-sm rounded ${errors.address?.geo?.lng && "border-red-500"
            }`}
          {...register("address.geo.lng")}
        />
        {errors.address?.geo?.lng?.message &&
          showErrorMessage(errors.address?.geo?.lng?.message?.toString())}


        <input
          placeholder="Company name"
          className={`outline-none border-2 border-gray-500 w-full mb-2 py-2 px-2 text-sm rounded ${errors.company?.name && "border-red-500"
            }`}
          {...register("company.name")}
        />
        {errors.company?.name?.message &&
          showErrorMessage(errors.company?.name?.message?.toString())}


        <input
          placeholder="Company catchPhrase"
          className={`outline-none border-2 border-gray-500 w-full mb-2 py-2 px-2 text-sm rounded`}
          {...register("company.catchPhrase")}
        />

        <input
          placeholder="Company bs"
          className={`outline-none border-2 border-gray-500 w-full mb-2 py-2 px-2 text-sm rounded`}
          {...register("company.bs")}
        />



        <button
          className="bg-sky-500  w-full py-2 text-white rounded-lg mt-2 cursor-pointer"
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default FormInput;
