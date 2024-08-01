import { useEffect, useState } from "react";

const ChangingSubHeading = (props) => {
  const { titles } = props;
  const [i, setI] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setI((prevI) => {
        return prevI < titles.length - 1 ? prevI + 1 : 0;
      });
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className="mt-10 text-5xl text-white">{titles[i]}</div>;
};

export default function Hero() {
  return (
    <div className="w-screen">
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="text-9xl text-white">
          Hi I'm{" "}
          <span className="font-semibold bg-red-600 pl-2 pr-2">Chaand</span>
        </div>
        <ChangingSubHeading
          titles={["Developer", "Motorcycle Enthusiast", "Hooper"]}
        />
      </div>
    </div>
  );
}
