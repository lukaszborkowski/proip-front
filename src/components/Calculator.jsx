"use client";
import React, { useState } from "react";
import { usePackage } from "./usePackage";

export const Calculator = ({ content = {} }) => {
  const { messages, lang } = content;

  const [isModalOpen, setIsModalOpen] = useState();

  const { internet, tv, moreTv, isBlock, phone, mobilePhone } = usePackage();

  const [data, setData] = useState({ phone: "", email: "", content: "" });
  const [errors, setErrors] = useState({
    phone: null,
    email: null,
    content: null,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors({ phone: null, email: null, content: null });

    if (!data.email) {
      setErrors({ ...errors, email: messages["errors.email"][lang] });
      return;
    }
    if (!data.phone) {
      setErrors({ ...errors, phone: messages["errors.phone"][lang] });
      return;
    }
    if (!data.content) {
      setErrors({ ...errors, content: messages["errors.content"][lang] });
      return;
    }

    console.log(data);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact-forms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.ok && setIsModalOpen(false))
      .catch((error) => console.log(error))
      .finally(() => {
        setIsModalOpen(false);
      });
  };

  const internetPrice =
    (isBlock ? internet?.[`price_block`] : internet?.[`price`]) || 0;

  const tvPrice = tv?.price || 0;

  const isRabat = !!(internet && tv);
  const rabatPrice = isBlock
    ? internet?.[`apartment-discount-${tv?.id}`]
    : internet?.[`singlehouse-discount-${tv?.id}`];

  const phonePrice = Number(phone?.price ?? 0);
  const mobilePhonePrice = Number(mobilePhone?.price ?? 0);

  let total =
    Number(internetPrice) + Number(tvPrice) + phonePrice + mobilePhonePrice;

  if (isRabat) {
    total = total - rabatPrice;
  }

  if (moreTv) {
    total = total + Number(moreTv?.price || 0);
  }

  if (internet || tv || phone || mobilePhone) {
    return (
      <>
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-30">
            <div className="relative top-20 mx-auto p-5 border w-full max-w-xl shadow-lg rounded-md bg-white">
              <div className="mt-3 text-center">
                <form>
                  {internet && (
                    <div className="flex justify-between">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Internet:
                      </h3>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {internetPrice} zł /{" "}
                        {messages["calculator.month"][lang]}
                      </h3>
                    </div>
                  )}

                  {tv && (
                    <div className="flex justify-between">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {messages["calculator.tv"][lang]}:
                      </h3>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {tvPrice} zł / {messages["calculator.month"][lang]}
                      </h3>
                    </div>
                  )}

                  {moreTv && (
                    <div className="flex justify-between">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {messages["calculator.moreChannels"][lang]}:
                      </h3>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {Number(moreTv?.price || 0)} zł /{" "}
                        {messages["calculator.month"][lang]}
                      </h3>
                    </div>
                  )}

                  {phone && (
                    <div className="flex justify-between">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {messages["calculator.landline"][lang]}:
                      </h3>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {phonePrice} zł / {messages["calculator.month"][lang]}
                      </h3>
                    </div>
                  )}

                  {mobilePhone && (
                    <div className="flex justify-between">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {messages["calculator.mobile"][lang]}:
                      </h3>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {mobilePhonePrice} zł /{" "}
                        {messages["calculator.month"][lang]}
                      </h3>
                    </div>
                  )}

                  {isRabat && (
                    <div className=" mt-5 flex justify-between">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {messages["calculator.discount"][lang]}:
                      </h3>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        -{rabatPrice} zł / {messages["calculator.month"][lang]}
                      </h3>
                    </div>
                  )}

                  <div className="flex justify-between mt-10">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {messages["calculator.total"][lang]}:
                    </h3>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {total} zł / {messages["calculator.month"][lang]}
                    </h3>
                  </div>
                  <div className="flex flex-col text-start gap-3 justify-between mt-10">
                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                      required={true}
                      className="p-2 bg-transparent xl:col-span-2 w-full border-b border-[#707070] placeholder:text-[#376369] text-[19px]"
                      placeholder={"E-mail"}
                    />
                    {errors.email && (
                      <div className="text-red-500">{errors.email}</div>
                    )}
                    <input
                      type="tel"
                      value={data.phone}
                      onChange={(e) =>
                        setData({ ...data, phone: e.target.value })
                      }
                      required={true}
                      className="p-2 bg-transparent xl:col-span-2 w-full border-b border-[#707070] placeholder:text-[#376369] text-[19px]"
                      placeholder={messages["calculator.form.phone"][lang]}
                    />
                    {errors.phone && (
                      <div className="text-red-500">{errors.phone}</div>
                    )}
                    <textarea
                      value={data.content}
                      onChange={(e) =>
                        setData({ ...data, content: e.target.value })
                      }
                      required={true}
                      cols="30"
                      rows="3"
                      placeholder={messages["calculator.form.content"][lang]}
                      className="p-2 bg-transparent xl:col-span-2 w-full border-b border-[#707070] placeholder:text-[#376369] text-[19px]"
                    ></textarea>
                    {errors.content && (
                      <div className="text-red-500">{errors.content}</div>
                    )}
                  </div>

                  <div className="items-center px-4 py-3">
                    <button
                      type="submit"
                      onClick={submitHandler}
                      className="px-4 py-2 mb-4 mt-10 bg-[#009CFF] text-white text-base font-medium rounded-full w-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                      {messages["calculator.send"][lang]}
                    </button>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-full w-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                      {messages["calculator.close"][lang]}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {true && (
          <div className={`flex justify-between`}>
            <div className="fixed flex justify-between items-center bottom-0 left-0 w-[100%] p-8 bg-slate-800 z-20 text-white font-bold">
              <div>{messages["calculator.order"][lang]}:</div>
              <div className="flex items-center">
                <div className="mr-6">
                  <div>
                    {messages["calculator.total"][lang]}: {total} zł /{" "}
                    {messages["calculator.month"][lang]}
                  </div>
                  {isRabat && (
                    <div>
                      {messages["calculator.discount"][lang]}: {rabatPrice} zł /{" "}
                      {messages["calculator.month"][lang]}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="mt-2 bg-[#009CFF] text-white rounded-[50px] px-[25px] py-[4px] text-lg font-bold"
                >
                  {messages["calculator.summary"][lang]}
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
