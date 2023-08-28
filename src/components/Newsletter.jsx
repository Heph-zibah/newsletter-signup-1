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
      <main className=" max-w-3xl md:mx-auto md:mt-2 hidden">
        <section className="bg-white md:p-5 rounded-3xl flex flex-col md:flex-row-reverse justify-between">
          <div className=" ">
            <img
              src="src/assets/illustration-sign-up-mobile.svg"
              alt="mockup for mobile"
              className="md:hidden w-full"
            />
            <img
              src="src/assets/illustration-sign-up-desktop.svg"
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
                <img src="src/assets/icon-list.svg" alt=" ckeck icon" />
                <li>Product discovery and building what matters</li>
              </span>
              <span className="flex items-start space-x-3 my-5">
                <img src="src/assets/icon-list.svg" alt="check icon" />
                <li>Measuring to ensure updates are a success</li>
              </span>
              <span className="flex items-start space-x-3">
                <img src="src/assets/icon-list.svg" alt="check icon" />
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

      {/* ONLINE ORDER SECTION */}
      {/* Order pop up */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto text-center rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl">
            <h1 className="text-[#090300] text-xl font-semibold">
              Online orders
            </h1>
          </div>
          <div className="text-[#968880] text-sm pt-6 space-y-4">
            <p className="text-[#090300] text-lg font-semibold">
              Order ID : #1234567
            </p>
            <p> Sat, 31st Aug 2023 at 1 : 00pm</p>
            <p>Payment type : Cash</p>
            <p>Order type : Pickup</p>
            <p>Pickup time : Sat, 31st Aug 2023 at 5pm</p>
          </div>
          <div className="flex items-center justify-center space-x-5 mt-6">
            <button className="text-[#E65300] border border-[#E65300] rounded-lg py-2  w-[188px]">
              Close
            </button>
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px]">
              View order
            </button>
          </div>
        </div>
      </section>

      {/* accept order pop up */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto text-center rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl">
            <h1 className="text-[#090300] text-xl font-semibold">
              Online orders
            </h1>
          </div>
          <div className="text-[#968880] text-sm pt-6 space-y-4 flex flex-col items-center justify-center">
            <img
              src="/src/assets/tastyt/info-circle.svg"
              alt="info circle icon"
            />
            <p className="text-[#090300] text-lg font-semibold">
              Are you sure you want to accept this order?
            </p>
            <p> You might not be able to cancel this order</p>
          </div>
          <div className="flex items-center justify-center space-x-5 mt-6">
            <button className="text-[#E65300] border border-[#E65300] rounded-lg py-2  w-[188px] flex items-center justify-center gap-2">
              <img
                src="/src/assets/tastyt/close-circle.svg"
                alt="reject icon"
              />
              Reject
            </button>
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px] flex items-center justify-center gap-2">
              <img src="/src/assets/tastyt/tick-circle.svg" alt="accept icon" />
              Accept
            </button>
          </div>
        </div>
      </section>

      {/* reject order pop up */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto text-center rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl">
            <h1 className="text-[#090300] text-xl font-semibold">
              Online orders
            </h1>
          </div>
          <div className="text-[#968880] text-sm pt-6 space-y-4 flex flex-col items-center justify-center">
            <img
              src="/src/assets/tastyt/info-circle.svg"
              alt="info circle icon"
            />
            <p className="text-[#090300] text-lg font-semibold">
              Are you sure you want to reject this order?
            </p>
            <p> You might not be able to accept this order</p>
          </div>
          <div className="flex items-center justify-center space-x-5 mt-6">
            <button className="text-[#E65300] border border-[#E65300] rounded-lg py-2  w-[188px] flex items-center justify-center gap-2">
              <img
                src="/src/assets/tastyt/close-circle.svg"
                alt="reject icon"
              />
              Reject
            </button>
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px] flex items-center justify-center gap-2">
              <img src="/src/assets/tastyt/tick-circle.svg" alt="accept icon" />
              Accept
            </button>
          </div>
        </div>
      </section>

      {/* Order rejected pop up */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto text-center rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl">
            <h1 className="text-[#090300] text-xl font-semibold">
              Online orders
            </h1>
          </div>
          <div className="text-[#968880] text-sm pt-6 space-y-4 flex flex-col items-center justify-center">
            <img src="/src/assets/tastyt/reject-circle.svg" alt="reject icon" />
            <p className="text-[#090300] font-medium">Order rejected</p>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px] ">
              Okay
            </button>
          </div>
        </div>
      </section>

      {/* Order accepted pop up */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto text-center rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl">
            <h1 className="text-[#090300] text-xl font-semibold">
              Online orders
            </h1>
          </div>
          <div className="text-[#968880] text-sm pt-6 space-y-4 flex flex-col items-center justify-center">
            <img src="/src/assets/tastyt/accept-circle.svg" alt="reject icon" />
            <p className="text-[#090300] font-medium">Order accepted</p>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px] ">
              Okay
            </button>
          </div>
        </div>
      </section>

      {/* PICKUP ORDER SECTION */}
      {/* Payment Option pop up */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto  rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl relative">
            <h1 className="text-[#090300] text-xl font-semibold text-center">
              Payment option
            </h1>
            <img
              src="/src/assets/tastyt/close-circle.svg"
              alt="close circle"
              className="absolute right-5 top-8 w-6"
            />
          </div>
          <div className="text-[#968880] text-sm pt-6 space-y-4 px-10">
            <p className="text-[#090300] font-semibold text-sm">
              Payment option
            </p>
            <div className="flex items-center gap-5">
              <div className="border border-[#EBE9E9] py-3 w-[134px] rounded-lg flex items-center justify-center gap-2">
                <img src="/src/assets/tastyt/card-pos.svg" alt="card icon" />
                <p>Card</p>
              </div>
              <div className="border border-[#EBE9E9] py-3 w-[134px] rounded-lg flex items-center justify-center gap-2">
                <img src="/src/assets/tastyt/moneys.svg" alt="cash icon" />
                <p>Cash</p>
              </div>
              <div className="border border-[#EBE9E9] py-3 w-[134px] rounded-lg flex items-center justify-center gap-2">
                <img src="/src/assets/tastyt/link.svg" alt="link icon" />
                <p>Payment link</p>
              </div>
            </div>
          </div>
          <div className=" mt-8 mx-10">
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px] opacity-50">
              Proceed
            </button>
          </div>
          <div className="px-5 mt-20">
            <p className="text-[#968880]">1 0f 3</p>
          </div>
        </div>
      </section>

      {/* Order sent to kitchen pop up */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto text-center rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl">
            <h1 className="text-[#090300] text-xl font-semibold">Order Sent</h1>
          </div>
          <div className="text-[#968880] text-sm pt-6 space-y-4 flex flex-col items-center justify-center">
            <img src="/src/assets/tastyt/accept-circle.svg" alt="reject icon" />
            <p className="text-[#090300] font-medium">
              Order has been sent to the kitchen
            </p>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px] ">
              Okay
            </button>
          </div>
        </div>
      </section>

      {/* Card Payment Option pop up */}
      {/* Do you want to reject or accept popup */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto text-center rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl">
            <h1 className="text-[#090300] text-xl font-semibold">
              Card payment
            </h1>
          </div>
          <div className="text-[#968880] text-sm pt-6 space-y-4 flex flex-col items-center justify-center">
            <img
              src="/src/assets/tastyt/info-circle.svg"
              alt="info circle icon"
            />
            <p className="text-[#090300] text-lg font-semibold">
              Are you sure you want to be paid with card?
            </p>
            <p> The customer will pay with their card before pickup </p>
          </div>
          <div className="flex items-center justify-center space-x-5 mt-6">
            <button className="text-[#E65300] border border-[#E65300] rounded-lg py-2  w-[188px] flex items-center justify-center gap-2">
              <img
                src="/src/assets/tastyt/close-circle.svg"
                alt="reject icon"
              />
              Reject
            </button>
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px] flex items-center justify-center gap-2">
              <img src="/src/assets/tastyt/tick-circle.svg" alt="accept icon" />
              Accept
            </button>
          </div>
        </div>
      </section>

      {/* payment with card accepted */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto text-center rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl">
            <h1 className="text-[#090300] text-xl font-semibold">
              Card payment
            </h1>
          </div>
          <div className="text-[#968880] text-sm pt-6 space-y-4 flex flex-col items-center justify-center">
            <img src="/src/assets/tastyt/accept-circle.svg" alt="reject icon" />
            <p className="text-[#090300] font-medium">
              You have accepted to be paid with card before pickup
            </p>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px] ">
              Okay
            </button>
          </div>
        </div>
      </section>

      {/* payment with card rejected */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto text-center rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl">
            <h1 className="text-[#090300] text-xl font-semibold">
              Card Payment
            </h1>
          </div>
          <div className="text-[#968880] text-sm pt-6 space-y-4 flex flex-col items-center justify-center">
            <img src="/src/assets/tastyt/reject-circle.svg" alt="reject icon" />
            <p className="text-[#090300] font-medium">
              You rejected to be paid with card before pickup
            </p>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px] ">
              Okay
            </button>
          </div>
        </div>
      </section>

      {/* transaction processing */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto text-center rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl relative">
            <h1 className="text-[#090300] text-xl font-semibold">Payment</h1>
            <img
              src="/src/assets/tastyt/close-circle.svg"
              alt="close circle"
              className="absolute right-5 top-8 w-6"
            />
          </div>
          <div className="text-[#968880] text-sm pt-6 space-y-4 flex flex-col items-center justify-center">
            <img
              src="/src/assets/tastyt/processing.svg"
              alt="processing icon"
            />
            <p className="text-[#090300] font-medium">Transaction processing</p>
          </div>
        </div>
      </section>

      {/* payment with card received */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto text-center rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl">
            <h1 className="text-[#090300] text-xl font-semibold">Payment</h1>
          </div>
          <div className="text-[#968880] text-sm pt-6 space-y-4 flex flex-col items-center justify-center">
            <img src="/src/assets/tastyt/accept-circle.svg" alt="accept icon" />
            <p className="text-[#090300] font-medium">Payment received</p>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px] ">
              Okay
            </button>
          </div>
        </div>
      </section>

      {/* Cash Payment Option pop up */}
      {/* Do you want to reject or accept popup */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto text-center rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl">
            <h1 className="text-[#090300] text-xl font-semibold">
              Cash payment
            </h1>
          </div>
          <div className="text-[#968880] text-sm pt-6 space-y-4 flex flex-col items-center justify-center">
            <img
              src="/src/assets/tastyt/info-circle.svg"
              alt="info circle icon"
            />
            <p className="text-[#090300] text-lg font-semibold">
              Are you sure you want to be paid with cash?
            </p>
            <p> The customer will pay with their cash before pickup </p>
          </div>
          <div className="flex items-center justify-center space-x-5 mt-6">
            <button className="text-[#E65300] border border-[#E65300] rounded-lg py-2  w-[188px] flex items-center justify-center gap-2">
              <img
                src="/src/assets/tastyt/close-circle.svg"
                alt="reject icon"
              />
              Reject
            </button>
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px] flex items-center justify-center gap-2">
              <img src="/src/assets/tastyt/tick-circle.svg" alt="accept icon" />
              Accept
            </button>
          </div>
        </div>
      </section>

      {/* payment with cash accepted */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto text-center rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl">
            <h1 className="text-[#090300] text-xl font-semibold">
              Cash payment
            </h1>
          </div>
          <div className="text-[#968880] text-sm pt-6 space-y-4 flex flex-col items-center justify-center">
            <img src="/src/assets/tastyt/accept-circle.svg" alt="reject icon" />
            <p className="text-[#090300] font-medium">
              You have accepted to be paid with cash before pickup
            </p>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px] ">
              Okay
            </button>
          </div>
        </div>
      </section>

      {/* payment with cash rejected */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto text-center rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl">
            <h1 className="text-[#090300] text-xl font-semibold">
              Cash Payment
            </h1>
          </div>
          <div className="text-[#968880] text-sm pt-6 space-y-4 flex flex-col items-center justify-center">
            <img src="/src/assets/tastyt/reject-circle.svg" alt="reject icon" />
            <p className="text-[#090300] font-medium">
              You rejected to be paid with cash before pickup
            </p>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px] ">
              Okay
            </button>
          </div>
        </div>
      </section>

      {/* Payment link pop up */}
      {/* contact number */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto  rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl relative">
            <h1 className="text-[#090300] text-xl font-semibold text-center">
              Contact number
            </h1>
            <img
              src="/src/assets/tastyt/close-circle.svg"
              alt="close circle"
              className="absolute right-5 top-8 w-6"
            />
          </div>
          <form className="text-[#968880] text-sm mt-10 space-y-4 px-10 flex justify-center items-start relative">
            <div className="flex flex-col">
              <label htmlFor="">10 digit phone number</label>
              <input
                type="number"
                className="border border-[#EBE9E9] w-[340px] rounded-lg py-3 mt-2"
              />
            </div>
            <button className="absolute right-6 top-3">
              <img src="/src/assets/tastyt/arrow-right.svg" alt="arrow right" />
            </button>
          </form>

          <div className="px-5 mt-20">
            <p className="text-[#968880]">1 0f 2</p>
          </div>
        </div>
      </section>

      {/* Payment Option for link pop up */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto  rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl relative">
            <h1 className="text-[#090300] text-xl font-semibold text-center">
              Payment option
            </h1>
            <img
              src="/src/assets/tastyt/close-circle.svg"
              alt="close circle"
              className="absolute right-5 top-8 w-6"
            />
          </div>
          <div className="text-[#968880] text-sm pt-6  px-10 relative flex items-center">
            <button className="">
              <img src="/src/assets/tastyt/arrow-left.svg" alt="arrow left" />
            </button>
            <p className="text-[#090300] font-semibold text-sm ml-2">
              Send payment link to
            </p>
          </div>
          <p className="text-sm text-[#090300] px-12 font-semibold pt-6">
            0912348769
          </p>
          <div className=" mt-8 mx-12">
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px] font-medium">
              Send
            </button>
          </div>
          <div className="px-5 mt-20">
            <p className="text-[#968880]">2 0f 2</p>
          </div>
        </div>
      </section>

      {/* payment link sent */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto text-center rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl">
            <h1 className="text-[#090300] text-xl font-semibold">
              Send payment link
            </h1>
          </div>
          <div className="text-[#968880] text-sm pt-6 space-y-4 flex flex-col items-center justify-center">
            <img src="/src/assets/tastyt/accept-circle.svg" alt="accept icon" />
            <p className="text-[#090300] font-medium">
              Payment link has been sent
            </p>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px] ">
              Okay
            </button>
          </div>
        </div>
      </section>

      {/* payment with link received */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto text-center rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl">
            <h1 className="text-[#090300] text-xl font-semibold">Payment</h1>
          </div>
          <div className="text-[#968880] text-sm pt-6 space-y-4 flex flex-col items-center justify-center">
            <img src="/src/assets/tastyt/accept-circle.svg" alt="accept icon" />
            <p className="text-[#090300] font-medium">Payment received</p>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px] ">
              Okay
            </button>
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      {/* contact number */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto  rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl relative">
            <h1 className="text-[#090300] text-xl font-semibold text-center">
              Contact number
            </h1>
            <img
              src="/src/assets/tastyt/close-circle.svg"
              alt="close circle"
              className="absolute right-5 top-8 w-6"
            />
          </div>
          <form className="text-[#968880] text-sm mt-10 space-y-4 px-10 flex justify-center items-start relative">
            <div className="flex flex-col">
              <label htmlFor="">10 digit phone number</label>
              <input
                type="number"
                className="border border-[#EBE9E9] w-[340px] rounded-lg py-3 mt-2"
              />
            </div>
            <button className="absolute right-6 top-3">
              <img src="/src/assets/tastyt/arrow-right.svg" alt="arrow right" />
            </button>
          </form>

          <div className="px-5 mt-20">
            <p className="text-[#968880]">1 0f 2</p>
          </div>
        </div>
      </section>

      {/* postal code */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto  rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl relative">
            <h1 className="text-[#090300] text-xl font-semibold text-center">
              Contact address
            </h1>
            <img
              src="/src/assets/tastyt/close-circle.svg"
              alt="close circle"
              className="absolute right-5 top-8 w-6"
            />
          </div>
          <form className="text-[#968880] text-sm mt-10  px-10 flex justify-center items-start relative">
            <button className="absolute left-6 top-3">
              <img src="/src/assets/tastyt/arrow-left.svg" alt="arrow right" />
            </button>
            <div className="flex flex-col">
              <label htmlFor="">Postal code</label>
              <input
                type="number"
                className="border border-[#EBE9E9] w-[340px] rounded-lg py-3 mt-2"
              />
            </div>
            <button className="absolute right-6 top-3">
              <img src="/src/assets/tastyt/arrow-right.svg" alt="arrow right" />
            </button>
          </form>

          <div className="px-5 mt-20">
            <p className="text-[#968880]">2 0f 2</p>
          </div>
        </div>
      </section>

      {/* Payment option:on delivery */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto  rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl relative">
            <h1 className="text-[#090300] text-xl font-semibold text-center">
              Payment option
            </h1>
            <img
              src="/src/assets/tastyt/close-circle.svg"
              alt="close circle"
              className="absolute right-5 top-8 w-6"
            />
          </div>
          <div className="text-[#968880] text-sm pt-6 space-y-4 px-5">
            <div className="flex">
              <button className="">
                <img
                  src="/src/assets/tastyt/arrow-left.svg"
                  alt="arrow right"
                />
              </button>
              <p className="text-[#090300] font-semibold text-sm ml-4">
                Payment option
              </p>
            </div>
            <div className="flex items-center gap-5 px-9">
              <div className="border border-[#EBE9E9] py-3 w-[134px] rounded-lg flex items-center justify-center gap-2">
                <img src="/src/assets/tastyt/moneys.svg" alt="cash icon" />
                <p>Pay on delivery</p>
              </div>
              <div className="border border-[#EBE9E9] py-3 w-[134px] rounded-lg flex items-center justify-center gap-2">
                <img src="/src/assets/tastyt/link.svg" alt="link icon" />
                <p>Payment link</p>
              </div>
            </div>
          </div>
          <div className=" mt-8 mx-14">
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px] opacity-50">
              Proceed
            </button>
          </div>
          <div className="px-5 mt-20">
            <p className="text-[#968880]">3 0f 3</p>
          </div>
        </div>
      </section>

      {/* Do you want to reject or accept payment on delivery popup */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto text-center rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl">
            <h1 className="text-[#090300] text-xl font-semibold">
              Pay on delivery
            </h1>
          </div>
          <div className="text-[#968880] text-sm pt-6 space-y-4 flex flex-col items-center justify-center">
            <img
              src="/src/assets/tastyt/info-circle.svg"
              alt="info circle icon"
            />
            <p className="text-[#090300] text-lg font-semibold">
              Are you sure you want to be paid on delivery?
            </p>
            <p> You might not be able to change this payment option</p>
          </div>
          <div className="flex items-center justify-center space-x-5 mt-6">
            <button className="text-[#E65300] border border-[#E65300] rounded-lg py-2  w-[188px] flex items-center justify-center gap-2">
              <img
                src="/src/assets/tastyt/close-circle.svg"
                alt="reject icon"
              />
              Reject
            </button>
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px] flex items-center justify-center gap-2">
              <img src="/src/assets/tastyt/tick-circle.svg" alt="accept icon" />
              Accept
            </button>
          </div>
        </div>
      </section>

      {/* Order rejected pop up */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto text-center rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl">
            <h1 className="text-[#090300] text-xl font-semibold">
              Pay on delivery
            </h1>
          </div>
          <div className="text-[#968880] text-sm pt-6 space-y-4 flex flex-col items-center justify-center">
            <img src="/src/assets/tastyt/reject-circle.svg" alt="reject icon" />
            <p className="text-[#090300] font-medium">
              Yor rejected to be paid on delivery
            </p>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px] ">
              Okay
            </button>
          </div>
        </div>
      </section>

      {/* Order accepted pop up */}
      <section className="hidden">
        <div className="bg-white max-w-xl mx-auto text-center rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl">
            <h1 className="text-[#090300] text-xl font-semibold">
              Pay on delivery
            </h1>
          </div>
          <div className="text-[#968880] text-sm pt-6 space-y-4 flex flex-col items-center justify-center">
            <img src="/src/assets/tastyt/accept-circle.svg" alt="accept icon" />
            <p className="text-[#090300] font-medium">
              You have accepted to be paid on delivery
            </p>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px] ">
              Okay
            </button>
          </div>
        </div>
      </section>

      {/* Payment link */}
      {/* Payment Option for link pop up */}
      <section className="">
        <div className="bg-white max-w-xl mx-auto  rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl relative">
            <h1 className="text-[#090300] text-xl font-semibold text-center">
              Payment option
            </h1>
            <img
              src="/src/assets/tastyt/close-circle.svg"
              alt="close circle"
              className="absolute right-5 top-8 w-6"
            />
          </div>
          <div className="text-[#968880] text-sm pt-6  px-10 relative flex items-center">
            <button className="">
              <img src="/src/assets/tastyt/arrow-left.svg" alt="arrow left" />
            </button>
            <p className="text-[#090300] font-semibold text-sm ml-2">
              Send payment link to
            </p>
          </div>
          <p className="text-sm text-[#090300] px-12 font-semibold pt-6">
            0912348769
          </p>
          <div className=" mt-8 mx-12">
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px] font-medium">
              Send
            </button>
          </div>
          <div className="px-5 mt-20">
            <p className="text-[#968880]">2 0f 2</p>
          </div>
        </div>
      </section>
      {/* payment link sent */}
      <section className="">
        <div className="bg-white max-w-xl mx-auto text-center rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl">
            <h1 className="text-[#090300] text-xl font-semibold">
              Send payment link
            </h1>
          </div>
          <div className="text-[#968880] text-sm pt-6 space-y-4 flex flex-col items-center justify-center">
            <img src="/src/assets/tastyt/accept-circle.svg" alt="accept icon" />
            <p className="text-[#090300] font-medium">
              Payment link has been sent
            </p>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px] ">
              Okay
            </button>
          </div>
        </div>
      </section>

      {/* payment with link received */}
      <section className="">
        <div className="bg-white max-w-xl mx-auto text-center rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl">
            <h1 className="text-[#090300] text-xl font-semibold">Payment</h1>
          </div>
          <div className="text-[#968880] text-sm pt-6 space-y-4 flex flex-col items-center justify-center">
            <img src="/src/assets/tastyt/accept-circle.svg" alt="accept icon" />
            <p className="text-[#090300] font-medium">Payment received</p>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px] ">
              Okay
            </button>
          </div>
        </div>
      </section>

      {/* Order sent to kitchen pop up */}
      <section className="">
        <div className="bg-white max-w-xl mx-auto text-center rounded-xl mt-10 pb-6">
          <div className="bg-[#FADDCC] border-b border-b-[#E65300] py-6 rounded-t-xl">
            <h1 className="text-[#090300] text-xl font-semibold">Order Sent</h1>
          </div>
          <div className="text-[#968880] text-sm pt-6 space-y-4 flex flex-col items-center justify-center">
            <img src="/src/assets/tastyt/accept-circle.svg" alt="reject icon" />
            <p className="text-[#090300] font-medium">
              Order has been sent to the kitchen
            </p>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="text-white bg-[#E65300] rounded-lg py-2  w-[188px] ">
              Okay
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
