import { section } from "framer-motion/client";
import React from "react";
import "./scss/_homearticle.scss";
import { HomeArticleFunction } from "./HomeArticleFunction";

// Icons
import { Calendar } from "lucide-react";

const HomeArticle = () => {
    const { liveStream, latestNews } = HomeArticleFunction();
    return (
        <section className="home-article">
            <div className="home-article-container">
                {/* Live stream */}
                <div className="div1">
                    <div className="live-stream">
                        <img src={liveStream.image} alt={liveStream.title} />
                        <h3>{liveStream.title}</h3>
                        <p>{liveStream.description}</p>
                    </div>
                </div>

                {/* Latest News */}
                <div className="div2">
                    <div className="latest-news-container">
                        <h3>Latest News</h3>
                        <div className="news-items-scroll">
                            {latestNews.map((item) => (
                                <div key={item.id} className="latest-news-item">
                                    <div className="news-date">
                                        <Calendar />
                                        <span>
                                            {" "}
                                            {item.month} {item.day}
                                        </span>
                                    </div>
                                    <li>{item.description}</li>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="div3">3</div>
                <div className="div4">4</div>
                <div className="div5">5</div>
                <div className="div6">6</div>
                <div className="div7">7</div>
                <div className="div8">8</div>
            </div>
        </section>
    );
};

export default HomeArticle;