export function HeaderContent() {
  return (
    <section className="header_content">
      <div className="bottle_img">
        <img src="images/bottle.png" alt="bottle" className="bottle" />
      </div>
      <div className="title_container">
        <h1 className="title">
          УЧАСТВУЙ
          <br />В АКЦИИ И ВЫИГРЫВАЙ ПРИЗЫ!
        </h1>
        <button className="button_title">УЧАСТВОВАТЬ</button>
      </div>
      <div className="prizes_imgs">
        <img src="images/card.png" alt="card" className="card" />

        <img src="images/super.png" alt="super" className="super" />
      </div>
    </section>
  );
}
