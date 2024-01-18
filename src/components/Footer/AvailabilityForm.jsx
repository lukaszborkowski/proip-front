import React, { useState } from "react";
import ChooseButton from "../Buttons/ChooseButton";
import Marker from "../Icons/Marker";
import axios from "axios";
import Autocomplete from "./Autocomplete";

export default function AvailabilityForm({ content = {}, onSubmit }) {
  const { messages, lang } = content;
  const [values, setValues] = useState({});
  const [isAvailable, setIsAvailable] = useState();

  return (
    // <form className="w-full">
    <>
      {/* <input
        type="text"
        className="bg-transparent w-full py-4 border-b border-[#707070] placeholder:text-[#376369] text-[19px]"
        placeholder={messages["footer.availability.townPlaceholder"][lang]}
      /> */}

      <div className="py-4">
        <label className="text-[#376369] text-[19px]">Miasto</label>
        <Autocomplete
          value={values.city}
          onChange={(val) => {
            console.log(val);
            setValues((prev) => ({ ...prev, city: val }));
          }}
          resourceName="cities"
          showBreadcrumbs={true}
        />
      </div>

      <div className="py-4 flex space-x-2">
        <div className="flex-1">
          <label className="text-[#376369] text-[19px]">Ulica</label>
          <Autocomplete
            value={values.street}
            onChange={(val) => {
              console.log(val);
              setValues((prev) => ({ ...prev, street: val }));
            }}
            isDisabled={!!!values?.city}
            resourceName="streets"
            city={values?.city?.id}
          />
        </div>
        <div className="w-[160px] lg:w-[240px]">
          <label className="text-[#376369] text-[19px]">Numer budynku</label>
          <input
            disabled={!!!values?.city}
            className="w-full border mt-[4px] py-[16px] pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 rounded-lg bg-white text-left shadow-md focus:outline-none "
            // onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>

      {isAvailable && (
        <div className="text-center text-[20px] text-[#039514] font-bold">
          {messages["footer.availability.checkAvailabilitySuccess"][lang]}
        </div>
      )}

      <ChooseButton
        className={"w-full px-0 mt-[20px]"}
        isActive={true}
        disabled={!(values.city && values.street)}
        onClick={() => {
          // onSubmit(values);
          setIsAvailable(true);
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
