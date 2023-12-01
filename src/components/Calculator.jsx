"use client";
import React, { useState } from "react";
import { usePackage } from "./usePackage";

export const Calculator = ({ content = {} }) => {
  const { messages, lang } = content;

  const [isModalOpen, setIsModalOpen] = useState();

  const { internet, tv, moreTv, isBlock, phone, mobilePhone } = usePackage();

  const internetPrice =
    (isBlock ? internet?.[`price_block`] : internet?.[`price`]) || 0;

  const tvPrice = tv?.price || 0;

  const isRabat = !!(internet && tv) && tv?.id != 34;
  const rabatPrice = isBlock
    ? internet?.["apartment-discount"]
    : internet?.["singlehouse-discount"];

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
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="mt-3 text-center">
                {internet && (
                  <div className="flex justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Internet:
                    </h3>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {internetPrice} zł / miesiąc
                    </h3>
                  </div>
                )}

                {tv && (
                  <div className="flex justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Telewizja:
                    </h3>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {tvPrice} zł / miesiąc
                    </h3>
                  </div>
                )}

                {moreTv && (
                  <div className="flex justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Więcej kanałów:
                    </h3>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {Number(moreTv?.price || 0)} zł / miesiąc
                    </h3>
                  </div>
                )}

                {phone && (
                  <div className="flex justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Telefon stacjonarny:
                    </h3>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {phonePrice} zł / miesiąc
                    </h3>
                  </div>
                )}

                {mobilePhone && (
                  <div className="flex justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Telefon komórkowy:
                    </h3>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {mobilePhonePrice} zł / miesiąc
                    </h3>
                  </div>
                )}

                {isRabat && (
                  <div className=" mt-5 flex justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Rabat:
                    </h3>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      -{rabatPrice} zł / miesiąc
                    </h3>
                  </div>
                )}

                <div className="flex justify-between mt-10">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Łącznie:
                  </h3>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {total} zł / miesiąc
                  </h3>
                </div>
                {/* <div className="mt-2 px-7 py-3">
                  <p className="text-sm text-gray-500">
                    Your modal content goes here
                  </p>
                </div> */}
                <div className="items-center px-4 py-3">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 mb-4 mt-10 bg-[#009CFF] text-white text-base font-medium rounded-full w-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  >
                    Wyślij zapytanie
                  </button>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-full w-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  >
                    Zamknij
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {true && (
          <div className={`flex justify-between`}>
            <div className="fixed flex justify-between items-center bottom-0 left-0 w-[100%] p-8 bg-slate-800 z-20 text-white font-bold">
              <div>Zamówienie</div>
              <div className="flex items-center">
                <div className="mr-6">
                  <div>Łącznie: {total} zł / miesiąc</div>
                  {isRabat && <div>Rabat: {rabatPrice} zł / miesiąc</div>}
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="mt-2 bg-[#009CFF] text-white rounded-[50px] px-[25px] py-[4px] text-lg font-bold"
                >
                  {"Pełne podsumowanie"}
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
