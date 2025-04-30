// 드롭다운 리스트 생성 - 타입스크립트
// ex06-18-02.js 복사

(()=>{
  interface City {
    value: string;
    selected?: boolean;
  }

  interface Zipcode {
    value: number;
    selected?: boolean;
  }

  const cityList: City[] = [
    { value: 'Seoul', selected: false },
    { value: 'busan' },
    { value: 'GwangJu', selected: true },
    // { value: 56789 },
  ];

  const zipcodeList: Zipcode[] = [
    { value: 12345, selected: false },
    { value: 34567, selected: true },
    { value: 56789 },
  ];

  // FIXME: 아래 출력 결과와 같이 출력 되도록 함수 작성
  function createDropdownList(list: (City | Zipcode)[]){
    let value;
    let options = '';

    for(let item of list) {
      value = item.value;
      options += `\t<option selected="${item.selected?'selected':''}">${typeof value==='string'?value.toUpperCase():value}</option>\n`;
    }
    
    return `<select>\n${ options }</select>`;
  }

  /* 출력 결과
  <select>
  <option selected="">seoul</option>
  <option selected="">busan</option>
  <option selected="selected">gwangju</option>
  </select>
  */
  console.log(createDropdownList(cityList));

  /*
  <select>
  <option selected="">12345</option>
  <option selected="selected">34567</option>
  <option selected="">56789</option>
  </select>
  */
  console.log(createDropdownList(zipcodeList));
})();
