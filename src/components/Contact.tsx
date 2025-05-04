import { useForm, SubmitHandler } from "react-hook-form";

type ContactFormInputs = {
    name: string;
    surname: string;
    email: string;
    message: string;
};

export default function Contact() {
    const { register, handleSubmit, reset } = useForm<ContactFormInputs>();

    const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
        console.log(data);
        reset();
    };

    return (
        <div className="bg-[#f4f3ef] py-16 px-6 md:px-20">
            <div className="max-w-4xl mx-auto">
                {/* Title */}
                <h2 className="text-3xl font-bold text-[#ee9964] mb-4">Contact Us</h2>

                {/* Description */}
                <p className="text-lg text-gray-700 mb-8">
                    We’d love to hear from you. Fill in the form and we’ll get back to you shortly.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" {...register("name")} className="p-3 border rounded" />
                    <input type="text" placeholder="Last Name" {...register("surname")} className="p-3 border rounded" />
                    <input type="email" placeholder="Email" {...register("email")} className="p-3 border rounded md:col-span-2" />
                    <textarea placeholder="Write your message" {...register("message")} className="p-3 border rounded md:col-span-2 h-32" />

                    <button type="submit" className="bg-[#ee9964] text-white py-3 px-6 rounded md:col-span-2 hover:bg-[#e98549] transition">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );

}
