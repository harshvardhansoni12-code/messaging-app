import { Button } from "../../../../components/ui/button";
import { Search } from "lucide-react";
import { Info } from "lucide-react";
const ToolBar = () => {
  return (
    <>
      <nav className="bg-[#481349] flex  justify-between items-center h-10 p-1.5">
        <div className="min-w-70 max-w-160.5 grow shrink">
          <Button
            size="sm"
            className="bg-accent/25 hover:bg-accent-25 w-full justify-start h-7 px-2"
          >
            <Search className="size-4 text-white mr-2" />
            <span className="text-white text-xs">search workspace</span>
          </Button>
        </div>
        <div className="ml-auto flex items-center justify-end">
          <Button variant="default">
            <Info className="size-5 text-white" />
          </Button>
        </div>
      </nav>
    </>
  );
};

export default ToolBar;
