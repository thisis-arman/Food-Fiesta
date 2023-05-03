import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex items-center justify-center py-20" id="error-page">
       <div>
       <img src="https://media.giphy.com/media/rZYf7RpRvRWOaMCCZz/giphy.gif" alt="" />
      <h1 className="text-4xl text-red-600 py-4 font-extrabold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="bg-red-200 rounded px-10 py-2 my-2 text-2xl text-red-500 font-bold">
        <i>{error.statusText || error.message}</i>
      </p>
       </div>
    </div>
  );
}