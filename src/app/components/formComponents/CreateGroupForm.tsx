"use client";

import React from "react";

import { StringMap } from "@/types/types";
import { useState } from "react";
import toast from "react-hot-toast";
import { createGroup } from "@/app/api/API";
import { z } from "zod";
import { useRouter } from "next/navigation";

const CreateGroupSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, {
      message: "Name must be at least 3 characters",
    })
    .max(255, {
      message: "Name must be less than 255 characters",
    }),
  description: z
    .string()
    .trim()
    .min(3, {
      message: "Description must be at least 3 characters",
    })
    .max(100, {
      message: "Description must be less than 100 characters",
    }),
});

export default function CreateGroupForm() {
  const router = useRouter();

  const handleFormSubmit = async (formData: FormData) => {
    const newGroup = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
    };
    const result = CreateGroupSchema.safeParse(newGroup);
    if (!result.success) {
      let errorMessage = "";

      result.error.issues.forEach((issue) => {
        errorMessage =
          errorMessage + issue.path[0] + ":" + issue.message + ". ";
      });
      toast.error(errorMessage);
    } else {
      toast.success("Group created successfully");
      await createGroup({ data: result.data }).then((data) => {
        router.push(`/groups/${data.team.id}`);
      });
    }
  };
  return (
    <form
      action={handleFormSubmit}
      className="min-h-screen bg-indigo-300 flex flex-col items-center p-4 pt-10 font-[family-name:var(--font-geist-sans)]"
    >
      <strong className="text-lg mb-4">Create a Group</strong>
      <div className="mb-4 w-full max-w-xs">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          name="name"
          id="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4 w-full max-w-xs">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          name="description"
          id="description"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
}
