import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Home/Share/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripeKey = import.meta.env.VITE_Payment_Gateway_Pk;
let stripePromise = null;
if (stripeKey) {
  stripePromise = loadStripe(stripeKey);
}

const Payment = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-8 bg-white border border-slate-100 rounded-3xl shadow-xl">
        <SectionTitle
          heading="Card Payment"
          subHeading="Please confirm payment details below"
        />
        <div className="mt-8">
          {!stripeKey ? (
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-800 text-sm text-center">
              <p className="font-semibold mb-1">Stripe Key Missing</p>
              <p className="text-xs text-amber-700">
                Please set the <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">VITE_Payment_Gateway_Pk</code> environment variable in your configuration.
              </p>
            </div>
          ) : (
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;
