import classnames from "classnames";
import styles from "./main.module.css";

export function Main() {
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

  const containerClass = classnames(
    styles.container,
    "nes-container",
    "with-title",
    "is-rounded",
    "is-dark"
  );

  return (
    <main class={styles.main}>
      <section class={containerClass}>
        <p class="title">{title}</p>
      </section>

      <aside class={styles.aside}>
        <section class={containerClass}>
          <p class="title">Mariothon</p>
          <p>On finit "tous" les Mario !</p>
          <i class={classnames(styles.mario, "nes-mario")}></i>
        </section>

        <section class={containerClass}>
          <p class="title">sylvhama</p>

          <section class="icon-list">
            <i class="nes-icon twitch is-large"></i>
            <i class="nes-icon twitter is-large"></i>
            <i class="nes-icon instagram is-large"></i>
            <i class="nes-icon github is-large"></i>
          </section>
        </section>
        <section class={containerClass}>
          <p class="title">SylvainHamann</p>

          <section class="icon-list">
            <i class="nes-icon youtube is-large"></i>
            <i class="nes-icon linkedin is-large"></i>
          </section>
        </section>
        <section class={containerClass}></section>
      </aside>
    </main>
  );
}
