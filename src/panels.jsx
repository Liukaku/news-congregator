import React, { Component } from "react";
import NewsPanel from "./newsPanel";
import latestBreaking from "./latestBLM";
import "./index.css"


const apikey = "6a8b5b306cef4b78b4d1f30e6e4b950d";



class Article extends Component {

    constructor(props){
        super(props);
        this.state = {
            content: [
                {
                    author: "Lorem0",
                    content: "Lorem",
                    description: "Lorem",
                    publishedAt: "Lorem",
                    source: {
                        id: "Lorem",
                        name: "Lorem"
                            },
                    title: "Lorem",
                    url: "Lorem",
                    urlToImage: "Lorem"
                },
                {
                    author: "Lorem1",
                    content: "Lorem",
                    description: "Lorem",
                    publishedAt: "Lorem",
                    source: {
                        id: "Lorem",
                        name: "Lorem"
                            },
                    title: "Lorem",
                    url: "Lorem",
                    urlToImage: "Lorem"
                },
                {
                    author: "Lorem2",
                    content: "Lorem",
                    description: "Lorem",
                    publishedAt: "Lorem",
                    source: {
                        id: "Lorem",
                        name: "Lorem"
                            },
                    title: "Lorem",
                    url: "Lorem",
                    urlToImage: "Lorem"
                },
                {
                    author: "Lorem3",
                    content: "Lorem",
                    description: "Lorem",
                    publishedAt: "Lorem",
                    source: {
                        id: "Lorem",
                        name: "Lorem"
                            },
                    title: "Lorem",
                    url: "Lorem",
                    urlToImage: "Lorem"
                },
                {
                    author: "Lorem4",
                    content: "Lorem",
                    description: "Lorem",
                    publishedAt: "Lorem",
                    source: {
                        id: "Lorem",
                        name: "Lorem"
                            },
                    title: "Lorem",
                    url: "Lorem",
                    urlToImage: "Lorem"
                },
                {
                    author: "Lorem5",
                    content: "Lorem",
                    description: "Lorem",
                    publishedAt: "Lorem",
                    source: {
                        id: "Lorem",
                        name: "Lorem"
                            },
                    title: "Lorem",
                    url: "Lorem",
                    urlToImage: "Lorem"
                },
                {
                    author: "Lorem6",
                    content: "Lorem",
                    description: "Lorem",
                    publishedAt: "Lorem",
                    source: {
                        id: "Lorem",
                        name: "Lorem"
                            },
                    title: "Lorem",
                    url: "Lorem",
                    urlToImage: "Lorem"
                },
                {
                    author: "Lorem7",
                    content: "Lorem",
                    description: "Lorem",
                    publishedAt: "Lorem",
                    source: {
                        id: "Lorem",
                        name: "Lorem"
                            },
                    title: "Lorem",
                    url: "Lorem",
                    urlToImage: "Lorem"
                },
                {
                    author: "Lorem8",
                    content: "Lorem",
                    description: "Lorem",
                    publishedAt: "Lorem",
                    source: {
                        id: "Lorem",
                        name: "Lorem"
                            },
                    title: "Lorem",
                    url: "Lorem",
                    urlToImage: "Lorem"
                },
                {
                    author: "Lorem9",
                    content: "Lorem",
                    description: "Lorem",
                    publishedAt: "Lorem",
                    source: {
                        id: "Lorem",
                        name: "Lorem"
                            },
                    title: "Lorem",
                    url: "Lorem",
                    urlToImage: "Lorem"
                },
                {
                    author: "Lorem10",
                    content: "Lorem",
                    description: "Lorem",
                    publishedAt: "Lorem",
                    source: {
                        id: "Lorem",
                        name: "Lorem"
                            },
                    title: "Lorem",
                    url: "Lorem",
                    urlToImage: "Lorem"
                },
                {
                    author: "Lore11",
                    content: "Lorem",
                    description: "Lorem",
                    publishedAt: "Lorem",
                    source: {
                        id: "Lorem",
                        name: "Lorem"
                            },
                    title: "Lorem",
                    url: "Lorem",
                    urlToImage: "Lorem"
                },
                {
                    author: "Lorem12",
                    content: "Lorem",
                    description: "Lorem",
                    publishedAt: "Lorem",
                    source: {
                        id: "Lorem",
                        name: "Lorem"
                            },
                    title: "Lorem",
                    url: "Lorem",
                    urlToImage: "Lorem"
                },
                {
                    author: "Lorem13",
                    content: "Lorem",
                    description: "Lorem",
                    publishedAt: "Lorem",
                    source: {
                        id: "Lorem",
                        name: "Lorem"
                            },
                    title: "Lorem",
                    url: "Lorem",
                    urlToImage: "Lorem"
                },
                {
                    author: "Lorem14",
                    content: "Lorem",
                    description: "Lorem",
                    publishedAt: "Lorem",
                    source: {
                        id: "Lorem",
                        name: "Lorem"
                            },
                    title: "Lorem",
                    url: "Lorem",
                    urlToImage: "Lorem"
                },
                {
                    author: "Lorem15",
                    content: "Lorem",
                    description: "Lorem",
                    publishedAt: "Lorem",
                    source: {
                        id: "Lorem",
                        name: "Lorem"
                            },
                    title: "Lorem",
                    url: "Lorem",
                    urlToImage: "Lorem"
                },
                {
                    author: "Lorem16",
                    content: "Lorem",
                    description: "Lorem",
                    publishedAt: "Lorem",
                    source: {
                        id: "Lorem",
                        name: "Lorem"
                            },
                    title: "Lorem",
                    url: "Lorem",
                    urlToImage: "Lorem"
                },
                {
                    author: "Lorem17",
                    content: "Lorem",
                    description: "Lorem",
                    publishedAt: "Lorem",
                    source: {
                        id: "Lorem",
                        name: "Lorem"
                            },
                    title: "Lorem",
                    url: "Lorem",
                    urlToImage: "Lorem"
                },
                {
                    author: "Lorem18",
                    content: "Lorem",
                    description: "Lorem",
                    publishedAt: "Lorem",
                    source: {
                        id: "Lorem",
                        name: "Lorem"
                            },
                    title: "Lorem",
                    url: "Lorem",
                    urlToImage: "Lorem"
                },
                {
                    author: "Lorem19",
                    content: "Lorem",
                    description: "Lorem",
                    publishedAt: "Lorem",
                    source: {
                        id: "Lorem",
                        name: "Lorem"
                            },
                    title: "Lorem",
                    url: "Lorem",
                    urlToImage: "Lorem"
                }
            ]
        }
    }

     

