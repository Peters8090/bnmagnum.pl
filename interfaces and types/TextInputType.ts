import { TextType } from "./FieldType";

export type TextInputTypeWithoutTextType =
  | "tel"
  | "password"
  | "number"
  | "email"
  | "date";
export type TextInputType = TextInputTypeWithoutTextType | TextType;
