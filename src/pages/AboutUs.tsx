import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "daisyui/dist/full.css"; // Daisy UI

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-300 p-10">
      {/* Company Overview */}
      <section data-aos="fade-up" className="text-center my-16">
        <h1 className="text-4xl font-bold mb-4">About Our Company</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Founded in [Year], we are committed to delivering high-quality fitness equipment. Our mission is to empower fitness enthusiasts by providing top-notch products and services.
        </p>
      </section>

      {/* Team Introduction */}
      <section className="my-16">
        <h2 data-aos="fade-right" className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 w-80"
              data-aos="fade-up"
            >
              <figure className="px-10 pt-10">
                <img src={member.photo} alt={member.name} className="rounded-full w-32" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{member.name}</h2>
                <p className="text-gray-600">{member.role}</p>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="my-16">
        <h2 data-aos="fade-left" className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="flex flex-wrap justify-center items-center  gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card text-center bg-primary text-primary-content shadow-lg transition-transform hover:scale-105"
              data-aos="zoom-in"
            >
              <div className="card-body">
                <h2 className="card-title text-center">{testimonial.name}</h2>
                <p className="italic">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Information */}
      <footer className="text-center my-16" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-2">Email: contact@fitnesscompany.com</p>
        <p className="mb-2">Phone: (123) 456-7890</p>
        <p>Address: 123 Fitness St, Muscle City</p>
        <p className="mt-4 text-blue-600 cursor-pointer">We’d love to hear from you!</p>
      </footer>
    </div>
  );
};

// Example data
const teamMembers = [
  { name: "John Doe", role: "CEO", bio: "Fitness enthusiast and entrepreneur.", photo: "/path-to-image.jpg" },
  { name: "Jane Smith", role: "CTO", bio: "Tech expert with a passion for innovation.", photo: "/path-to-image.jpg" },
  // More team members...
];

const testimonials = [
  { name: "Sultan", quote: "Excellent products and fast shipping!" },
  { name: "Hablu ", quote: "The customer service was outstanding!" },
  // More testimonials...
];

export default AboutUs;
