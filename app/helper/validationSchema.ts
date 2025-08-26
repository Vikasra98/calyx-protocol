// validationSchema.ts
import * as yup from "yup";

const disposableDomains =
  /(mailinator\.com|10minutemail\.com|guerrillamail\.com|tempmail\.|yopmail\.com)$/i;

export const waitlistSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Fullname is required to proceed")
    .max(80, "Maximum 80 characters allowed")
    .matches(
      /^[A-Za-zÀ-ÖØ-öø-ÿ.'-](?:[A-Za-zÀ-ÖØ-öø-ÿ.'-]| [A-Za-zÀ-ÖØ-öø-ÿ.'-])*$/,
      "Numbers and symbols like @ # $ % ^ & * ( ) are not allowed"
    ),

  email: yup
    .string()
    .required(
      "Enter a valid email address (e.g., name@domain.com). Missing '@' or '.' is not allowed"
    )
    .max(120, "Maximum 120 characters allowed")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      "Enter a valid email address"
    )
    .test(
      "disposable",
      "Disposable emails are not allowed",
      (value) => !disposableDomains.test(value || "")
    ),

  organization: yup
    .string()
    .max(120, "Organization name must be under 120 characters")
    .matches(
      /^[A-Za-z0-9À-ÖØ-öø-ÿ&.,\- ]+$/,
      "Use only letters, numbers, spaces, &, . or –. !! or ### are not allowed"
    )
    .nullable(),

  role: yup
    .string()
    .max(80, "Role must be under 80 characters")
    .matches(/^[A-Za-z0-9À-ÖØ-öø-ÿ .,'\-\/()]+$/, "Use only letters")
    .nullable(),

  userType: yup
    .string()
    .required("Selection is required to proceed")
    .oneOf(
      ["Verifier", "Institution", "Developer", "Other"],
      "Invalid selection"
    ),

  country: yup
    .string()
    .required("Please select a Country")
    .matches(/^[A-Z]{2}$/, "Invalid country code"),

  website: yup
    .string()
    .url("Enter a valid URL starting with http:// or https://")
    .max(200, "Max 200 characters allowed")
    .nullable(),

  motivation: yup
    .string()
    .max(500, "! HTML tags, script injections")
    .test(
      "no-html",
      "Plain text only letters, numbers, and punctuation are allowed",
      (value) => !/<[^>]*>/.test(value || "")
    )
    .nullable(),

  consent: yup.boolean().oneOf([true], "You must agree before submitting"),
});
