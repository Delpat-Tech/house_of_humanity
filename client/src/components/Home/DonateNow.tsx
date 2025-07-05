import React from "react";
import { useNavigate } from "react-router-dom";
import MediaWithText from "../ui/MediaWithText";

const DonateNow = () => {
  const navigate = useNavigate();

  return (
    <MediaWithText
      heading="Donate Now"
      subheading="Join Hands to Make a Difference"
      description={`A lot many people cannot even afford the necessities, let alone indulge in anything extra. Just a little kindness goes a long way.

We, here at House of Humanity Charitable Trust, provide clothes, food, toys, utensils, and other essential items to the needy and marginalized people. Your donations can play a major role.`}
      mediaSrc="/Gallery/donateNow.webp"
      mediaAlt="Donate Image"
      buttonText="Donate Now"
      onButtonClick={() => navigate("/donate-for-a-cause")}
    />
  );
};

export default DonateNow;
