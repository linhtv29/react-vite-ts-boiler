import { Button } from "@/components/Elements/Button";
import { Form, InputField, InputPhoto } from "@/components/Form";
import { useState } from "react";
import * as z from "zod";

export type ProfileValues = {
  name: string;
  email: string;
  phone: number;
  avatar: File | string;
};

const schema = z.object({
  email: z.string().min(1, "Required"),
  name: z.string().min(1, "Required"),
  phone: z.string().min(1, "Required"),
  avatar: z.any().refine((file) => file instanceof File, {
    message: "Avatar is required",
  }),
});

export const Profile = () => {
  const [fullName, setFullName] = useState<string | number>();
  const [email, setEmail] = useState<string | number>();
  const updateName = (newName: string | number) => setFullName(newName);
  const updateEmail = (newName: string | number) => setEmail(newName);
  const option = {
    defaultValues: {
      name: "hi",
      email: "bar",
      phone: "boon",
    },
  };
  return (
    <div>
      <h1 className="text-3xl mb-2 font-bold text-sky-950">Profile</h1>
      <div className="bg-white p-5 divide-y divide-sky-900">
        <Form<ProfileValues>
          onSubmit={async (values) => {
            // onSuccess();
          }}
          schema={schema}
        >
          {({ register, formState: { errors }, setValue }) => (
            <>
              <InputPhoto
                label="Avatar"
                registration={register("avatar", {
                  required: "Please select your avatar",
                })}
                error={errors.avatar}
                name="avatar"
                setValue={setValue}
              />
              <InputField
                type="text"
                label="Full Name"
                registration={register("name")}
                className="lg:w-1/2"
                onUpdateVal={updateName}
                isRequired
                error={errors.name}
              />
              <InputField
                type="email"
                label="Email Address"
                className="lg:w-1/2"
                registration={register("email")}
                onUpdateVal={updateEmail}
                isRequired
                error={errors.email}
              />
              <InputField
                type="number"
                label="Phone Number"
                className="lg:w-1/2"
                error={errors.phone}
                registration={register("phone")}
                isRequired
              />
              <div>
                <Button type="submit" className="w-full md:w-60 bg-sky-600">
                  Update
                </Button>
              </div>
            </>
          )}
        </Form>
      </div>
    </div>
  );
};
