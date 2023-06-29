import SpinnerLoading from "./spinner";

export const ReturnSpinner = () => {
    return (
      <div className="flex sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4 mx-auto justify-center">
        <SpinnerLoading />
      </div>
    )
  }