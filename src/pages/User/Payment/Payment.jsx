import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Home/Share/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// Add your publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);

const Payment = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-8 bg-white border border-slate-100 rounded-3xl shadow-xl">
        <SectionTitle
          heading="Card Payment"
          subHeading="Please confirm payment details below"
        />
        <div className="mt-8">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
