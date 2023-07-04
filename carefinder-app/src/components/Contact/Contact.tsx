import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import doctors from "@/assets/doctors.jpg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-md bg-cf-gray
  px-5 py-3 placeholder-cf-dark-gray`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section
      id="contact"
      className="gap-16 bg-cf-white py-20 md:h-full md:pb-0"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
      >
        {/* first */}
        <motion.div
          className="text-center md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-3xl font-bold uppercase text-cf-blue">
            Get in touch
          </h1>
          <p>
            Learn more about how the platform works. Speak with a
            representative. Learn more about how the platform works. Speak with
            a representative.
          </p>
        </motion.div>

        {/* contact form */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={handleSubmit}
              action="https://formsubmit.co/c7921677d268cbdfc4c27b113817b742"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="FULL NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="text-primary-500 mt-1">
                  {errors.name.type === "required" && "Please fill this field."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="YOUR EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-primary-500 mt-1">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder="YOUR MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="text-primary-500 mt-1">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-md bg-cf-blue px-20 py-3 text-cf-white transition duration-500 hover:text-white"
              >
                SEND
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img src={doctors} alt="doctors" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
