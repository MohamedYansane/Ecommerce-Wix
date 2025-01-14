"use client"

import { products } from "@wix/stores";
import { useState } from "react";

const CustomizeProduct = ({
  productId,
  variants,
  productOptions,
}: {
  productId:string;
  variants:products.Variant[];
  productOptions:products.ProductOption[];
}) => {
  //in this <{[key:string]:string}> we have an object with a key which is a string and it value also which is a string
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});

  const handleOptionSelect = (optionType:string, choice:string) =>{
    setSelectedOptions({...selectedOptions, [optionType]: choice });
  }
  // *  we gonna have like {color:'green', size:'medium',} of course if there's a combination
  //   Object.entries(choices) turns choices into an array of [key, value] pairs, like [["color", "red"], ["size", "M"]].
  // .every(([key, value]) => ...) checks if all the entries in choices match the corresponding variantChoices keys and values.
  // If, for instance, choices specifies { color: "red", size: "M" }, this part checks if variantChoices.color is "red" and variantChoices.size is "M".
  const isVariantInstock = (choices:{[key:string]:string}) =>{
    return variants.some(variant =>{
      const variantChoices = variant.choices;
      if(!variantChoices) return false;
      return (Object.entries(choices).every(([key,value])=> variantChoices[key] === value)&& variant.stock?.inStock && variant.stock?.quantity && variant.stock?.quantity>0) 
    })
  }
  // console.log(variants);
  // console.log(selectedOptions);
  // console.log(productOptions);
  return (
    <div className="flex flex-col gap-6  ">
      {productOptions.map((option) => (
        <div className="flex flex-col gap-4" key={option.name}>
          <h4 className="font-medium">Choisit une {option.name}</h4>
          <ul className="flex items-center gap-3">
            {option.choices?.map((choice) => {
              const disabled = !isVariantInstock({
                ...selectedOptions,
                [option.name!]: choice.description!,
              });

              const selected =
                selectedOptions[option.name!] === choice.description;

               const clickHandler = disabled
                 ? undefined
                 : () => handleOptionSelect(option.name!, choice.description!);
              return option.name === "Couleur" ? (
                <li
                  className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative"
                  style={{
                    backgroundColor: choice.value,
                    cursor: disabled ? "not-allowed" : "pointer",
                  }}
                  onClick={clickHandler}
                  key={choice.description}
                >
                  {selected && (
                    <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                  {disabled && (
                    <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </li>
              ) : (
                <li
                  className="ring-1 ring-smy text-smy rounded-md py-1 px-4 text-sm"
                  style={{
                    cursor: disabled ? "not-allowed" : "pointer",
                    backgroundColor: selected
                      ? "#f35c7a"
                      : disabled
                      ? "#FBCFE8"
                      : "white",
                    color: selected || disabled ? "white" : "#f35c7a",
                    boxShadow: disabled ? "none" : "",
                  }}
                  key={choice.description}
                  onClick={clickHandler}
                >
                  {choice.description}
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      {/* <div className="" key={choice.value} onClick={() => handleOptionSelect(option.name!, choice.description!)}>
      {choice.description} {disabled &&  "disabled"} {selected && "selected"}
      </div> */}
      {/* COLORS */}

      {/* 
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full ring1 ring-gray-300 cursor-pointer relative bg-red-500">
          <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
        <li className="w-8 h-8 rounded-full ring1 ring-gray-300 cursor-pointer relative bg-blue-500"></li>
        <li className="w-8 h-8 rounded-full ring1 ring-gray-300 cursor-not-allowed relative bg-green-500">
          <div className="absolute w-10 h-[2px] rounded-full ring-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-400 rotate-45"></div>
        </li>
      </ul> */}

      {/* OTHERS */}

      {/* <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-smy text-smy rounded-md py-1 px-4 text-sm cursor-pointer">
          Small
        </li>
        <li className="ring-1 ring-smy text-white bg-smy rounded-md py-1 px-4 text-sm cursor-pointer">
          Medium
        </li>
        <li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">
          Large
        </li>
      </ul> */}
    </div>
  );
};
 
export default CustomizeProduct;