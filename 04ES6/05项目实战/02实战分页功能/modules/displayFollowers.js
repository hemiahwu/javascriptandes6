const container = document.querySelector(".container");

const displayFollowers = (followers) => {
  const allFollowers = followers.map(({ login, avatar_url, html_url }) => {
    return `
      <article class="card">
          <img src="${avatar_url}" alt="">
          <h4>${login}</h4>
          <a href="${html_url}" class="btn">访问</a>
      </article>
    `;
  });

  container.innerHTML = allFollowers.join("");
};

export default displayFollowers;
