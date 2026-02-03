import { createUserAction } from "../actions/user.actions";

const Form = () => {
  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact Form</h2>
        <p className="text-gray-500 mb-6">Please fill in your details below.</p>

        <form action={createUserAction} className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
