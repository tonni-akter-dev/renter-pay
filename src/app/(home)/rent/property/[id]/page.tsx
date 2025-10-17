
/* 
1. responsive
2. explore image modal is not showing
*/

"use client";
import React from "react";
import PropertyDetails from "./components/PropertyDetails";
import { useParams } from "next/navigation";

const PropertyDetailsPage = () => {
  const params = useParams<{ id: string }>();

  return (
    <div>
      <PropertyDetails id={params.id} />
    </div>
  );
};

export default PropertyDetailsPage;
