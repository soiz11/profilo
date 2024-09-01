import DocNavigation from "@/components/DocsComponents/DocNavigation";
import DocSlider from "@/components/DocsComponents/DocSlider";

const DocsMain = () => {
  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <DocNavigation />
        <div className="xs:w-[80vw] flex justify-between w-[85vw] flex-1 bg-red-600 mt-[15vh] mb-[10vh]">
          <div>hello</div>
          <DocSlider />
        </div>
      </div>
    </>
  );
};

export default DocsMain;
