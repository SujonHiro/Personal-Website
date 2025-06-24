import Image from "next/image";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { motion } from "framer-motion";
import { Separator } from "./ui/separator";
export default function Project() {
  return (
    <section className="container  mx-auto mt-2 px-4 max-w-5xl my-3">
      <div className="flex items-center gap-4 my-6">
        <Separator className="flex-1" />
        <span className="text-sm uppercase tracking-wider text-muted-foreground">
          My Project
        </span>
        <Separator className="flex-1" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Card>
          <CardHeader className="flex justify-between items-center">
            <CardTitle>Social Media App</CardTitle>
            <span className="bg-accent px-4 py-1 rounded-md shadow-md">
              React,Tailwind,socket io
            </span>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              illo reiciendis, quae veritatis repellat nisi ab blanditiis iste
              explicabo sapiente sed temporibus repellendus, saepe cupiditate?
              Quae sapiente cum in laudantium?
            </p>
            <Image
              className="w-[400px] h-[200px]  rounded-md border  border-gray-800"
              src="/social-app.png"
              alt="social app"
              width="1000"
              height="700"
            />
          </CardContent>
          <CardFooter className="flex justify-start items-center space-x-3">
            <Button className="cursor-pointer">Website</Button>
            <Button className="cursor-pointer">Github</Button>
          </CardFooter>
        </Card>
      </motion.div>
    </section>
  );
}
