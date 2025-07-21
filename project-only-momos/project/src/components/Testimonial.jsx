import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const testimonials = [
  {
    name: "Anna Deynah",
    role: "UX Designer",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    stars: 5,
  },
  {
    name: "John Doe",
    role: "Web Developer",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img2.jpg",
    text: "Ut enim ad minima veniam, quis nostrum exercitationem.",
    stars: 5,
  },
  {
    name: "Maria Kate",
    role: "Photographer",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img3.jpg",
    text: "At vero eos et accusamus et iusto odio dignissimos.",
    stars: 4,
  },
  {
    name: "Ravi Kumar",
    role: "Backend Developer",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img4.jpg",
    text: "Backend engineer with 5 years of experience in node.",
    stars: 4,
  },
  {
    name: "Sofia Lee",
    role: "UI Designer",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img5.jpg",
    text: "Designing is my passion. I believe in clean UI.",
    stars: 5,
  },
  {
    name: "Raj Patel",
    role: "DevOps Engineer",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img6.jpg",
    text: "Cloud and CI/CD expert for scaling startups.",
    stars: 5,
  },
];

const TestimonialCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < itemsPerPage; i++) {
      visible.push(testimonials[(startIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Testimonials</h2>
      <div className="row justify-content-center">
        {visibleTestimonials.map((item, index) => (
          <div className="col-md-4 text-center mb-4" key={index}>
            <img
              src={item.image}
              className="rounded-circle mb-3"
              style={{ width: "100px", height: "100px" }}
              alt={item.name}
            />
            <h5>{item.name}</h5>
            <p className="text-muted">{item.role}</p>
            <p>❝ {item.text} ❞</p>
            <p style={{ color: "gold" }}>
              {"★".repeat(item.stars)}
              {"☆".repeat(5 - item.stars)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
