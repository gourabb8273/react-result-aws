import "./Result.css";

function ResultList({ list }) {

  let sl = 1;

  //Format Date time in read able format
  function formatDateTime(timestamp){   
    const date = new Date(timestamp);  
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDate = date.toLocaleString('en-IN', options);
    return formattedDate
  }

  return (
    <div className="list">
      <div className="list_header">
        <h3 className="list_item">SL No</h3>
        <h3 className="list_item">File Name</h3>
        <h3 className="list_item">Letter Count</h3>
        <h3 className="list_item">Created Date</h3>
      </div>
      {list.length
        ? list.sort((a, b) => new Date(a.CREATED_DATE) - new Date(b.CREATED_DATE)).map((r) => {
            return (
              <div className="list_body">
                <h4 className="list_item">{sl++}</h4>
                <h4 className="list_item">{r.FILE_NAME}</h4>
                <h4 className="list_item">{r.CHAR_COUNT}</h4>
                <h4 className="list_item">{formatDateTime(r.CREATED_DATE)}</h4>
              </div>
            );
          })
        : <h1>No Content</h1>}
    </div>
  );
}

export default ResultList;
