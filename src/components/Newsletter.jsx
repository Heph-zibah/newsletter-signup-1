import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Newsletter = () => {
const navigate = useNavigate();
    const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    // setIsValidEmail(isValid);
    // console.log("Email:", email);
    // console.log("Is Valid:", isValid);
    setIsValidEmail(isValid);
    return isValid;
  };

  // const handleSubmit = (e) => {
    // e.preventDefault();
    // const isValid = validateEmail(email);
    // setIsValidEmail(isValid);
    // if (isValidEmail) { 
      // navigate(`/success/${email}`);
    // }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateEmail(email);
    setIsValidEmail(isValid);
    if (isValid) {
      navigate(`/success/${email}`);
    }
    
  };
  return (
    <>
      <main className=" max-w-3xl md:mx-auto md:mt-20">
        <section className="bg-white md:p-5 rounded-3xl flex flex-col md:flex-row-reverse justify-between">
          <div className=" ">
            <img
              src="../assets/images/illustration-sign-up-mobile.svg"
              alt="mockup for mobile"
              className="md:hidden w-full"
            />
            <img
              src="../assets/images/illustration-sign-up-desktop.svg"
              alt="mockup for desktop"
              className="hidden md:block"
            />
          </div>
          <div className="text-darkSlateGrey px-8 md:px-5 mt-5 md:mt-0">
            <h1 className=" font-bold text-5xl">Stay updated!</h1>
            <p className="my-5">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul>
              <span className="flex items-start space-x-3">
                <img src="../assets/images/icon-list.svg" alt=" ckeck icon" />
                <li>Product discovery and building what matters</li>
              </span>
              <span className="flex items-start space-x-3 my-5">
                <img src="../assets/images/icon-list.svg" alt="check icon" />
                <li>Measuring to ensure updates are a success</li>
              </span>
              <span className="flex items-start space-x-3">
                <img src="../assets/images/icon-list.svg" alt="check icon" />
                <li>And much more!</li>
              </span>
            </ul>
            <form className="flex flex-col relative mt-5 ">
              {!isValidEmail && (
                <p className="text-tomato absolute top-0 right-0 text-xs">
                  Valid email required
                </p>
              )}
              <label htmlFor="email" className="mb-5 font-bold">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@company.com"
                className="rounded-lg border border-grey py-4 px-2 text-grey"
              />
              <button
                type="submit"
                className="text-white font-bold bg-darkSlateGrey px-3 py-4 rounded-lg w-full mt-5 hover:bg-tomato hover:shadow-lg hover:shadow-tomato"
                onClick={handleSubmit}
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Newsletter;
