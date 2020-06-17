console.log("tis is index.js")
let apikey = "76c07286ed1b445689cc39b13a31c48a";
let source = "cbc-news";
let newsaccordion = document.getElementById("newsaccordion");


//grab news container

//create get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `http://newsapi.org/v2/top-headlines?sources=cbc-news&apiKey=76c07286ed1b445689cc39b13a31c48a`, true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            let news = `<div class="accordion" id="newsaccordion">
<div class="card">
    <div class="card-header" id="heading${index}">
        <h2 class="mb-0">
            <button class="btn btn-link " type="button" data-toggle="collapse" data-target="#collapse${index}"
                aria-expanded="true" aria-controls="collapse${index}">
           <b>Breaking News${index+1}</b>   ${element["title"]}
            </button>
        </h2>
    </div>

    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
        data-parent="#newsaccordion">
        <div class="card-body"> ${element["content"]}.<a href="${element['url']}" target = "_blank">Read more here</a></div>
    </div>
</div>
`
            newsHtml += news;

        });
        newsaccordion.innerHTML = newsHtml;
    }
    else {

        console.log("some error occured");
    }

}
xhr.send();
//search bar

let searechbar = document.getElementById("searchbar");

searechbar.addEventListener('input',function(){
    let inputval = searchbar.value.toLowerCase();
    console.log(inputval);
     articles.forEach(function(element){
        let texttosearch = element.title;
        console.log(texttosearch);
        
        })
});


