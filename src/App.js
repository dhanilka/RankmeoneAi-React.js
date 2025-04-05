import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import MetaTitle from './Tools/seo_meta_title';
import MetaDesc from './Tools/seo_meta_description';

import SubKeywordGen from './Tools/sub_keyword_generator'
import TopicalMap from './Tools/topical_map';
import BlogPostIdea from './Tools/blog_post_idea';
import YtTagGenerator from './Tools/youtube_tag_generator';
import YtContentIdeas from './Tools/youtube_content_ideas';
import YtHashTagGenerator from './Tools/youtube_hastags';
import InstaCaption from './Tools/instagram_caption';
import TwitterCaption from './Tools/twitter_caption';
import TikTokCaption from './Tools/tiktok_caption';
import FiverTag from './Tools/fiver_tag';
import MidPrompt from './Tools/midjourney_prompt';
import McqBot from './Tools/mcq_bot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seo-meta-title-generator" element={<MetaTitle />} />
        <Route path="/seo-meta-description-generator" element={<MetaDesc />} />
        <Route path='/sub-keyword-generator' element={<SubKeywordGen/>} />
        <Route path="/topical-map-generator" element={<TopicalMap/>} />
        <Route path="/blog-post-ideas" element={<BlogPostIdea/>} />
        <Route path="/youtube-tag-generator" element={<YtTagGenerator/>} />
        <Route path="/youtube-content-ideas" element={<YtContentIdeas/>} />
        <Route path="/youtube-hashtags" element={<YtHashTagGenerator/>} />
        <Route path="/instagram-caption" element={<InstaCaption/>} />
        <Route path="/twitter-caption" element={<TwitterCaption/>} />
        <Route path="/tiktok-caption" element={<TikTokCaption/>} />
        <Route path="/fiver-tag" element={<FiverTag/>} />
        <Route path="/midjourney-prompt" element={<MidPrompt/>} />
        <Route path="/mcq-bot" element={<McqBot/>} />
        {/* Add more routes as needed */}
        
     
      
      </Routes>
    </Router>
  );
}

export default App;
