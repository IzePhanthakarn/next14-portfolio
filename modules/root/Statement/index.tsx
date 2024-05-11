import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";

const Statement = () => {
  return (
    <div className="px-4">
      <header className="flex justify-between py-2">
        <h1 className="text-2xl font-medium">Statement</h1>
        <Button className="space-x-1" variant="success">
          <IconPlus size={20} />
          <p>Add Statement</p>
        </Button>
      </header>
    </div>
  );
};

export default Statement;
