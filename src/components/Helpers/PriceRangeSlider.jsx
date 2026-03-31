import Slider from "@mui/material/Slider";

function normalizeRange(value, minValue, maxValue) {
  if (Array.isArray(value) && value.length === 2) {
    return value;
  }

  return [value?.min ?? minValue, value?.max ?? maxValue];
}

export default function PriceRangeSlider({
  minValue = 0,
  maxValue = 1000,
  value,
  onChange,
}) {
  const sliderValue = normalizeRange(value, minValue, maxValue);

  const handleChange = (_, newValue) => {
    if (!Array.isArray(newValue) || typeof onChange !== "function") {
      return;
    }

    const [min, max] = newValue;
    onChange({ min, max });
  };

  return (
    <div className="px-2 py-2">
      <Slider
        disableSwap
        min={minValue}
        max={maxValue}
        value={sliderValue}
        onChange={handleChange}
        valueLabelDisplay="auto"
        sx={{
          color: "#FFBB38",
          height: 6,
          padding: "14px 0",
          "& .MuiSlider-rail": {
            opacity: 1,
            backgroundColor: "#D9D9D9",
          },
          "& .MuiSlider-track": {
            border: "none",
          },
          "& .MuiSlider-thumb": {
            height: 18,
            width: 18,
            backgroundColor: "#fff",
            border: "2px solid currentColor",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            "&:hover, &.Mui-focusVisible, &.Mui-active": {
              boxShadow: "0 0 0 8px rgba(255, 187, 56, 0.16)",
            },
          },
          "& .MuiSlider-valueLabel": {
            backgroundColor: "#1F2937",
          },
        }}
      />
    </div>
  );
}