    componentDidMount(){
        
        let url = 'https://newsapi.org/v2/top-headlines?country=gb' + "&apikey=" + apikey;
        fetch(url)
            .then(response => response.json())
            .then(content => {

                //this takes the API response and checks for a null value against the image and author tag
                //if it is a null image then it replaces it with a stock image
                //if it is a null author then it replaces it with the source.name from the same object
                var newContent = content.articles;
                for (let i = 0; i < newContent.length; i++) {
                    if (newContent[i].urlToImage == null) {
                        newContent[i].urlToImage = "https://breaking911.com/wp-content/uploads/2015/03/stock-breaking-news-graphic-generic.jpg";
                    };
                    if (newContent[i].author == null) {
                        newContent[i].author = newContent[i].source.name;
                    }
                    
                }
                this.setState((state, props) => {
                    return {content: content.articles}
                });
                console.log(this.state.content)
                console.log(this.state)
            })
            console.log(this.state);
            //below this is where we select which articles are to be changed into the small & bigger styles
            //this can be done to random articles by using the random selectors directly below
            //or you can art enter the article numbers

            //this is where we store the value as something that can be entered into a getElementByID

            //counds the number of articles available and stores the value
            const maxNum = this.state.content.length;

            console.log(maxNum);
            
            //this selects a random number between two given values
            function Numbers(min,max){
                return(Math.floor(Math.random()*(max-min+1)+min));
                }

            function buildArticles(smallArticleLeft, smallArticleRight, maxNum) {

                //this then makes the change to 2 articles to make them stackable, they still need to be wrapped as a div at this point however
                document.getElementById(smallArticleLeft).className = "articleDoubleUpLeft";
                document.getElementById(smallArticleRight).className = "articleDoubleUpRight";
            
                //selects those newly amended articles
                var leftArticle = document.getElementById(smallArticleLeft);
                var rightArticle = document.getElementById(smallArticleRight)
            
                //creates the vanilla div wrapper
                let divWrap = document.createElement("div");
            
                //selects the left article as it's always the first one and then looks for the parent node
                let parentDiv = document.getElementById(smallArticleLeft).parentNode;
            
                //inserts the new div before the small left article
                parentDiv.insertBefore(divWrap, leftArticle)
            
                //this then adds the small articles into the DIV
                divWrap.appendChild(leftArticle);
                divWrap.appendChild(rightArticle);
            
                //this then givs the DIV a class name for styling
                divWrap.className = "doublingUp"
            };

            
            //selects the first set of random articles
            var randomLeftNumber = Numbers(5, maxNum - 1) - 1;
            var randomRightNumber = randomLeftNumber + 1;
            var randomLeft = "article" + randomLeftNumber;
            var randomRight = "article" + randomRightNumber;

            console.log(randomLeft);
            console.log(randomRight);



            
            

            buildArticles("article3", "article4", maxNum);
            buildArticles(randomLeft, randomRight, maxNum);
            

            //selects the second set of random articles

            var randomLeftNumber2 = Numbers(5, maxNum - 1) - 1;
            var randomRightNumber2 = randomLeftNumber2 + 1;
            var randomLeft2 = "article" + randomLeftNumber2;
            var randomRight2 = "article" + randomRightNumber2;

            console.log(randomLeftNumber2);
            if (randomLeftNumber2 == randomLeftNumber && randomLeftNumber2 < 18 || randomLeftNumber2 == randomRightNumber && randomLeftNumber2 < 18) {
                
                randomLeftNumber2 = Numbers(5, maxNum - 1) - 1;
                randomRightNumber2 = randomLeftNumber2 + 1;

                randomLeft2 = "article" + randomLeftNumber2;
                randomRight2 = "article" + randomRightNumber2;

                console.log(randomLeft2);
                console.log(randomRight2);

                console.log("matched 1")

                buildArticles(randomLeft2, randomRight2, maxNum);

                return randomLeftNumber2;

                
            }
            if (randomLeftNumber2 == randomLeftNumber || randomLeftNumber2 == randomRightNumber) {
                
                randomLeftNumber2 = Numbers(5, maxNum - 1) - 1;
                randomRightNumber2 = randomLeftNumber2 + 1;

                randomLeft2 = "article" + randomLeftNumber2;
                randomRight2 = "article" + randomRightNumber2;

                console.log(randomLeft2);
                console.log(randomRight2);
                
                console.log("matched 2")

                buildArticles(randomLeft2, randomRight2, maxNum);

                return randomLeftNumber2;
                
            } 
            else {
                var randomRightNumber2 = randomLeftNumber2 + 1;
                var randomLeft2 = "article" + randomLeftNumber2;
                var randomRight2 = "article" + randomRightNumber2;

                console.log(randomLeft2);
                console.log(randomRight2);  
                
                buildArticles(randomLeft2, randomRight2, maxNum);
            }

            

            document.getElementById("article0").className = "articleWide"
            document.getElementById("article1").className = "articleThin"


            
    };

