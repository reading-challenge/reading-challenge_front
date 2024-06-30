import { commonStore } from '@/stores/modules/common'
// import moment from "moment";
// import type { DynamicObject } from "@/model/DynamicObject";
// import XLSX from "xlsx-js-style";

export const utils = {
  // console.log 대체용
  // 보통 운영에 배포된 프로젝트에서는 console.log를 허용하지 않기 때문에
  // appconfig.json에서 설정만으로 배포환경에 따라 log 표시 여부를 용이하게 관리
  log(...data: any[]) {
    const appConfig = commonStore().appConfig

    // log 표시 여부
    if (appConfig.isLog) {
      // log 호출 위치 표시 여부
      if (appConfig.isCallerLog) {
        const error = new Error()
        const tokens = error.stack?.split('at ')
        if (tokens !== undefined) {
          if (tokens[2]?.startsWith('Object.')) {
            console.log(`caller : ${tokens[2]?.trim()}`)
          } else if (tokens[3]?.includes('Proxy.')) {
            console.log(`caller : ${tokens[3]?.trim()}`)
          } else {
            console.log(`caller : ${tokens[2]?.trim()}`)
          }
        }
      }

      data.forEach((element) => {
        console.log(element)
      })
    }
  },

  // string, object, array empty 체크
  isEmpty(value: any) {
    if (value === undefined || value === null) {
      return true
    }

    if (typeof value === 'string' && (value === '' || value.trim() === '')) {
      return true
    }

    if (typeof value === 'object' && Object.keys(value).length < 1) {
      return true
    }

    if (Array.isArray(value) && value.length < 1) {
      return true
    }

    return false
  }

  // downloadExcelFile(elHeaders: Array<any>, recvData: Array<any>, fileName: string, sheetName: string) {
  //   let temp: Array<any> = [];
  //   let idx = 0;
  //   recvData.forEach((element) => {
  //     let data: DynamicObject = {};
  //     elHeaders.forEach((header) => {
  //       //*/
  //       if (header.headers && Array.isArray(header.headers)) {
  //         header.headers.forEach((subcol: { text: string | number; value: string | number }) => {
  //           if (utils.isEmpty(header.text)) {
  //             data[subcol.text] = element[subcol.value];
  //           } else {
  //             data[`(${header.text})${subcol.text}`] = element[subcol.value];
  //           }
  //           //`${element[subcol.value]}`;
  //           //data[subcol.text] = element[subcol.value]; //`${element[subcol.value]}`;
  //         });
  //       } else {
  //         data[header.text] = element[header.value];
  //       }
  //       //*/
  //       //data[header.text] = element[header.value];
  //     });
  //
  //     for (let key in data) {
  //       if (utils.isEmpty(data[key])) {
  //         data[key] = "";
  //       }
  //       //console.log(data[key]); //-> 키값, 모든 value 출력
  //       //console.log(key); -> key값들만 출력
  //     }
  //
  //     temp[idx] = data;
  //     idx++;
  //   });
  //
  //   fileName += `_${moment().format("YYYYMMDDHHmmss")}.xlsx`;
  //   //xlsx.utils.table_to_sheet()
  //
  //   const workBook = XLSX.utils.book_new();
  //   const workSheet = XLSX.utils.json_to_sheet(temp);
  //
  //   // _autoFitColumns
  //   // ##################
  //   let objectMaxLength: Array<any> = [];
  //   for (let i = 0; i < temp.length; i++) {
  //     let value: Array<string> = Object.values(temp[i]);
  //     for (let j = 0; j < value.length; j++) {
  //       objectMaxLength[j] =
  //         objectMaxLength[j] >= utils.getTextLength(value[j]) ? objectMaxLength[j] : utils.getTextLength(value[j]) + 5;
  //       if (objectMaxLength[j] < 16) {
  //         objectMaxLength[j] = 15;
  //       }
  //       // header cell style
  //       if (i == 0) {
  //         workSheet[`${utils.numToSSColumn(j + 1)}${1}`].s = {
  //           // fill이 안되서 ㅠㅠ
  //           // fgColor과 bgColor 같은 색상으로 해야 한다.
  //           fill: {
  //             //patternType: "solid", // none / solid
  //             fgColor: {
  //               rgb: "ffA6A6A6"
  //             },
  //             bgColor: {
  //               rgb: "ffA6A6A6"
  //             }
  //           },
  //           font: {
  //             name: "Calibri",
  //             bold: true
  //           },
  //           border: {
  //             top: { style: "thin", color: { rgb: "000000" } },
  //             bottom: { style: "thin", color: { rgb: "000000" } },
  //             left: { style: "thin", color: { rgb: "000000" } },
  //             right: { style: "thin", color: { rgb: "000000" } }
  //           },
  //           alignment: {
  //             horizontal: "center",
  //             vertical: "center",
  //             wrapText: false
  //           }
  //         };
  //       }
  //
  //       // data cell style
  //       workSheet[`${utils.numToSSColumn(j + 1)}${i + 2}`].s = {
  //         border: {
  //           top: { style: "thin", color: { rgb: "000000" } },
  //           bottom: { style: "thin", color: { rgb: "000000" } },
  //           left: { style: "thin", color: { rgb: "000000" } },
  //           right: { style: "thin", color: { rgb: "000000" } }
  //         },
  //         font: {
  //           name: "Calibri"
  //         }
  //       };
  //     }
  //   }
  //
  //   // header width
  //   let wscols: Array<any> = [];
  //   objectMaxLength.forEach((el, idx) => {
  //     wscols.push({ width: Number(el) });
  //   });
  //   workSheet["!cols"] = wscols;
  //   // ##################
  //
  //   //const workSheet = xlsx.utils.aoa_to_sheet(data.body);
  //   //xlsx.utils.sheet_add_aoa(workSheet, [[]]); // header set
  //   XLSX.utils.sheet_add_aoa(workSheet, [[]]);
  //   XLSX.utils.book_append_sheet(workBook, workSheet, sheetName);
  //   XLSX.writeFile(workBook, fileName);
  //   utils.log("aaaaaaa");
  // }
}
