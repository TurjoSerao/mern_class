import { useForm } from "react-hook-form";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <div className="container mx-auto py-5">
            <div className="my-5 mx-auto w-[600px] border rounded p-5">
                <h1 className="text-4xl mb-5">Sign Up</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="border border-stone-400 rounded p-2 w-full"
                            {...register("yname", {
                                required: "Name is required",
                            })}
                        />
                        {errors.yname && (
                            <p className="text-red-500">{errors.yname.message}</p>
                        )}
                    </div>
                  
                    <div className="mb-3">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="border border-stone-400 rounded p-2 w-full"
                            {...register("yemail", {
                                required: "Email is required",
                            })}
                        />
                        {errors.yemail && (
                            <p className="text-red-500">{errors.yemail.message}</p>
                        )}
                    </div>

                    <div className="mb-3">
                        <label className="mr-3">Gender:</label>

                        <label htmlFor="male" className="mr-3">
                            <input
                                type="radio"
                                value="Male"
                                {...register("gender", { required: "Gender is required" })}
                            />{" "}
                            Male
                        </label>

                        <label htmlFor="female" className="mr-3">
                            <input
                                type="radio"
                                value="Female"
                                {...register("gender", { required: "Gender is required" })}
                            />{" "}
                            Female
                        </label>

                        {errors.gender && (
                            <p className="text-red-500">{errors.gender.message}</p>
                        )}
                    </div>

                    <div className="mb-3">
                        <input
                            type="password"
                            placeholder="New Password"
                            className="border border-stone-400 rounded w-full px-2"
                            {...register("ypass", {
                                required: "Password is required",
                            })}
                        />
                        {errors.ypass && (
                            <p className="text-red-500">{errors.ypass.message}</p>
                        )}
                    </div>

                    <div className="mb-3">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="border border-stone-400 rounded w-full px-2"
                            {...register("cpass", {
                                required: "Please confirm your password",
                            })}
                        />
                        {errors.cpass && (
                            <p className="text-red-500">{errors.cpass.message}</p>
                        )}
                    </div>

                    <input
                        type="submit"
                        className="bg-blue-600 text-white px-5 py-2 rounded cursor-pointer"
                        value="Submit"
                    />
                </form>
            </div>
        </div>
    );
};

export default SignUp;
