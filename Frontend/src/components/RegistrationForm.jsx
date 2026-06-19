import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function RegistrationForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:8000/api/enquiry", data);
      toast.success(res.data.message || "Registration Successful");
      reset();
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register" className="py-20 px-6 bg-[#fdfcf9] border-t border-slate-100">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
            Secure Your Seat
          </h2>
          <p className="text-sm text-slate-500">
            Fill in your operational details to receive your entry links.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-2xl p-6 md:p-8 space-y-4"
        >
          {/* Name Field */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-800"
              {...register("name", {
                required: "Name is required",
                minLength: { value: 3, message: "Minimum 3 characters" },
              })}
            />
            {errors.name && (
              <p className="text-rose-500 text-xs mt-1 font-medium">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-800"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
              })}
            />
            {errors.email && (
              <p className="text-rose-500 text-xs mt-1 font-medium">{errors.email.message}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Contact Number
            </label>
            <input
              type="text"
              placeholder="10 digit phone number"
              className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-800"
              {...register("phone", {
                required: "Phone is required",
                pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10 digit number" },
              })}
            />
            {errors.phone && (
              <p className="text-rose-500 text-xs mt-1 font-medium">{errors.phone.message}</p>
            )}
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-slate-900 hover:bg-slate-800 text-white py-3.5 px-4 rounded-xl font-bold text-sm tracking-wide transition-all disabled:opacity-50 shadow-md shadow-slate-900/10"
          >
            {loading ? "Processing Submission..." : "Complete Registration"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default RegistrationForm;