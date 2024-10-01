"use client"; // Enables client-side rendering for this component

import { useState } from "react";
import QuizApp from "@/components/ui/quiz-app";
import CategorySelector from "@/components/ui/CategorySelector";

const categories = [
  { id: 9, name: "General Knowledge🧠" },
  { id: 18, name: "Computers💻" },
  { id: 21, name: "Sports🥍" },
  { id: 22, name: "Geography🌎" },
  { id: 23, name: "History📜" },
  { id: 25, name: "Science🧪" },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const handleSelectCategory = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen background text-foreground">
      {selectedCategory ? (
        <QuizApp category={selectedCategory} />
      ) : (
        <CategorySelector categories={categories} onSelectCategory={handleSelectCategory} />
      )}
    </div>
  );
}