    breakingUpdate = () => {
        let url = 'https://newsapi.org/v2/everything?q=blacklivesmatter' + "&apikey=" + apikey;
        fetch(url)
            .then(response => response.json())
            .then(content => {

                //this takes the API response and checks for a null value against the image and author tag
                //if it is a null image then it replaces it with a stock image
                //if it is a null author then it replaces it with the source.name from the same object
                var newContent = content.articles;
                for (let i = 0; i < newContent.length; i++) {
                    if (newContent[i].urlToImage == null) {
                        newContent[i].urlToImage = "https://breaking911.com/wp-content/uploads/2015/03/stock-breaking-news-graphic-generic.jpg";
                    };
                    if (newContent[i].author == null) {
                        newContent[i].author = newContent[i].source.name;
                    }
                    
                }
                this.setState((state, props) => {
                    return {content: content.articles}
                });
                console.log(this.state.content)
                console.log(this.state)
            })
            console.log(this.state);
            //below this is where we select which articles are to be changed into the small & bigger styles
            //this can be done to random articles by using the random selectors directly below
            //or you can art enter the article numbers

                        //this is where we store the value as something that can be entered into a getElementByID
                        var smallArticleLeft = "article" + 3;
                        var smallArticleRight = "article" + 4;
                        //counds the number of articles available and stores the value
                        var maxNum = this.state.content.length;

                        function buildArticles(smallArticleLeft, smallArticleRight, maxNum) {


                            //this selects a random number from the articles number from the articles listed as well as the next one along
                            var smallArticleSelector1 = Math.floor(Math.random() * maxNum);
                            var smallArticleSelector2 = smallArticleSelector1 + 1;
                        
                            //this then makes the change to 2 articles to make them stackable, they still need to be wrapped as a div at this point however
                            document.getElementById(smallArticleLeft).className = "articleDoubleUpLeft";
                            document.getElementById(smallArticleRight).className = "articleDoubleUpRight";
                        
                            //selects those newly amended articles
                            var leftArticle = document.getElementById(smallArticleLeft);
                            var rightArticle = document.getElementById(smallArticleRight)
                        
                            //creates the vanilla div wrapper
                            let divWrap = document.createElement("div");
                        
                            //selects the left article as it's always the first one and then looks for the parent node
                            let parentDiv = document.getElementById(smallArticleLeft).parentNode;
                        
                            //inserts the new div before the small left article
                            parentDiv.insertBefore(divWrap, leftArticle)
                        
                            //this then adds the small articles into the DIV
                            divWrap.appendChild(leftArticle);
                            divWrap.appendChild(rightArticle);
                        
                            //this then givs the DIV a class name for styling
                            divWrap.className = "doublingUp"
                        };

            buildArticles("article3", "article4", maxNum);
    }

