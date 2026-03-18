export const getDateLabel = (dateStr) => {
  const date = new Date();
  const target = new Date(dateStr);

  date.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);

  const diffTime = target - date;
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  if (diffDays < 0) return "Archive";
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Tomorrow";

  return target.toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });
};

export const getDate = () => {
  return new Date().toLocaleDateString("en-ID", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};
