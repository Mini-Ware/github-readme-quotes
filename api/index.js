const fetchQuotes = require('../src/fetcher/fetchQuotes')
const renderSVG = require('../src/renderer/renderSVG')

module.exports = async (req,res)=>{
    const data = await fetchQuotes()
    res.setHeader("Content-Type", "image/svg+xml")
    res.setHeader("Cache-Control", `public, max-age=1800`);
    res.send(renderSVG(data))
}