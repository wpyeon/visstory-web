import { Outlet, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

export const SubPageLayout = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col h-screen w-full">
      <div
        className="w-12 min-h-12 flex items-center justify-center z-20"
        onClick={handleBack}
      >
        <MdArrowBack className="text-3xl text-gray-400" />
      </div>
      <div className="flex flex-col flex-1">
        <Outlet />
      </div>
    </div>
  );
};
