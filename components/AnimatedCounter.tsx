"use client";
import CountUp from "react-countup";

const AnimatedCounter = ({
  amount,
  prefix,
  decimals = 2,
}: AnimatedCounterProps) => {
  return (
    <div className="w-full">
      <CountUp decimals={decimals} prefix={prefix} end={amount} />
    </div>
  );
};

export default AnimatedCounter;
