const paginate = (followers) => {
  // 分页
  const itemsPerPage = 13;
  // 计算一共要有多少页
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);

  // 100条数据 10 * 10 [[0~9],[10~19],[20~29],....[90~99]]

  const newFollowers = Array.from({ length: numberOfPages }, (_, i) => {
    const start = i * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });

  return newFollowers;
};

export default paginate;
