"use client";

import Link from "next/link";
import { useState } from "react";
import { CircleCheckBig } from "lucide-react";
import BrochurePopup from "@/components/common/BrochurePopup";

const courses = [
  "All Courses",
  "Industrial Automation Training",
  "SCADA & HMI",
  "VFD Drive Training",
  "Electrical Design",
  "Industrial IoT Training",
  "Servo & Drive System",
  "Panel Design",
  "Customized Industrial Training",
  "PLC Vendor Training",
  "Corporate Training",
  "PLS-CADD Training",
  "Other"
];

const initialFormData = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  course: "",
  message: "",
};

export default function Hero() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Brochure Popup State
  const [showBrochurePopup, setShowBrochurePopup] = useState(false);

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/ContactApi", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ...formData,
          enquiryType: "GENERAL",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess("Enquiry submitted successfully!");

        setFormData(initialFormData);

        setTimeout(() => {
          setSuccess("");
        }, 3000);

        return;
      }

      const firstError =
        data.errors &&
        Object.values(data.errors)
          .flat()
          .find(
            (value) =>
              typeof value === "string"
          );

      setError(
        typeof firstError === "string"
          ? firstError
          : data.message ||
              "Something went wrong. Please check your details."
      );

    } catch (err) {
      console.error(
        "Home enquiry submission error:",
        err
      );

      setError(
        "Failed to submit enquiry. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative w-full min-h-[650px] lg:min-h-[550px]">

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/vdo/homebgvdo.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/60 to-black/50"></div>

        {/* Content */}
        <div className="relative max-w-[1610px] mx-auto px-8 md:px-12 py-14 lg:py-16 h-full flex items-center">

          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 w-full items-center">

            {/* Left Side Content */}
            <div className="text-white">

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-white mb-8">
                Become an Industrial Automation Engineer

                <span className="block text-white">
                  in 3–6 Months
                </span>
              </h1>

              {/* Highlights */}
              <div className="mb-12 space-y-4">

                {[
                  "Build Job-Ready Automation Skills",
                  "Live Industrial Projects",
                  "Placement Assistance with 100+ Hiring Partners",
                  "Training Since 2008",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <CircleCheckBig
                      size={20}
                      className="text-white shrink-0"
                    />

                    <p className="text-base md:text-lg text-white">
                      {item}
                    </p>
                  </div>

                ))}

              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">

                <Link
                  href="/contact"
                  className="bg-transparent text-white px-8 py-4 text-center rounded-tr-xl rounded-bl-xl font-semibold hover:bg-red-800 transition uppercase border tracking-wide"
                >
                  Book Free Demo Class
                </Link>

                {/* Brochure Popup Button */}
                <button
                  type="button"
                  onClick={() => setShowBrochurePopup(true)}
                  className="border border-white text-white px-8 py-4 text-center rounded-tr-xl rounded-bl-xl font-semibold hover:bg-white hover:text-black transition tracking-wide cursor-pointer"
                >
                  Download Course Brochure
                </button>

              </div>
            </div>

            {/* Enquiry Form */}
            <div className="w-full max-w-md lg:ml-auto" id="contact">

              <div className="bg-white backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 overflow-hidden">

                {/* Form Heading */}
                <div className="bg-white text-gray-900 border border-zinc-50 shadow-xs text-center py-4">

                  <h2 className="text-2xl font-bold mt-1 tracking-wide">
                    Enquiry Now
                  </h2>

                </div>

                <div className="p-6">

                  <p className="text-center text-sm text-gray-600 mb-6">
                    Get course details, fee structure and placement assistance information.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >

                    {/* FIRST NAME */}
                    <input
                      type="text"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                      className="input input-bordered border-gray-300 bg-white text-gray-800 w-full rounded-xl focus:border-[#801717]"
                    />

                    {/* PHONE */}
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      required
                      className="input input-bordered border-gray-300 bg-white text-gray-800 w-full rounded-xl focus:outline-none focus:border-[#801717]"
                    />

                    {/* EMAIL */}
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email Address"
                      className="input input-bordered border-gray-300 bg-white text-gray-800 w-full rounded-xl focus:border-[#801717]"
                    />

                    {/* MESSAGE */}
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Send Your Message"
                      className="textarea textarea-bordered border-gray-300 bg-white text-gray-800 w-full rounded-xl min-h-[50px] focus:outline-none focus:border-[#801717]"
                    />

                    {/* COURSE */}
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="w-full border px-4 py-3 text-gray-700 rounded-lg focus:outline-none focus:border-[#801717] bg-white"
                    >
                      <option value="">
                        Select Course
                      </option>

                      {courses.map((course) => (
                        <option
                          key={course}
                          value={course}
                        >
                          {course}
                        </option>
                      ))}

                    </select>

                    {/* Success Message */}
                    {success && (
                      <div className="alert alert-success shadow-lg">
                        <span>
                          {success}
                        </span>
                      </div>
                    )}

                    {/* Error Message */}
                    {error && (
                      <div className="alert alert-error">
                        <span>
                          {error}
                        </span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn bg-[#801717] hover:bg-red-900 border-none w-full text-white text-lg rounded-xl h-12 transition disabled:opacity-70"
                    >
                      {loading
                        ? "Submitting..."
                        : "Get Free Consultation"}
                    </button>

                  </form>

                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* BROCHURE POPUP */}
      <BrochurePopup
        isOpen={showBrochurePopup}
        onClose={() => setShowBrochurePopup(false)}
        brochureLink="/brochure/diac-brochure.pdf"
        courseName="Industrial Automation Training"
      />
    </>
  );
}
