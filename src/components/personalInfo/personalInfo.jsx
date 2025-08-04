import Heading from "../heading/Heading";
import { useForm } from "react-hook-form";
import validationSchema from "../../validation-schema";
import NextStepBtn from "../../components/buttons/nextStepBtn/NextStepBtn";
import { yupResolver } from "@hookform/resolvers/yup";
import "./personalInfo.css";

function personalInfo() {
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data) => console.log(data);


  return (
    <>
      <Heading
        header="Personal info"
        article="Please provide your name, email address, and phone number."
      ></Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="name input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="e.g. Stephen King"
            {...register("name")}
          />
        </div>
        <div className="email input">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            {...register("email")}
          />
        </div>
        <div className="name input">
          <label htmlFor="tel">Phone Number</label>
          <input
            type="number"
            id="tel"
            placeholder="e.g. +1 234 567 890"
            {...register("tel")}
          />
        </div>
        b<NextStepBtn></NextStepBtn>
      </form>
    </>
  );
}

export default personalInfo;
