import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function JobForm() {
  const { slug } = useParams();

  useEffect(() => {
    if (slug === "new") return;
    fetchJobDetails();
  }, []);

  const fetchJobDetails = async () => {};

  return <div>edit job</div>;
}
