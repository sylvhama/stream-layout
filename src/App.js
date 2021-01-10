function App() {
  const games = [
    "Super Mario Bros.",
    "Super Mario Bros.: The Lost Levels",
    "Super Mario Bros. 2",
    "Super Mario Bros. 3",
    "Super Mario World",
    "Yoshi's Island",
    "Super Mario 64",
    "Super Mario Sunshine",
    "Super Mario Galaxy",
  ];

  const title = games[0];

  return (
    <main>
      <section class="nes-container with-title is-rounded is-dark">
        <p class="title">{title}</p>
      </section>

      <aside>
        <section class="nes-container with-title is-rounded is-dark">
          <p class="title">Mariothon</p>
          {games.map((game) => (
            <label key={game}>
              <input type="checkbox" class="nes-checkbox is-dark" />
              <span>{game}</span>
            </label>
          ))}
          <br />
          <p>Peut être plus...</p>
          <i class="nes-mario"></i>
        </section>

        <section class="nes-container with-title is-rounded is-dark">
          <p class="title">sylvhama</p>

          <section class="icon-list">
            <i class="nes-icon twitch is-large"></i>
            <i class="nes-icon twitter is-large"></i>
            <i class="nes-icon instagram is-large"></i>
            <i class="nes-icon github is-large"></i>
          </section>
        </section>
        <section class="nes-container with-title is-rounded is-dark">
          <p class="title">SylvainHamann</p>

          <section class="icon-list">
            <i class="nes-icon youtube is-large"></i>
            <i class="nes-icon linkedin is-large"></i>
          </section>
        </section>
        <section class="nes-container with-title is-rounded is-dark"></section>
      </aside>
    </main>
  );
}

export default App;
