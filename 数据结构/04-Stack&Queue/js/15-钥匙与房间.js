var canVisitAllRooms = function (rooms) {
  const n = rooms.length;
  let visited = {};
  dfs(rooms, visited, 0);
  let res = 0;
  for (key in visited) {
    res += visited[key];
  }
  return n == res;
};

function dfs(rooms, visited, room) {
  visited[room] = 1;
  // 遍历该房间存在的钥匙
  for (let i = 0; i < rooms[room].length; i++) {
    let key = rooms[room][i];
    if (visited[key] != 1) {
      dfs(rooms, visited, key);
    }
  }
}

console.log(canVisitAllRooms([[1, 2], [2, 1], [1]]));
