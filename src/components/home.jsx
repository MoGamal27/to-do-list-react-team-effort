import "../styles/home.css";
function Home() {
  return (
    <>
      <main>
        <section>
          <h2>Your Plans</h2>
          <div className="lists">
            <input className="list" value="list" readOnly />
            <input className="list" value="list" readOnly />
            <input className="list" value="list" readOnly />
            <input className="list" value="list" readOnly />
          </div>
        </section>
        <div className="detail">
          <textarea
            name="list-detail"
            id="list-detail"
            className="list-detail"
          ></textarea>
          <div className="buttons">
            <button className="add">Edit</button>
            <button className="delete">Delete</button>
          </div>
        </div>
      </main>
    </>
  );
}
export default Home;
