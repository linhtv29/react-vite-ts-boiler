import { Button } from "@/components/Elements/Button";
import { Form, InputField } from "@/components/Form";
import { useState } from "react";

type ProfileValues = {
	name: string;
	email: string;
	phone: number;
}

export const Profile = () => {
	const [fullName, setFullName] = useState<string | number>()
	const [email, setEmail] = useState<string | number>()
	const updateName = (newName: string | number) => setFullName(newName)
	const updateEmail = (newName: string | number) => setEmail(newName)
	const option = {
		defaultValues: {
			name: 'hi',
			email: 'bar',
			phone: 'boon'
		}
	}
  return (
    <div>
      <h1 className="text-3xl mb-2 font-bold text-sky-950">Profile</h1>
      <div className="bg-white p-5 divide-y divide-sky-900">
        <Form<ProfileValues>
          onSubmit={async (values) => {
            // onSuccess();
          }}
        >
          {({ register }) => (
            <>
              <InputField
                type="text"
                label="Full Name"
                registration={register("name")}
								onUpdateVal={updateName}
              />
              <InputField
                type="email"
                label="Email Address"
                registration={register("email")}
								onUpdateVal={updateEmail}
              />
              <InputField
                type="number"
                label="Phone Number"
                registration={register("phone")}
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
