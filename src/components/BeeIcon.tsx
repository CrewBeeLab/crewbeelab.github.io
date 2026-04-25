export const BeeIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <img
    src="/assets/images/crewbee-icon-nobg.png"
    alt="CrewBee"
    className={`${className} object-contain transition-all duration-500 hover:scale-105 drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(217,155,43,0.2)]`}
  />
);
