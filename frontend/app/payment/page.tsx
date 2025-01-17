import React, { useState } from "react";
import axios from "axios";

const Payment = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("/api/lipa-na-mpesa", {
        phoneNumber,
        amount,
      });
      setMessage(response.data.message || "Payment initiated successfully!");
    } catch (error: any) {
      setMessage(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-md mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-6">Make a Payment</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-semibold mb-2"
            >
              Phone Number (M-Pesa)
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 254712345678"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-sm font-semibold mb-2"
            >
              Amount (KES)
            </label>
            <input
              type="number"
              id="amount"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow-md ${
              loading ? "opacity-50" : "hover:bg-blue-700"
            } transition`}
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>
        {message && (
          <div
            className={`mt-4 p-4 rounded-lg text-center ${
              message.toLowerCase().includes("success")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
