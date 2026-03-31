import React from "react";

const FallbackTinderCard = React.forwardRef(function FallbackTinderCard(
  { children, className },
  ref
) {
  React.useImperativeHandle(ref, () => ({
    swipe: async () => {},
    restoreCard: async () => {},
  }));

  return <div className={className}>{children}</div>;
});

let ResolvedTinderCard = FallbackTinderCard;

try {
  const mod = require("react-tinder-card");
  ResolvedTinderCard = mod?.default || mod || FallbackTinderCard;
} catch (error) {
  // eslint-disable-next-line no-console
  console.error("Failed to load react-tinder-card, using fallback card.", error);
}

export default ResolvedTinderCard;