    componentDidUpdate(prevProps, prevState){    


        
        
        var loopChecker = window.location.href.split("&").pop();
        
        
        

        if (loopChecker !== "updated") {
        var testing = window.location.href.split("=").pop();
        

        var smallArticleLeft = "article" + 3;
        var smallArticleRight = "article" + 4;
        //counds the number of articles available and stores the value
        var maxNum = this.state.content.length;

        function buildArticles(smallArticleLeft, smallArticleRight, maxNum) {


            //this selects a random number from the articles number from the articles listed as well as the next one along
            var smallArticleSelector1 = Math.floor(Math.random() * maxNum);
            var smallArticleSelector2 = smallArticleSelector1 + 1;
        
            //this then makes the change to 2 articles to make them stackable, they still need to be wrapped as a div at this point however
            document.getElementById(smallArticleLeft).className = "articleDoubleUpLeft";
            document.getElementById(smallArticleRight).className = "articleDoubleUpRight";
        
            //selects those newly amended articles
            var leftArticle = document.getElementById(smallArticleLeft);
            var rightArticle = document.getElementById(smallArticleRight)
        
            //creates the vanilla div wrapper
            let divWrap = document.createElement("div");
        
            //selects the left article as it's always the first one and then looks for the parent node
            let parentDiv = document.getElementById(smallArticleLeft).parentNode;
        
            //inserts the new div before the small left article
            parentDiv.insertBefore(divWrap, leftArticle)
        
            //this then adds the small articles into the DIV
            divWrap.appendChild(leftArticle);
            divWrap.appendChild(rightArticle);
        
            //this then givs the DIV a class name for styling
            divWrap.className = "doublingUp"

        }

        var newURL = window.location.href + "&updated"
        var testing = window.location.href.split("=").pop();
        
        console.log(testing);

        let url = 'https://newsapi.org/v2/top-headlines?country=gb&category=' + testing + "&apikey=" + apikey;
        
        switch (testing) {
            case "technology":
                
                
                fetch(url)
                    .then(response => response.json())
                    .then(content => {
        
                        //this takes the API response and checks for a null value against the image and author tag
                        //if it is a null image then it replaces it with a stock image
                        //if it is a null author then it replaces it with the source.name from the same object
                        var newContent = content.articles;
                        for (let i = 0; i < newContent.length; i++) {
                            if (newContent[i].urlToImage == null) {
                                newContent[i].urlToImage = "https://breaking911.com/wp-content/uploads/2015/03/stock-breaking-news-graphic-generic.jpg";
                            };
                            if (newContent[i].author == null) {
                                newContent[i].author = newContent[i].source.name;
                            }
                            
                        }
                        this.setState((state, props) => {
                            return {content: content.articles}
                        });
                    })
                    console.log(this.state);
                    
                    buildArticles("article3", "article4", maxNum);
                    window.history.pushState('object or string', 'Title', newURL);
                break;
                case "science":

                fetch(url)
                    .then(response => response.json())
                    .then(content => {
        
                        //this takes the API response and checks for a null value against the image and author tag
                        //if it is a null image then it replaces it with a stock image
                        //if it is a null author then it replaces it with the source.name from the same object
                        var newContent = content.articles;
                        for (let i = 0; i < newContent.length; i++) {
                            if (newContent[i].urlToImage == null) {
                                newContent[i].urlToImage = "https://breaking911.com/wp-content/uploads/2015/03/stock-breaking-news-graphic-generic.jpg";
                            };
                            if (newContent[i].author == null) {
                                newContent[i].author = newContent[i].source.name;
                            }
                            
                        }
                        this.setState((state, props) => {
                            return {content: content.articles}
                        });
                    })
                    console.log(this.state);
                    
                    buildArticles("article3", "article4", maxNum);
                    window.history.pushState('object or string', 'Title', newURL);
                    break
                case "gaming":

                    url = 'https://newsapi.org/v2/everything?q=' + "gaming" + "&apikey=" + apikey;

                    fetch(url)
                        .then(response => response.json())
                        .then(content => {
                            console.log(content);
                            //this takes the API response and checks for a null value against the image and author tag
                            //if it is a null image then it replaces it with a stock image
                            //if it is a null author then it replaces it with the source.name from the same object
                            var newContent = content.articles;
                            for (let i = 0; i < newContent.length; i++) {
                                if (newContent[i].urlToImage == null) {
                                    newContent[i].urlToImage = "https://breaking911.com/wp-content/uploads/2015/03/stock-breaking-news-graphic-generic.jpg";
                                };
                                if (newContent[i].author == null) {
                                    newContent[i].author = newContent[i].source.name;
                                }
                                
                            }
                            this.setState((state, props) => {
                                return {content: content.articles}
                            });
                        })
                        console.log(this.state);
                        
                        buildArticles("article3", "article4", maxNum);
                        window.history.pushState('object or string', 'Title', newURL);
                    break
                case "art":

                url = 'https://newsapi.org/v2/everything?q=' + "art" + "&apikey=" + apikey;

                fetch(url)
                    .then(response => response.json())
                    .then(content => {
        
                        //this takes the API response and checks for a null value against the image and author tag
                        //if it is a null image then it replaces it with a stock image
                        //if it is a null author then it replaces it with the source.name from the same object
                        var newContent = content.articles;
                        for (let i = 0; i < newContent.length; i++) {
                            if (newContent[i].urlToImage == null) {
                                newContent[i].urlToImage = "https://breaking911.com/wp-content/uploads/2015/03/stock-breaking-news-graphic-generic.jpg";
                            };
                            if (newContent[i].author == null) {
                                newContent[i].author = newContent[i].source.name;
                            }
                            
                        }
                        this.setState((state, props) => {
                            return {content: content.articles}
                        });
                    })
                    console.log(this.state);
                    
                    buildArticles("article3", "article4", maxNum);
                    window.history.pushState('object or string', 'Title', newURL);
                    break
                case "food":
                
                url = 'https://newsapi.org/v2/everything?q=' + "food" + "&apikey=" + apikey;
                fetch(url)
                    .then(response => response.json())
                    .then(content => {
        
                        //this takes the API response and checks for a null value against the image and author tag
                        //if it is a null image then it replaces it with a stock image
                        //if it is a null author then it replaces it with the source.name from the same object
                        var newContent = content.articles;
                        for (let i = 0; i < newContent.length; i++) {
                            if (newContent[i].urlToImage == null) {
                                newContent[i].urlToImage = "https://breaking911.com/wp-content/uploads/2015/03/stock-breaking-news-graphic-generic.jpg";
                            };
                            if (newContent[i].author == null) {
                                newContent[i].author = newContent[i].source.name;
                            }
                            
                        }
                        this.setState((state, props) => {
                            return {content: content.articles}
                        });
                    })
                    console.log(this.state);
                    
                    buildArticles("article3", "article4", maxNum);
                    window.history.pushState('object or string', 'Title', newURL);
                    break
                case "anime":

                    url = 'https://newsapi.org/v2/everything?language=en&q=' + "anime" + "&apikey=" + apikey;
                fetch(url)
                    .then(response => response.json())
                    .then(content => {
        
                        //this takes the API response and checks for a null value against the image and author tag
                        //if it is a null image then it replaces it with a stock image
                        //if it is a null author then it replaces it with the source.name from the same object
                        var newContent = content.articles;
                        for (let i = 0; i < newContent.length; i++) {
                            if (newContent[i].urlToImage == null) {
                                newContent[i].urlToImage = "https://breaking911.com/wp-content/uploads/2015/03/stock-breaking-news-graphic-generic.jpg";
                            };
                            if (newContent[i].author == null) {
                                newContent[i].author = newContent[i].source.name;
                            }
                            
                        }
                        this.setState((state, props) => {
                            return {content: content.articles}
                        });
                    })
                    console.log(this.state);
                    
                    buildArticles("article3", "article4", maxNum);
                    window.history.pushState('object or string', 'Title', newURL);
                    break
                    case "hentai":

                        url = 'https://newsapi.org/v2/everything?language=en&q=' + "hentai" + "&apikey=" + apikey;
                    fetch(url)
                        .then(response => response.json())
                        .then(content => {
            
                            //this takes the API response and checks for a null value against the image and author tag
                            //if it is a null image then it replaces it with a stock image
                            //if it is a null author then it replaces it with the source.name from the same object
                            var newContent = content.articles;
                            for (let i = 0; i < newContent.length; i++) {
                                if (newContent[i].urlToImage == null) {
                                    newContent[i].urlToImage = "https://breaking911.com/wp-content/uploads/2015/03/stock-breaking-news-graphic-generic.jpg";
                                };
                                if (newContent[i].author == null) {
                                    newContent[i].author = newContent[i].source.name;
                                }
                                
                            }
                            this.setState((state, props) => {
                                return {content: content.articles}
                            });
                        })
                        console.log(this.state);
                        
                        buildArticles("article3", "article4", maxNum);
                        window.history.pushState('object or string', 'Title', newURL);
                        break
            default:
                break;
        }
    }
    }
    


    render() {

                const articleList = this.state.content.map((newContent , i) => {
                    return (
                        
                        <NewsPanel
                        articleID={"article" + i}
                        key={i}
                        articleClass="indiArticle"
                        imgsrc={newContent.urlToImage}
                        onError="this.onerror=null;this.src='https://breaking911.com/wp-content/uploads/2015/03/stock-breaking-news-graphic-generic.jpg';"
                        articleURL={newContent.url}
                        articleTitle={newContent.title}
                        articleAuthor={"-by " + newContent.author}
                    />);
                })


    

    return (
        <div>
            <div className="latestBreaking" id="latestBreakingID">
                <p className="latestText" id="latestTextID" onClick={this.breakingUpdate}>
                    Click here for up to date BLM information
                </p>
            </div>
        <div className="flexContainer">
            {articleList}
        </div>
        </div>
    );
}
}

export default Article;