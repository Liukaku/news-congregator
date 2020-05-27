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
        console.log(this.state);
        let url = 'https://newsapi.org/v2/top-headlines?country=gb&category=technology' + "&apikey=" + apikey;
        fetch(url)
            .then(response => response.json())
            .then(content => {
                this.setState((state, props) => {
                    return {content: content.articles}
                });
                console.log(this.state.content[0].urlToImage)
                console.log(this.state)
            })
    }

    render() {

        
        return (
            <div className="flexContainer">
            <NewsPanel
                articleClass="articleWide"
                imgsrc={this.state.content[0].urlToImage}
                articleURL={this.state.content[0].url}
                articleTitle={this.state.content[0].title}
                articleAuthor={"-by " + this.state.content[0].author}
            />
             <NewsPanel
                articleClass="articleThin"
                imgsrc={this.state.content[1].urlToImage}
                articleURL={this.state.content[1].url}
                articleTitle={this.state.content[1].title}
                articleAuthor={"-by " + this.state.content[1].author}
            />
            <div className="doublingUp">
            <NewsPanel
                articleClass="articleDoubleUpLeft"
                imgsrc={this.state.content[2].urlToImage}
                articleURL={this.state.content[2].url}
                articleTitle={this.state.content[2].title}
                articleAuthor={"-by " + this.state.content[2].author}
            />
            <NewsPanel
                articleClass="articleDoubleUpRight"
                imgsrc={this.state.content[3].urlToImage}
                articleURL={this.state.content[3].url}
                articleTitle={this.state.content[3].title}
                articleAuthor={"-by " + this.state.content[3].author}
            />
            </div>
            
                        <NewsPanel
                articleClass="indiArticle"
                imgsrc={this.state.content[4].urlToImage}
                articleURL={this.state.content[4].url}
                articleTitle={this.state.content[4].title}
                articleAuthor={"-by " + this.state.content[4].author}
            />
             <NewsPanel
                articleClass="indiArticle"
                imgsrc={this.state.content[5].urlToImage}
                articleURL={this.state.content[5].url}
                articleTitle={this.state.content[5].title}
                articleAuthor={"-by " + this.state.content[5].author}
            />
            <NewsPanel
                articleClass="indiArticle"
                imgsrc={this.state.content[6].urlToImage}
                articleURL={this.state.content[6].url}
                articleTitle={this.state.content[6].title}
                articleAuthor={"-by " + this.state.content[6].author}
            />
            <NewsPanel
                articleClass="indiArticle"
                imgsrc={this.state.content[7].urlToImage}
                articleURL={this.state.content[7].url}
                articleTitle={this.state.content[7].title}
                articleAuthor={"-by " + this.state.content[7].author}
            />
            <NewsPanel
                articleClass="indiArticle"
                imgsrc={this.state.content[8].urlToImage}
                articleURL={this.state.content[8].url}
                articleTitle={this.state.content[8].title}
                articleAuthor={"-by " + this.state.content[8].author}
            />
            </div>
        );
    }
}

export default Article;