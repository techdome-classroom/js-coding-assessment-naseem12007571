const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  const dfs = (r, c) => {
    // Check boundaries and if the cell is land
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== "L") {
      return;
    }
    // Mark the current cell as visited
    grid[r][c] = "V";
    
    // Explore neighbors (up, down, left, right)
    dfs(r + 1, c);  // Down
    dfs(r - 1, c);  // Up
    dfs(r, c + 1);  // Right
    dfs(r, c - 1);  // Left
  };

  // Traverse the grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "L") {  // Found an unvisited land cell
        dfs(r, c);  // Start DFS to mark all connected land
        islandCount += 1;  // Increment island count for each new DFS start
      }
    }
  }

  return islandCount;
};

module.exports = getTotalIsles;
