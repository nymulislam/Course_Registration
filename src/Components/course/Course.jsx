/* eslint-disable react/jsx-key */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";
import Cart from "../cart/Cart";
Cart;

/* eslint-disable react/no-unknown-property */
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const maxCreditHrs = 20;
  const [sumPrice, setSumPrice] = useState(0);
  const [sumCreditHrs, setSumCreditHrs] = useState(0)
  
  useEffect(() => {
    fetch("./course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
    }, []);
    
    const handleSelectCourse = (course) => {
      const isAdded = selectedCourse.find(
        (addCourse) => addCourse.id === course.id
        );
        
    if (isAdded) {
      return toast.error("Course is already added!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } else if (course.hours + sumCreditHrs <= maxCreditHrs) {
      setSelectedCourse([...selectedCourse, course]);
      setSumCreditHrs(sumCreditHrs + course.hours);
      setSumPrice(sumPrice + parseFloat(course.price.slice(1)));
    } else if (course.hours + sumCreditHrs > maxCreditHrs) {
      toast.error("Cannot add course. Exceeds maximum credit hours!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Cannot add course. Below 0 credit hours!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <div className="md:flex gap-5 ">
        {/* course course section */}
        <div className="md:w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <div className="course w-full bg-base-100 shadow-xl p-4">
              <img
                src={course.image}
                alt="course image"
                className="rounded-xl mb-2"
              />
              <h2 className="text-left text-xl font-semibold mb-3">
                {course.title}
              </h2>
              <p className="text-left mb-3">{course.description}</p>
              <div className="flex justify-between mb-3 px-1">
                <div className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 1V23"
                      stroke="#1C1B1B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                      stroke="#1C1B1B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <h4>Price: {course.price}</h4>
                </div>
                <div className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 6.042C10.3516 4.56336 8.2144 3.74694 6 3.75C4.948 3.75 3.938 3.93 3 4.262V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.042C13.6483 4.56328 15.7856 3.74685 18 3.75C19.052 3.75 20.062 3.93 21 4.262V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.9969 13.6484 18.8134 12 20.292M12 6.042V20.292"
                      stroke="#1C1B1B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <h4>Credit: {course.hours}hr</h4>
                </div>
              </div>
              <button
                onClick={() => handleSelectCourse(course)}
                className="btn btn-warning px-20 bg-sky-600 text-white normal-case text-xl hover:bg-sky-500"
              >
                <ToastContainer
                />
                Select
              </button>
            </div>
          ))}
        </div>

        {/* course cart section */}
        <div className="w-full md:w-fit md:h-fit bg-base-100 shadow-xl mt-12 md:mt-5">
          <Cart selectedCourse={selectedCourse}
  sumCreditHrs={sumCreditHrs}
  remainingHrs={maxCreditHrs - sumCreditHrs}
  sumPrice={sumPrice}></Cart>
        </div>
      </div>
    </>
  );
};

export default Courses;
