import SpinnerLoading from "./spinner";

export const ReturnSpinner = () => {
    return (
      <div className="flex sm:w-1/2 p-4 mx-auto justify-center">
        <SpinnerLoading />
      </div>
    )
  }