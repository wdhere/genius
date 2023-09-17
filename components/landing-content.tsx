"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Antonio",
    avatar: "A",
    title: "Software Engineer",
    description: "This is the best application I've used!",
  },
  {
    name: "Evan",
    avatar: "E",
    title: "Content Creator",
    description: "It often feels like magic and gives me inspiration.",
  },
  {
    name: "Devan",
    avatar: "D",
    title: "Frontend Developer",
    description: "Such a powerful and reliable programming partner!",
  },
  {
    name: "Zoey",
    avatar: "z",
    title: "Student",
    description: "I love learning new things from Mr. Genius so much!",
  },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-12">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm font-normal">
                    {item.title}
                  </p>
                </div>
              </CardTitle>
              <CardContent className="px-0 pt-4">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
