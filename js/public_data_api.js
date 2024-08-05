import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.OPEN_PORTAL_API_KEY;

var url = 'http://apis.data.go.kr/1140100/minAnalsInfoView6/minAgeClsfDocCnt'; 
var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + API_KEY; 
queryParams += '&' + encodeURIComponent('target') + '=' + encodeURIComponent('pttn'); 
queryParams += '&' + encodeURIComponent('dateFrom') + '=' + encodeURIComponent('20240720'); 
queryParams += '&' + encodeURIComponent('dateTo') + '=' + encodeURIComponent('20240720'); 
 
const URL = url + queryParams;
fetch(URL)
    .then(res => res.json())
    .then(data => {
        console.log("국민권익위원회_민원빅데이터_분석정보_API_2023");
        const keyword = data.body.items[0].item.keyword;
        console.log("keyword(연령):", keyword, "\n"); // keyword : 연령정보없음

        for(let i=0; i<10; i++) { // 10개의 분류(classificaion) 출력
            const label = data.body.items[0].item.classifications[i].classification.label;
            const hits = data.body.items[0].item.classifications[i].classification.hits;
            
            console.log("label:", label, "(", hits, "건)");
            console.log("------------------------------");
        }
    })
    .catch((error) => console.log("error:", error));
    