import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Search, Globe, Users, BookOpen, Clock } from "lucide-react";

const micrograntData = [
  {
    title: "Community Tech Microgrants",
    description: "Grants for local tech initiatives.",
    amount: "$500",
    deadline: "2024-12-31",
    tags: ["technology", "community", "open source"],
    link: "#",
  },
  {
    title: "Global Art Fellowships",
    description: "Fellowships for emerging artists worldwide.",
    amount: "$2,000",
    deadline: "2024-11-15",
    tags: ["art", "global", "fellowship"],
    link: "#",
  },
  {
    title: "Environmental Research Grants",
    description: "Grants supporting environmental research.",
    amount: "$1,000",
    deadline: "2025-01-15",
    tags: ["environment", "research", "science"],
    link: "#",
  },
];

const fellowshipData = [
  {
    title: "Innovation Fellowships",
    description: "Fellowships for innovative projects.",
    amount: "$3,000",
    deadline: "2024-10-31",
    tags: ["innovation", "technology", "leadership"],
    link: "#",
  },
  {
    title: "Education Leadership Fellowships",
    description: "Fellowships for leaders in education.",
    amount: "$2,500",
    deadline: "2024-12-15",
    tags: ["education", "leadership", "community"],
    link: "#",
  },
  {
    title: "Creative Writing Fellowships",
    description: "Fellowships for aspiring writers.",
    amount: "$1,500",
    deadline: "2025-02-28",
    tags: ["writing", "creative", "literature"],
    link: "#",
  },
];

const SolutionA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Microgrants & Fellowships Guide
          </h1>
          <p className="text-gray-300">
            Discover and understand microgrant and fellowship opportunities
            worldwide.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Input
            type="text"
            placeholder="Search for opportunities..."
            className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
          />
          <Button
            variant="default"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"
          >
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
            Microgrants
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {micrograntData.map((grant, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-white">
                    {grant.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {grant.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-300">
                        Amount: {grant.amount}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-300">
                        Deadline: {grant.deadline}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {grant.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-gray-700 text-gray-300 border-gray-600"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      as="a"
                      href={grant.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      className="w-full bg-gray-700 text-white hover:bg-gray-600"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Fellowships
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fellowshipData.map((fellowship, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-white">
                    {fellowship.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {fellowship.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-300">
                        Amount: {fellowship.amount}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-300">
                        Deadline: {fellowship.deadline}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {fellowship.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-gray-700 text-gray-300 border-gray-600"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      as="a"
                      href={fellowship.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      className="w-full bg-gray-700 text-white hover:bg-gray-600"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center text-gray-400 mt-8">
          <p>
            &copy; {new Date().getFullYear()} Microgrants & Fellowships Guide.
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionA;
