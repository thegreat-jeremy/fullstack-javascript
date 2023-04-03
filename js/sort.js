let lastSortKey = "";
let bAsc = true;

function sort(sortKey) {
  if (sortKey === lastSortKey) {
    bAsc = !bAsc;
  }

  let sortValue = bAsc ? 1 : -1;

  const sortData = filterData.sort(function (a, b) {
    if (a[sortKey].toLowerCase() > b[sortKey].toLowerCase()) {
      return sortValue;
    } else if (a[sortKey].toLowerCase() < b[sortKey].toLowerCase()) {
      return -1 * sortValue;
    } else {
      return 0;
    }
  });

  const startIdx = (currentPage - 1) * pagecnt;
  let endIdx = currentPage * pagecnt;
  if (endIdx > sortData.length) {
    endIdx = sortData.length;
  }

  renderTable(sortData.slice(startIdx, endIdx));
  lastSortKey = sortKey;
  filterData = sortData;
  renderPagination();
}

window.addEventListener("load", () => {
  document.querySelectorAll("th[data-sort-key]").forEach((th) => {
    th.addEventListener("click", () => {
      sort(th.getAttribute("data-sort-key"));
    });
  });
});
