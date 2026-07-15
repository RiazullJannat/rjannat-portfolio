'use client'
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Email = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);

        emailjs
            .sendForm(
                `${process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID}`, 
               `${process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID}`,
                form.current!,
                `${process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY}`
            )
            .then(
                (result) => {
                    console.log("Success:", result.text);
                    alert("Message sent successfully! I'll get back to you soon.");
                    setIsSending(false);
                },
                (error) => {
                    console.log("Error:", error.text);
                    alert("Failed to send email. Please try again later.");
                    setIsSending(false);
                }
            );

        (e.target as HTMLFormElement).reset(); 
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-300 ml-1">Your Name</label>
                <input
                    type="text"
                    name="from_name"
                    placeholder="John Doe"
                    className="w-full bg-black/60 border border-white/20 rounded-xl p-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-300"
                    required
                />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-300 ml-1">Your Email</label>
                <input
                    type="email"
                    name="user_email"
                    placeholder="john@example.com"
                    className="w-full bg-black/60 border border-white/20 rounded-xl p-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-300"
                    required
                />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-300 ml-1">Your Message</label>
                <textarea
                    name="message"
                    placeholder="Let's work together..."
                    rows={4}
                    className="w-full bg-black/60 border border-white/20 rounded-xl p-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-300 resize-none"
                    required
                />
            </div>
            <button
                type="submit"
                disabled={isSending}
                className="group relative w-full flex justify-center items-center gap-2 bg-white text-black font-bold text-lg py-4 rounded-xl hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 disabled:opacity-70 mt-2"
            >
                {isSending ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
};

export default Email;
