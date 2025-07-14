import React from "react";

const CheckoutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-lg">
        <h1 className="text-4xl font-forum font-bold mb-6">Checkout</h1>
        <p className="text-lg font-satoshi mb-4">This is your checkout page. Add your payment and delivery details here!</p>
        {/* Add form fields and payment summary here */}
      </div>
    </div>
  );
};

export default CheckoutPage;
