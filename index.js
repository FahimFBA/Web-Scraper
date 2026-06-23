const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const url = 'https://www.theguardian.com/international'
const guardianOrigin = 'https://www.theguardian.com'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []
        const seenUrls = new Set()

        $('a[data-link-name="article"], a[data-link-name*="media-"]', html).each(function () {
            const link = $(this)
            const href = link.attr('href')
            const title = link.attr('aria-label')
                || link.closest('li, div').find('.headline-text').first().text()
                || link.text()

            if (!href || !title.trim()) {
                return
            }

            const articleUrl = new URL(href, guardianOrigin).href

            if (seenUrls.has(articleUrl)) {
                return
            }

            seenUrls.add(articleUrl)

            articles.push({
                title: title.trim(),
                url: articleUrl
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
