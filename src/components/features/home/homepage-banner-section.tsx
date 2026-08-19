import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router"; 

export function HomePageBannerSection() {
  const navigate = useNavigate(); 

  return (
    <div className="flex flex-col justify-center min-h-[450px] my-10 mt-20">
      <h1 className="page-title text-[4rem] leading-[1.1] m-0">
        VINCENT ANTHONY <br />
        <span className="font-bold">POGOY</span>
      </h1>
      <p className="text-[0.85rem] tracking-[0.2em] text-[#666] uppercase leading-[1.6] my-4 mb-7">
        Welcome to my portfolio! Thanks for stopping by. I hope you enjoy exploring my work and getting to know me a little better.
      </p>
      <div>
        <Button 
          variant="primary"
          onClick={() => navigate('/about')}
        >
          About Me
        </Button>
      </div>
    </div>
  );
}