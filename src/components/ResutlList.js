import "./Result.css";

function ResultList({ list }) {
  return (
    <div className="list">
      <div className="list_header">
        <h3 className="list_item">File Name</h3>
        <h3 className="list_item">Letter Count</h3>
        <h3 className="list_item">Created Date</h3>
      </div>
      {list.length
        ? list.map((r) => {
            return (
              <div className="list_body">
                <h4 className="list_item">{r.FILE_NAME}</h4>
                <h4 className="list_item">{r.CHAR_COUNT}</h4>
                <h4 className="list_item">{r.CREATED_DATE}</h4>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default ResultList;
