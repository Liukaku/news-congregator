import React, { Component } from "react";
import NewsPanel from "./newsPanel";
import "./index.css"

const apikey = "6a8b5b306cef4b78b4d1f30e6e4b950d";



class Article extends Component {

    constructor(props){
        super(props);
        this.state = {
            content: [
                {
                    author: "Lorem",
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
                    author: "Lorem",
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
                    author: "Lorem",
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
                    author: "Lorem",
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
                    author: "Lorem",
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
                    author: "Lorem",
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
                    author: "Lorem",
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
                    author: "Lorem",
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
                    author: "Lorem",
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

            //counds the number of articles available and stores the value
            var maxNum = this.state.content.length;

            //this selects a random number from the articles number from the articles listed as well as the next one along
            var smallArticleSelector1 = Math.floor(Math.random() * maxNum);
            var smallArticleSelector2 = smallArticleSelector1 + 1;

            //this is where we store the value as something that can be entered into a getElementByID
            var smallArticleLeft = "article" + 3;
            var smallArticleRight = "article" + 4;
            
        
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
        <div className="flexContainer">
            {articleList}
        </div>
    );
}
}

export default Article;