import { createFormFactory } from "@tanstack/react-form";
import { useMemo } from "react";

export type TechBlogLinkFormValues = {
  techBlogLink: string;
};

export const useTechBlogLinkForm = (
  submit: (values: TechBlogLinkFormValues) => Promise<void>
) => {
  const formFactory = createFormFactory<TechBlogLinkFormValues>({
    defaultValues: useMemo(
      () => ({
        techBlogLink: "",
      }),
      []
    ),
  });

  return formFactory.useForm({
    onSubmit: async (values, form) => {
      try {
        await submit(values);
        form.reset();
      } catch (err) {
        if (err instanceof Error) alert(err.message);
        else alert("An error occurred while submitting the form.");
      }
    },
  });
};
