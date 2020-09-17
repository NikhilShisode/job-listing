import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import * as Yup from "yup";

import Form from "./forms/Form";
import FormField from "./forms/FormField";
import SubmitButton from "./forms/SubmitButton";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  company: Yup.string().required().min(1).label("Company"),
  location: Yup.string().required().min(1).label("Location"),
  email: Yup.string().email().required().min(1).label("Email"),
  description: Yup.string().required().min(1).label("Description"),
  websiteUrl: Yup.string().required().min(1).label("Website Url"),
});
// price: Yup.number().required().min(1).max(10000).label("Price"),
// description: Yup.string().label("Description"),
// category: Yup.object().required().nullable().label("Category"),
// images: Yup.array().min(1, "Please select atleast one image"),

export default function JobForm() {
  const { slug } = useParams();

  useEffect(() => {
    if (slug === "new") return;
    fetchJobDetails();
  }, []);

  const fetchJobDetails = async () => {};

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Post Your Job
      </Typography>
      <Form
        initialValues={{
          title: "",
          company: "",
          location: "",
          email: "",
          description: "",
          websiteUrl: "",
        }}
        onSubmit={(obj) => console.log(obj)}
        validationSchema={validationSchema}
      >
        <FormField name="title" placeholder="Position title" />
        <FormField name="company" placeholder="Company Name" />
        <FormField name="location" placeholder="Location" />
        <FormField name="email" placeholder="Your Email" />
        <FormField name="description" placeholder="Job Description" />
        <FormField name="websiteUrl" placeholder="Your application form Url" />
        <SubmitButton title="Post Your Job" />
      </Form>
    </div>
  );
}
