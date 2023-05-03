import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets () {

    const  newsArticle = (heading , subtitle) =>(
        <div className="widgets__article">
            <div class="widgets__articleLeft">
                <FiberManualRecordIcon/>
                
            </div>
            <div class="widgets__articleRight">
                <h4>{heading}</h4> 
                <p>{subtitle}</p>

            </div>

        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Top Posts</h2>
                <InfoIcon/>
            </div>
            {newsArticle("React JS in 30 days", "Top news - 9099 readers")}
            {newsArticle("Top perfomer of this weak", "Top news - 9099 readers")}
            {newsArticle("Everything new to Firebase", "Top news - 9099 readers")}
            {newsArticle("Mongo DB any better ?", "Top news - 9099 readers")}
            {newsArticle("New Opportunities ", "Top news - 9099 readers")}
            
        </div>
    )
}

export default Widgets
 