import "../css/musherList.css";

const MusherList = () => {
  return (
    <div className="musherListPage">
      <div className="musherTable">
        <label>Currently registered mushers</label>
        <table></table>
      </div>
      <aside className="buttons">
        <button>Add a new musher</button>
        <button>Edit selected musher</button>
        <button>delete selected musher</button>
      </aside>
    </div>
  );
};

export { MusherList };
