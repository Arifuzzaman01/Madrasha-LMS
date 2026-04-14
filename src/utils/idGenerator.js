
export const generateId = (name) => {
  const prefix = name ? name.slice(0, 3).toUpperCase() : "CRS";
  const date = new Date()
  const fullYear = String(date.getFullYear()).slice(-2).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const second = date.getSeconds();
  const random = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${second}${day}${month}${fullYear}-${random}`;
};