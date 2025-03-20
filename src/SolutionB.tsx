import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectItem, SelectContent } from "@/components/ui/select";

const SolutionB = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    setOpportunities([
      {
        id: 1,
        title: "Community Tech Microgrants",
        description: "Grants for local tech initiatives.",
        link: "#",
      },
      {
        id: 1,
        title: "Community Tech Microgrants",
        description: "Grants for local tech initiatives.",
        link: "#",
      },
      {
        id: 2,
        title: "Community Tech Microgrants",
        description: "Grants for local tech initiatives.",
        link: "#",
      },
      {
        id: 3,
        title: "Community Tech Microgrants",
        description: "Grants for local tech initiatives.",
        link: "#",
      },
      {
        id: 4,
        title: "Community Tech Microgrants",
        description: "Grants for local tech initiatives.",
        link: "#",
      },
      {
        id: 5,
        title: "Community Tech Microgrants",
        description: "Grants for local tech initiatives.",
        link: "#",
      },
    ]);
  }, []);

  const filteredOpportunities = opportunities.filter((opportunity) => {
    return (
      (category === "all" || opportunity.category === category) &&
      opportunity.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Microgrant & Fellowship Guide</h1>
      <div className="flex gap-4 mb-4">
        <Input
          placeholder="Search opportunities..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select value={category} onChange={setCategory}>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="arts">Arts</SelectItem>
            <SelectItem value="science">Science</SelectItem>
            <SelectItem value="technology">Technology</SelectItem>
            <SelectItem value="education">Education</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-4">
        {filteredOpportunities.map((opportunity) => (
          <Card key={opportunity.id}>
            <CardContent>
              <h2 className="text-xl font-semibold">{opportunity.title}</h2>
              <p className="text-gray-600">{opportunity.description}</p>
              <a
                href={opportunity.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 block"
              >
                Learn More
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SolutionB;
