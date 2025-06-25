"use client";
import Project from "@/components/Project";
import SkillSection from "@/components/SkillSection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Flower } from "lucide-react";
export default function Home() {
  return (
    <div className=" flex flex-col space-y-8 mt-10">
      <div className="absolute top-10 -left-[10rem] w-[200px] h-[200px] bg-green-500 rounded-full  opacity-40 blur-3xl"></div>
      <div className="hidden md:flex absolute top-44 left-[40rem] w-[200px] h-[200px] bg-green-500 rounded-full  opacity-30 blur-3xl"></div>
      <section className="relative py-24 flex flex-col space-y-3  justify-center overflow-hidden items-center w-full ">
        <div className="bg-accent z-20 px-4 py-1 rounded-md shadow-md">
          <span className="flex justify-center items-center space-x-2">
            <Flower className="stroke-destructive animate-spin" size="20" />
            <p className="text-sm tracking-tight font-medium text-foreground">
              Lets Build Better
            </p>
          </span>
        </div>
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.6, bounce: 0.2 },
          }}
          className="text-center z-30 md:text-6xl text-3xl font-bold tracking-tight md:w-4xl w-3xs text-foreground/65 md:leading-20  capitalize"
        >
          Crafting <span className=" underline underline-offset-3 ">Code</span>{" "}
          Creating{" "}
          <span className="text-green-500 underline md:underline-offset-[17px]">
            Impact
          </span>
        </motion.h1>
        <p className="text-sm text-foreground/65 md:w-4xl px-2 text-center font-sans tracking-tight leading-7">
          Join a dynamic learning ecosystem that fosters boldness, charm, joy,
          and a deep craving for knowledge. Transform your learning journey
          today.
        </p>
        <Button className="cursor-pointer shadow-md">Contact with me</Button>
      </section>

      <SkillSection className="bg-accent" />
      <Project />
    </div>
  );
}
