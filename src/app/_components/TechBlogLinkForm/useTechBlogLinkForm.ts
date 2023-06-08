import { createFormFactory } from "@tanstack/react-form";
import { useMemo } from "react";

export type TechBlogLinkFormValues = {
  techBlogLink: string;
};

export const useTechBlogLinkForm = (
  postTechBlogLink: (values: TechBlogLinkFormValues) => Promise<void>
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
    onSubmit: async (values) => {
      await postTechBlogLink(values);
    },
  });
};
