"use client";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { MdSearch } from "react-icons/md";

const SearchBar = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      searchTerm: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!data.searchTerm) return router.push("/");

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: {
          searchTerm: data.searchTerm,
        },
      },
      { skipNull: true }
    );

    router.push(url);
    reset();
  };

  return (
    <div className="flex items-center">
      <input
        {...register("searchTerm")}
        autoComplete="off"
        type="text"
        placeholder="Search for something..."
        className="p-2 border border-gray-300 rounded-md focus:outline-none w-60"
      />
      <button
        onClick={handleSubmit(onSubmit)}
        className="bg-green-500 hover:bg-green-700 text-white p-2 rounded-md ml-2 flex items-center"
      >
        <MdSearch className="w-5 h-5 mr-2" />
        Search
      </button>
    </div>
  );
};

export default SearchBar;
