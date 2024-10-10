import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function all_tools() {
  return (
    <div>
      <section className="container ">
        {/* <h2 className="text-center mb-4">All Tools</h2> */}

        {/* Web Tools Section */}
        <h5 className='text-center pb-1'>Web SEO Tools</h5>
        <hr />
        <div className="row pb-3">
          {[
            { title: "SEO Meta Title 📝", text: "Generate optimized meta titles for better SEO results and higher search rankings." ,link:"/seo-meta-title-generator"},
            { title: "SEO Meta Description 📜", text: "Create compelling meta descriptions to enhance search visibility.", link:"/seo-meta-description-generator" },
            { title: "Sub Keyword Generator 📊", text: "Generate relevant sub-keywords to target a broader audience." , link:"/sub-keyword-generator"},
            { title: "Topical Map Generator 📑", text: "Create a topical map to organize your content strategy efficiently." , link:"/topical-map-generator"},
            { title: "Blog Post Ideas 💡", text: "Get innovative blog post ideas based on trending topics.", link:"/blog-post-ideas" },
            { title: "JSON-LD FAQ Generator ❓", text: "Generate JSON-LD structured FAQs for better SEO and rich search results."},

          ].map((tool, index) => (
            <div key={index} className="col-md-4">
            {/* <Link to={tool.link} className="card mb-4 shadow-sm text-decoration-none text-dark hover-card"> */}
            <a href={tool.link} className="card mb-4 shadow-sm text-decoration-none text-dark hover-card">
  {/* Your card content here */}

                <div className="card-body">
                  <h5 className="card-title">{tool.title}</h5>
                  <p className="card-text">{tool.text}</p>
                </div>
                </a>
                {/* </Link> */}
            </div>
          ))}
        </div>

        {/* YouTube Tools Section */}
        <h5 className='text-center pb-1'>Social Media Tools</h5>
        <hr />
        <div className="row pb-3">
          {[
            { title: "YouTube Tag Generator 🏷", text: "Generate effective tags to increase the reach of your YouTube videos.", link:"/youtube-tag-generator" },
            { title: "YouTube Content Ideas 💡", text: "Discover new content ideas tailored for your YouTube channel.", link:"/youtube-content-ideas" },
            { title: "YouTube #Hashtags Generator 🔖", text: "Find the best hashtags to boost the visibility of your videos." },
            { title: "Instagram Caption Generator 📝", text: "Create engaging Instagram captions to captivate your audience." },
            { title: "Twitter Caption Generator 📰", text: "Generate catchy Twitter captions to increase engagement." },
            { title: "TikTok Caption Generator 📜", text: "Discover creative TikTok captions to go viral and boost engagement instantly." },
          ].map((tool, index) => (
            <div key={index} className="col-md-4">
              <a href={tool.link} className="card mb-4 shadow-sm text-decoration-none text-dark hover-card">
                <div className="card-body">
                  <h5 className="card-title">{tool.title}</h5>
                  <p className="card-text">{tool.text}</p>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Social Media Tools Section */}
        <h5 className='text-center pb-1'>Other Tools</h5>
        <hr />
        <div className="row pb-3">
          {[
            { title: "Fiverr Tag Generator 🏷️", text: "Generate tags to boost Fiverr gig visibility and attract buyers." },
{ title: "Midjourney Prompt Generator 🎨", text: "Create creative prompts for generating unique Midjourney AI images." },
{ title: "MCQ Bot 🧠", text: "Quickly find answers for MCQ questions for tests or quizzes." },


          ].map((tool, index) => (
            <div key={index} className="col-md-4">
              <a href="#" className="card mb-4 shadow-sm text-decoration-none text-dark hover-card">
                <div className="card-body">
                  <h5 className="card-title">{tool.title}</h5>
                  <p className="card-text">{tool.text}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
