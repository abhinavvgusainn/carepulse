"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

const formSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters"),

  email: z
    .string()
    .email("Enter a valid email address"),

  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits"),
})

type FormData = z.infer<typeof formSchema>

export default function PatientForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: FormData) => {
    console.log(data)

    toast.success("Appointment started successfully")

    reset()
  }

  return (
    <section className="w-full max-w-md space-y-8">
      
      {/* Heading */}
      <div className="space-y-2">
        <p className="text-sm text-zinc-400">
          Hi there 👋
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-white">
          Get Started With Appointment
        </h1>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >

        {/* Full Name */}
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="text-sm font-medium text-zinc-300"
          >
            Full Name
          </label>

          <input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            {...register("fullName")}
            className="
              w-full rounded-xl
              border border-zinc-700
              bg-zinc-900/60
              px-4 py-3
              text-white
              outline-none
              transition-all duration-200

              placeholder:text-zinc-500

              focus:border-transparent
              focus:ring-2
              focus:ring-cyan-400
              focus:shadow-[0_0_0_4px_rgba(34,211,238,0.15)]
            "
          />

          {errors.fullName && (
            <p className="text-sm text-red-400">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-zinc-300"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className="
              w-full rounded-xl
              border border-zinc-700
              bg-zinc-900/60
              px-4 py-3
              text-white
              outline-none
              transition-all duration-200

              placeholder:text-zinc-500

              focus:border-transparent
              focus:ring-2
              focus:ring-cyan-400
              focus:shadow-[0_0_0_4px_rgba(59,130,246,0.15)]
            "
          />

          {errors.email && (
            <p className="text-sm text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <label
            htmlFor="phoneNumber"
            className="text-sm font-medium text-zinc-300"
          >
            Phone Number
          </label>

          <input
            id="phoneNumber"
            type="tel"
            placeholder="Enter your phone number"
            {...register("phoneNumber")}
            className="
              w-full rounded-xl
              border border-zinc-700
              bg-zinc-900/60
              px-4 py-3
              text-white
              outline-none
              transition-all duration-200

              placeholder:text-zinc-500

              focus:border-transparent
              focus:ring-2
              focus:ring-cyan-400
              focus:shadow-[0_0_0_4px_rgba(6,182,212,0.15)]
            "
          />

          {errors.phoneNumber && (
            <p className="text-sm text-red-400">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            w-full rounded-xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-500
            px-4 py-3
            font-medium text-white
            transition-all duration-200

            hover:opacity-90
            active:scale-[0.98]
          "
        >
          Get Started
        </button>
      </form>
    </section>
  )
}