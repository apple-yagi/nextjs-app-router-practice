"use client";

import { Button } from "@/components/Button";
import * as Form from "@/components/Form";
import { isUrl } from "@/utils/isUrl";

import {
  TechBlogLinkFormValues,
  useTechBlogLinkForm,
} from "./useTechBlogLinkForm";

type Props = {
  submit: (values: TechBlogLinkFormValues) => Promise<void>;
};

export const TechBlogLinkForm = ({ submit }: Props) => {
  const form = useTechBlogLinkForm(submit);

  return (
    <form.Provider>
      <Form.Root {...form.getFormProps()}>
        <form.Field
          name="techBlogLink"
          validate={(value) =>
            isUrl(value) ? undefined : "正しいURLを入力してください"
          }
          children={(field) => (
            <>
              <Form.TextInput
                label="技術ブログのURL"
                name={field.name}
                error={field.state.meta.error}
                {...field.getInputProps()}
              />
            </>
          )}
        />
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Form.Actions>
              <Button type="submit" disabled={!canSubmit}>
                {isSubmitting ? "送信中" : "送信"}
              </Button>
            </Form.Actions>
          )}
        />
      </Form.Root>
    </form.Provider>
  );
};
