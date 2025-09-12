import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputWithLabelProps {
  email?: boolean;
  name?: boolean;
  phone?: boolean;
  message?: boolean;
  password?: boolean;
  confirmPassword?: boolean;
}

export function InputWithLabel({ email, name, phone, message, password, confirmPassword }: InputWithLabelProps) {
  return (
    <>
      {name && (
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="name">Name</Label>
          <Input className="" type="name" id="name" placeholder="Enter Your name" />
        </div>
      )}
      {email && (
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="email">Email</Label>
          <Input className="" type="email" id="email" placeholder="Enter Your Email" />
        </div>
      )}
      {phone && (
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="phone">Phone</Label>
          <Input className="" type="phone" id="phone" placeholder="Enter Your Phone" />
        </div>
      )}
      {message && (
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="message">Message</Label>
          <Input className="pt-5 pb-30" type="message" id="message" placeholder="Enter Your Message" />
        </div>
      )}
      {password && (
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="password">Password</Label>
          <Input className="" type="password" id="password" placeholder="Enter Your Password" />
        </div>
      )}
      {confirmPassword && (
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input className="" type="confirmPassword" id="confirmPassword" placeholder="Enter Your Confirm Password" />
        </div>
      )}
    </>
  );
}
