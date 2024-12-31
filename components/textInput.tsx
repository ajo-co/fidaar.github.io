/* eslint-disable no-unused-expressions */
import { Input, InputProps } from "antd";
import clsx from "clsx";
import React, { useId } from "react";

interface IProps extends InputProps {}

export default function TextInput({ ...rest }: IProps) {
  return <Input className="w-full h-10" {...rest} />;
}