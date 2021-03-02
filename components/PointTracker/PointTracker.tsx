import React from "react";

export type PointTrackerProps = {
  spent: number;
  total: number;
};

const PointTracker = ({ spent, total }: PointTrackerProps) => {
  return (
    <div>
      <div>
        {spent}/{total}
      </div>
      <div>Points Spent</div>
    </div>
  );
};

export default PointTracker;
