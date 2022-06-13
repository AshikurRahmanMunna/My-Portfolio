import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import React, { useRef } from "react";
import "./ContactMe.css";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const form = useRef();
  const handleSendEmail = () => {
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          reset();
        },
        (error) => {
          toast.success("Something wen't wrong", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };
  return (
    <div className="my-6">
      <h2 className="text-5xl font-bold text-white font-raleway text-center mb-4 border-b-secondary">
        Contact <span className="text-primary">Me</span>
      </h2>
      <div className="flex container mx-auto lg:px-12 items-center justify-center">
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <div>
              <FontAwesomeIcon
                className="text-4xl text-primary mr-2"
                icon={faPhone}
              />
            </div>
            <div>
              <h4 className="text-primary text-2xl">Phone</h4>
              <a className="text-white" href="tel:+8801715808691">
                +8801715808691
              </a>
              ,{" "}
              <a className="text-white" href="tel:+8801819475655">
                +8801819475655
              </a>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div>
              <FontAwesomeIcon
                className="text-4xl text-primary mr-2"
                icon={faWhatsapp}
              />
            </div>
            <div>
              <h4 className="text-primary text-2xl">Whatsapp</h4>
              <a
                rel="noopener noreferrer"
                target={"_blank"}
                className="text-white"
                href="https://wa.me/+8801715808691"
              >
                +8801715808691
              </a>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div>
              <FontAwesomeIcon
                className="text-4xl text-primary mr-2"
                icon={faEnvelope}
              />
            </div>
            <div>
              <h4 className="text-primary text-2xl">Email</h4>
              <a
                className="text-white"
                href="mailto:ashikurrahmanmunna3@gmail.com"
              >
                ashikurrahmanmunna3@gmail
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <FontAwesomeIcon
                className="text-4xl text-primary mr-2"
                icon={faLocationDot}
              />
            </div>
            <div>
              <h4 className="text-primary text-2xl">Location</h4>
              <a
                rel="noopener noreferrer"
                target={"_blank"}
                className="text-white"
                href="https://www.google.com.bd/maps/place/Mulibash+Bazar/@23.6370191,90.5063549,17z/data=!4m5!3m4!1s0x3755b1b4598dae09:0xca3ebf7605a5ae07!8m2!3d23.6372154!4d90.5060616?hl=en&authuser=0"
              >
                Mulibash Bazar, Hajigonj, Narayangonj
              </a>
            </div>
          </div>
        </div>
        <form
          ref={form}
          autoComplete="off"
          onSubmit={handleSubmit(handleSendEmail)}
          className="contact-form flex-1"
        >
          <div className="flex mb-3 justify-between">
            <div className="mr-3 flex-1">
              <input
                type="text"
                {...register("userName", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
                name="userName"
                placeholder="Your Name"
              />
              <label className="text-red-500" htmlFor="">
                {errors?.userName?.type === "required" &&
                  errors?.userName?.message}
              </label>
            </div>
            <div className="flex-1">
              <input
                type="text"
                {...register("userEmail", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
                name="userEmail"
                placeholder="Your Email"
              />
              <label className="text-red-500" htmlFor="">
                {errors?.userEmail?.type === "required" &&
                  errors?.userEmail?.message}
              </label>
              <label className="text-red-500" htmlFor="">
                {errors?.userEmail?.type === "pattern" &&
                  errors?.userEmail?.message}
              </label>
            </div>
          </div>
          <input
            type="text"
            {...register("subject", {
              required: {
                value: true,
                message: "Subject Is required",
              },
            })}
            className="mb-3"
            name="subject"
            placeholder="Subject"
          />
          <label className="text-red-500" htmlFor="">
            {errors?.subject?.type === "required" && errors?.subject?.message}
          </label>
          <textarea
            {...register("body", {
              minLength: {
                value: 10,
                message: "Body must be at least 10 characters long",
              },
              required: {
                value: true,
                message: "Body is required",
              },
            })}
            type="text"
            name="body"
            placeholder="Body"
          />
          <label className="text-red-500" htmlFor="">
            {errors?.body?.type === "required" && errors?.body?.message}
          </label>
          <label className="text-red-500" htmlFor="">
            {errors?.body?.type === "minLength" && errors?.body?.message}
          </label>
          <input
            value="Send Email"
            type="submit"
            className="btn btn-primary w-full block mt-4"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
