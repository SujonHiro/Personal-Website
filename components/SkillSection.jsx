import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
const skils = [
  {
    id: 1,
    name: "javaScript",
    value: 75,
  },
  {
    id: 2,
    name: "java",
    value: 45,
  },
  {
    id: 3,
    name: "Html/CSS",
    value: 85,
  },
  {
    id: 4,
    name: "C",
    value: 55,
  },
  {
    id: 5,
    name: "React",
    value: 85,
  },
  {
    id: 6,
    name: "Next js",
    value: 75,
  },
  {
    id: 7,
    name: "Tailwind css",
    value: 95,
  },
  {
    id: 8,
    name: "Shadcn and Radix UI",
    value: 75,
  },
  {
    id: 9,
    name: "Node js",
    value: 59,
  },
  {
    id: 10,
    name: "Express js",
    value: 70,
  },
  {
    id: 11,
    name: "Mongo DB",
    value: 75,
  },
  {
    id: 12,
    name: "SqlLite",
    value: 65,
  },
];
export default function SkillSection() {
  const [progress, setProgress] = useState(
    skils.reduce((acc, cur) => {
      acc[cur.id] = 0;
      return acc;
    }, {})
  );

  const programming = skils.filter((item) => item.id <= 4);
  const frontend = skils.filter((item) => item.id > 4 && item.id <= 8);
  const backend = skils.filter((item) => item.id > 8 && item.id <= 13);

  useEffect(() => {
    // Animate progress bars after mount
    const timer = setTimeout(() => {
      const newValues = {};
      skils.forEach((skill) => {
        newValues[skill.id] = skill.value;
      });
      setProgress(newValues);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container  mx-auto mt-2 px-4 max-w-5xl my-3"
      >
        <div id="skills" className="flex items-center gap-4 my-6">
          <Separator className="flex-1" />
          <span className="text-sm uppercase tracking-wider text-muted-foreground">
            My Skills
          </span>
          <Separator className="flex-1" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center space-x-10 mx-auto mt-10">
          <div className="flex flex-col justify-center space-y-3 my-2">
            <h2 className="text-xl text-foreground ">Programming Languges</h2>
            {programming.map((program) => (
              <div key={program.id} className="flex flex-col space-y-1">
                <h4 className="text-sm">{program.name}</h4>
                <Progress value={progress[program.id]} className="w-60%" />
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center space-y-3 my-2">
            <h2 className="text-xl text-foreground ">Frontend Developement</h2>
            {frontend.map((frontendItem) => (
              <div key={frontendItem.id} className="flex flex-col space-y-1">
                <h4 className="text-sm">{frontendItem.name}</h4>

                <Progress value={progress[frontendItem.id]} />
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center space-y-3 my-4 ">
            <h2 className="text-xl text-foreground ">
              Backend Developement & tools
            </h2>
            {backend.map((backendItem) => (
              <div key={backendItem.id} className="flex flex-col space-y-1">
                <h4 className="text-sm">{backendItem.name}</h4>
                <Progress value={progress[backendItem.id]} />
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
