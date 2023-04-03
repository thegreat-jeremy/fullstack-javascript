/**
 * 이 함수는 제품 가격에 대한 부가세를 계산해서 반환하는 함수입니다.
 * @param {*} productAmount 제품가격을 숫자형 전달
 * @returns 부가세가 숫자형
 */
function taxAmount(productAmount) {
  // 부가세 10% 가정
  const tax = 0.1;
  return productAmount * tax;
}

function getTop5() {
  return [];
}

function parseQueryString() {
  if (window.location.search.length === 0) {
    return {};
  } else {
    const queryStringObject = {};
    const queryString = window.location.search.substring(1).split("&");
    console.log(queryString);
    for (const s of queryString) {
      const q = s.split("=");
      queryStringObject[q[0]] = q[1];
    }

    console.log(queryStringObject);
    return queryStringObject;
  }
}
