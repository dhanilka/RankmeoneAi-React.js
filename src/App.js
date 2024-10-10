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
      
      </Routes>
    </Router>
  );
}

export default App;
