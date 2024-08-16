type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

// type T1 = Pick<AllType, "name" | "color">;
// type T2 = Pick<AllType, "position" | "weight">;

function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
