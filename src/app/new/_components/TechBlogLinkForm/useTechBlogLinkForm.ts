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
        // TODO 本来は form.reset() を使うのが正しいがバグっているので代替処理を入れている
        form.setFieldValue("techBlogLink", "");
      } catch (err) {
        if (err instanceof Error) alert(err.message);
        else alert("An error occurred while submitting the form.");
      }
    },
  });
};
