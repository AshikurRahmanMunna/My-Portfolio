import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import React from "react";
import "./ContactMe.css";
import { useForm } from "react-hook-form";

const ContactMe = () => {
    const { register, handleSubmit,  } = useForm();
  const handleSendEmail = {
    
  }
  return (
    <div className="my-6">
      <h2 className="text-4xl text-white text-center mb-4 border-b-secondary">
        Contact Me
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
              <a rel="noopener noreferrer" target={"_blank"} className="text-white" href="https://wa.me/+8801715808691">
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
              <a className="text-white" href="mailto:ashikurrahmanmunna3@gmail.com">
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
              <a rel='noopener noreferrer' target={"_blank"} className="text-white" href="https://www.google.com.bd/maps/place/Mulibash+Bazar/@23.6370191,90.5063549,17z/data=!4m5!3m4!1s0x3755b1b4598dae09:0xca3ebf7605a5ae07!8m2!3d23.6372154!4d90.5060616?hl=en&authuser=0">
                Mulibash Bazar, Hajigonj, Narayangonj
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(handleSendEmail)} className="contact-form flex-1">
          <div className="flex items-center mb-3 justify-between">
            <input type="text" {...register("firstName", {
                required: {
                    value: true,
                    message: 'Name is required'
                }
            })} className="mr-3" placeholder="Your Name" />
            <label>
                
            </label>
            <input type="text" {...register("userEmail", {
                required: {
                    value: true,
                    message: 'Email is required'
                },
                pattern: {
                    value: /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/,
                    message: 'Please enter a valid email'
                }
            })} placeholder="Your Email" />
          </div>
          <input type="text" {...register("subject", {
            required: {
                value: true,
                message: 'Subject Is required'
            }
          })} className="mb-3" placeholder="Subject" />
          <textarea {...register("body", {
            minLength: {
                value: 10,
                message: 'Body must be at least 10 characters long'
            },
            required: {
                value: true,
                message: 'Body is required'
            }
          })} type="text" placeholder="Body" />
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
