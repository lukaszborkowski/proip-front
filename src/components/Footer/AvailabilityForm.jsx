import React from "react";
import ChooseButton from "../Buttons/ChooseButton";
import Marker from "../Icons/Marker";
import axios from "axios";

export default function AvailabilityForm({ content = {} }) {
  const { messages, lang } = content;
  return (
    // <form className="w-full">
    <>
      <input
        type="text"
        className="bg-transparent w-full py-4 border-b border-[#707070] placeholder:text-[#376369] text-[19px]"
        placeholder={messages["footer.availability.townPlaceholder"][lang]}
      />

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 pt-5 pb-[50px]">
        <input
          type="text"
          className=" bg-transparent xl:col-span-2 w-full py-4 border-b border-[#707070] placeholder:text-[#376369] text-[19px]"
          placeholder={messages["footer.availability.streetPlaceholder"][lang]}
        />
        <input
          type="text"
          className="bg-transparent w-full py-4 border-b border-[#707070] placeholder:text-[#376369] text-[19px]"
          placeholder={messages["footer.availability.houseNrPlaceholder"][lang]}
        />
        <input
          type="text"
          className="bg-transparent w-full py-4 border-b border-[#707070] placeholder:text-[#376369] text-[19px]"
          placeholder={messages["footer.availability.apartNrPlaceholder"][lang]}
        />
      </div>

      <ChooseButton
        className={"w-full px-0"}
        isActive={true}
        onClick={() => {
          getAvailabilityCoordinates();
        }}
      >
        {messages["footer.availability.checkAvailabilityButton"][lang]}
      </ChooseButton>
      <p className="flex items-center gap-5 pt-[50px] text-[#039514] font-bold text-[19px]">
        <span className="rotate-45">
          <Marker />
        </span>
        {messages["footer.availability.subText"][lang]}
      </p>
    </>
    // </form>
  );
}

const getAvailabilityCoordinates = async () => {
  console.log("APII");
  axios.get("https://redirect.webdevenv.pl/https://internet.gov.pl/api/voivodeships", {
    headers: {
      "Accept": "application/x-www-form-urlencoded",
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*"
      // "Authorization": "Token 0c52e12c6a7d40678c67e37c63ef232e05f01401",
    },
  });
  // axios.get("https://internet.gov.pl/api/", {
  //   // withCredentials: false,
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     Authorization: "Token 0c52e12c6a7d40678c67e37c63ef232e05f01401",
  //     "Access-Control-Allow-Origin": "*",
  //   },
  // });

  // axios
  //   .head("https://internet.gov.pl/api/address_points?municipality=Andrzejewo", {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       Authorization: "Token 0c52e12c6a7d40678c67e37c63ef232e05f01401", // Uwierzytelnienie przy użyciu tokenu
  //     },
  //   })
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.error("Błąd:", error);
  //   });
};

// curl https://redirect.webdevenv.pl/https://internet.gov.pl/api/voivodeships \
  