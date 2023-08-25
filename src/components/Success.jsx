import { useParams } from "react-router-dom";

const Success = () => {

  const {email} = useParams()

  return (
    <>
      <main className=" max-w-sm md:mx-auto md:mt-20 sm:flex sm:flex-col sm:justify-center  sm:items-center">
        <section className="bg-white px-5 md:p-5 rounded-3xl mt-24 ">
          <img src="/src/assets/icon-success.svg" alt="check icon" />
          <h1 className="font-bold text-4xl my-5 text-darkSlateGrey">
            Thanks for subscribing!
          </h1>
          <p className="text-sm text-darkSlateGrey">
            A confirmation email has been sent to{" "}
            <span className=" font-bold">{email}</span>. Please open it and
            click the button inside to confirm your subscription.
          </p>
          <button
            type="submit"
            className="font-bold text-white bg-darkSlateGrey px-3 py-5 rounded-lg w-full mt-4 hover:shadow-lg hover:shadow-tomato hover:bg-tomato "
          >
            Dismiss message
          </button>
        </section>
      </main>
    </>
  );
}

export default Success